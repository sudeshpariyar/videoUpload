export interface IVideo {
  description: string;
  fileName: string;
  fileSize: number | null;
  fileType: string;
  id: number | null;
  title: string;
  updatedFileName: string;
  videoURL: string;
}
export interface IUserRegisterResponse {
  status: string;
  message: string;
}
