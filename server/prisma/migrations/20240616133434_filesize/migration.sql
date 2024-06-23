/*
  Warnings:

  - You are about to alter the column `fileSizeInMB` on the `VideoFile` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Integer`.

*/
-- AlterTable
ALTER TABLE "VideoFile" ALTER COLUMN "fileSizeInMB" SET DATA TYPE INTEGER;
