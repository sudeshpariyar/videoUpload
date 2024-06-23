import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

interface IVideoUpload {
  videoFile: File;
  title: string;
  description: string;
}

@Injectable({ providedIn: 'root' })
export class VideoService {
  constructor(private http: HttpClient) {}

  uploadVideo = ({
    videoFile,
    title,
    description,
  }: IVideoUpload): Observable<any> => {
    const formData = new FormData();
    formData.append('file', videoFile);
    formData.append('title', title);
    formData.append('description', description);

    return this.http.post('http://localhost:8000/api/video', formData, {
      withCredentials: true,
    });
  };

  getSingleVideoToPlay = ({ id }: { id: number }): Observable<any> => {
    return this.http.get(`http://localhost:8000/api/video/${id}`, {
      withCredentials: true,
    });
  };
}
