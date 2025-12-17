// scripts/db-guard.mjs
import fs from "node:fs";

function readEnvFile(path) {
  if (!fs.existsSync(path)) return {};
  const txt = fs.readFileSync(path, "utf8");
  const out = {};
  for (const line of txt.split("\n")) {
    const t = line.trim();
    if (!t || t.startsWith("#")) continue;
    const m = t.match(/^([A-Za-z_][A-Za-z0-9_]*)=(.*)$/);
    if (!m) continue;
    let val = m[2].trim();
    if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
      val = val.slice(1, -1);
    }
    out[m[1]] = val;
  }
  return out;
}

function safeParseUrl(raw) {
  // handle weird urls like //user:pass@host:port...
  const fixed = raw.startsWith("//") ? `postgresql:${raw}` : raw;
  return new URL(fixed);
}

function getSupabaseRefFromDbHost(hostname) {
  // db.<ref>.supabase.co  OR  aws-...pooler.supabase.com (pooler doesn't include ref)
  const m = hostname.match(/^db\.([a-z0-9]+)\.supabase\.co$/i);
  return m ? m[1] : null;
}

function getSupabaseRefFromPublicUrl(url) {
  // https://<ref>.supabase.co
  try {
    const u = new URL(url);
    const m = u.hostname.match(/^([a-z0-9]+)\.supabase\.co$/i);
    return m ? m[1] : null;
  } catch {
    return null;
  }
}

const env = {
  ...readEnvFile(".env"),
  ...readEnvFile(".env.local"),
  ...process.env, // allow shell overrides
};

const dbUrlRaw = env.DATABASE_URL;
if (!dbUrlRaw) {
  console.error("❌ DATABASE_URL not found (checked .env, .env.local, and process env).");
  process.exit(1);
}

const dbUrl = safeParseUrl(dbUrlRaw);
const host = dbUrl.hostname;
const port = dbUrl.port || "(default)";
const dbName = dbUrl.pathname?.replace("/", "") || "(none)";
const isPgbouncer = (dbUrl.searchParams.get("pgbouncer") || "").toLowerCase() === "true";

console.log("🔎 DB target check:");
console.log(`- host: ${host}`);
console.log(`- port: ${port}`);
console.log(`- db:   ${dbName || "(none)"}`);
console.log(`- pgbouncer: ${isPgbouncer ? "true" : "false"}`);

// If they set NEXT_PUBLIC_SUPABASE_URL, verify we're using the same project ref.
const publicUrl = env.NEXT_PUBLIC_SUPABASE_URL;
const refPublic = publicUrl ? getSupabaseRefFromPublicUrl(publicUrl) : null;
const refDb = getSupabaseRefFromDbHost(host);

if (refPublic && refDb && refPublic !== refDb) {
  console.error("\n🚫 BLOCKED: Supabase project mismatch!");
  console.error(`NEXT_PUBLIC_SUPABASE_URL ref: ${refPublic}`);
  console.error(`DATABASE_URL host ref:        ${refDb}`);
  console.error("This usually means you're about to migrate the wrong database.");
  console.error("\nIf you *really* intend to do this, rerun with: ALLOW_DB_MISMATCH=1");
  process.exit(1);
}

if (env.ALLOW_DB_MISMATCH === "1") {
  console.log("\n⚠️ Override enabled (ALLOW_DB_MISMATCH=1). Proceeding anyway.");
}

console.log("\n✅ DB check passed.");
