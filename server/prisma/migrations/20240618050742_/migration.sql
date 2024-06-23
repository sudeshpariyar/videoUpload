/*
  Warnings:

  - You are about to drop the column `fileSizeInMB` on the `VideoFile` table. All the data in the column will be lost.
  - Added the required column `fileSize` to the `VideoFile` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "VideoFile" DROP COLUMN "fileSizeInMB",
ADD COLUMN     "fileSize" INTEGER NOT NULL;
