import { Request, Response } from "express";
import prisma from "../../db/prisma";

export const uploadVideo = async (req: Request, res: Response) => {
  console.log("Uploading video", req.file);

  if (!req.file) {
    res.status(404).json({ message: "Something went wrong Try Again." });
  } else {
    const videoData = await prisma.videoFile.create({
      data: {
        title: req.body.title,
        description: req.body.description,
        fileName: req.file.originalname,
        fileType: req.file.mimetype,
        updatedFileName: req.file.filename,
        fileSize: req.file.size,
        videoURL: `http://localhost:${process.env.PORT}/uploads/videos/${req.file.filename}`,
      },
    });
    res.status(200).json(videoData);
  }
};

export const getIndividualVideo = async (req: Request, res: Response) => {
  const { id } = req.params;

  if (!id) {
    res.status(404).json({ message: "No video found" });
  }
  const videoData = await prisma.videoFile.findUnique({
    where: { id: parseInt(id) },
  });
  res.status(200).json(videoData);
};
