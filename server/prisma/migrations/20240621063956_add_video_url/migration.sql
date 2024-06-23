/*
  Warnings:

  - Added the required column `videoURL` to the `VideoFile` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "VideoFile" ADD COLUMN     "videoURL" TEXT NOT NULL;
