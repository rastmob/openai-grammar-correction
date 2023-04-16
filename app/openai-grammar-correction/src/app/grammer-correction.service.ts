import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class GrammerCorrectionService {
  apiUrl: string = 'http://localhost:4011/';

  constructor(private http: HttpClient) {}

  getCorrection(text: string) {
    return this.http.post(`${this.apiUrl}correction`, {
      userText: text,
    });
  }

  audioTranscibe(text: string) {
    return this.http.post(`${this.apiUrl}speechToText`, {
      userText: text,
    });
  }

  uploadFile(formData:any){
    return this.http.post(`${this.apiUrl}audioFile`, {
      formData
    });
  }
}
