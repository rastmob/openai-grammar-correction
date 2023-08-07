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

  generateContent(mainCategory: string, childCategory:string, productName:string) {
    return this.http.post(`${this.apiUrl}generateContent`, {
      mainCategory: mainCategory,
      childCategory: childCategory,
      productName: productName,
    });
  }

  createImage(text: string) {
    return this.http.post(`${this.apiUrl}image`, {
      prompt: text,
      size: "1024px1024px",
    });
  }


  audioTranscibe(text: string) {
    return this.http.post(`${this.apiUrl}speechToText`, {
      userText: text,
    });
  }

  uploadFile(formData:any){
    return this.http.post(`${this.apiUrl}speechToText`, formData);
  }

  uploadImg(formData:any){
    return this.http.post(`${this.apiUrl}image`, formData);
  }

  
}
