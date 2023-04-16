import { Component, ViewEncapsulation } from '@angular/core';
import { debounceTime } from 'rxjs/operators';
import { GrammerCorrectionService } from '../grammer-correction.service';

@Component({
  selector: 'app-grammer-correction',
  templateUrl: './grammer-correction.component.html',
  styleUrls: ['./grammer-correction.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class GrammarCorrectionComponent {


text:string;
standartEnglishText:any;

  constructor(private grammerCorrectionService: GrammerCorrectionService){

    this.text = ""
    this.standartEnglishText = "";
  }



  ngOnInit(){

  }

  updateObj() {
      this.grammerCorrectionService.getCorrection(this.text).pipe(debounceTime(5000)).subscribe(
        data => {
            this.standartEnglishText = data;
        }, error => {
          alert(error.error.message);
        }
      )
  }

 

}
