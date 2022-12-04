import { Component } from '@angular/core';

@Component({
  selector: 'app-grammer-correction',
  templateUrl: './grammer-correction.component.html',
  styleUrls: ['./grammer-correction.component.css']
})
export class GrammerCorrectionComponent {


text:string;

  constructor(){

    this.text = "Write your english sentence in here"
  }



  ngOnInit(){

  }

  updateObj() {
    console.log(this.text)
    // also possible for a generic update:
    // Object.keys(this.obj).forEach(k => { this.obj[k] = tempObj[k]; });
  }

}
