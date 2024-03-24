/*
  Warnings:

  - Added the required column `author` to the `Chat` table without a default value. This is not possible if the table is not empty.
  - Added the required column `department` to the `Chat` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description` to the `Chat` table without a default value. This is not possible if the table is not empty.
  - Added the required column `mentor` to the `Chat` table without a default value. This is not possible if the table is not empty.
  - Added the required column `semester` to the `Chat` table without a default value. This is not possible if the table is not empty.
  - Added the required column `subject` to the `Chat` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title` to the `Chat` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Chat" ADD COLUMN     "author" TEXT NOT NULL,
ADD COLUMN     "department" TEXT NOT NULL,
ADD COLUMN     "description" TEXT NOT NULL,
ADD COLUMN     "mentor" TEXT NOT NULL,
ADD COLUMN     "semester" TEXT NOT NULL,
ADD COLUMN     "subject" TEXT NOT NULL,
ADD COLUMN     "title" TEXT NOT NULL;
