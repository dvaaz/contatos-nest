/*
  Warnings:

  - You are about to drop the column `roleId` on the `users` table. All the data in the column will be lost.
  - Added the required column `roleName` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `users` DROP COLUMN `roleId`,
    ADD COLUMN `roleName` VARCHAR(191) NOT NULL;
