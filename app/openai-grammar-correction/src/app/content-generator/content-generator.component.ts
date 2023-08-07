import { Component, ViewEncapsulation } from '@angular/core';
import { debounceTime } from 'rxjs/operators';
import { GrammerCorrectionService } from '../grammer-correction.service';

@Component({
  selector: 'app-content-generator',
  templateUrl: './content-generator.component.html',
  styleUrls: ['./content-generator.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class ContentGeneratorComponent {
  childCategory:string;
  mainCategory: string;
  productName: string;

  text: string;
  standartEnglishText: any;

  constructor(private grammerCorrectionService: GrammerCorrectionService) {
    this.text = '';
    this.standartEnglishText = '';
    this.childCategory = '';
    this.mainCategory= "";
    this.productName = "";
  }

  ngOnInit() {}

  generateContent() {
    this.grammerCorrectionService
      .generateContent(this.mainCategory,this.childCategory,this.productName)
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
}
