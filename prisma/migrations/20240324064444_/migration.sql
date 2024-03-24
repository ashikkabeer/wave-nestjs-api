/*
  Warnings:

  - Changed the type of `semester` on the `Chat` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Chat" DROP COLUMN "semester",
ADD COLUMN     "semester" INTEGER NOT NULL;
