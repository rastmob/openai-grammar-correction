import { Component } from '@angular/core';
import { debounceTime } from 'rxjs/operators';
import { GrammerCorrectionService } from '../grammer-correction.service';

@Component({
  selector: 'app-image-create',
  templateUrl: './image-create.component.html',
  styleUrls: ['./image-create.component.css'],
})
export class ImageCreateComponent {
  fileName: string = '';
  text: string;
  standartEnglishText: any;

  constructor(private grammerCorrectionService: GrammerCorrectionService) {
    this.text = '';
    this.standartEnglishText = '';
  }

  ngOnInit() {}

  createVariations() {
    this.grammerCorrectionService
      .audioTranscibe('')
      .pipe(debounceTime(5000))
      .subscribe(
        (data) => {
          this.standartEnglishText = data;
        },
        (error) => {
          alert(error.error.message);
        }
      );
  }

  onFileSelected(event:any) {

    const file:File = event.target.files[0];

    if (file) {

        this.fileName = file.name;

        const formData = new FormData();

        formData.append("audioFile", file);

        this.grammerCorrectionService
        .uploadImg(formData)
        .subscribe(
          (data) => {
            this.standartEnglishText = data;
          },
          (error) => {
            alert(error.error.message);
          }
        );
    }
}
}
