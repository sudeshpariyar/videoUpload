/*
  Warnings:

  - Added the required column `fileSizeInMB` to the `VideoFile` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "VideoFile" ADD COLUMN     "fileSizeInMB" DOUBLE PRECISION NOT NULL;
