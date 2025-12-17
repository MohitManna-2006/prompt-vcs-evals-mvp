/*
  Warnings:

  - You are about to drop the `PromptVersion` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "PromptVersion" DROP CONSTRAINT "PromptVersion_promptId_fkey";

-- DropTable
DROP TABLE "PromptVersion";
