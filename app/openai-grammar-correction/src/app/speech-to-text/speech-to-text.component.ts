import { Component } from '@angular/core';
import { debounceTime } from 'rxjs/operators';
import { GrammerCorrectionService } from '../grammer-correction.service';

@Component({
  selector: 'app-speech-to-text',
  templateUrl: './speech-to-text.component.html',
  styleUrls: ['./speech-to-text.component.css']
})
export class SpeechToTextComponent {


text:string;
standartEnglishText:any;

constructor(private grammerCorrectionService: GrammerCorrectionService){

    this.text = ""
    this.standartEnglishText = "";
  }



  ngOnInit(){

  }


  runAudioFile(){
    this.grammerCorrectionService.audioTranscibe("").pipe(debounceTime(5000)).subscribe(
        data => {
            this.standartEnglishText = data;
        }, error => {
          alert(error.error.message);
        }
      )
  }


 

}
