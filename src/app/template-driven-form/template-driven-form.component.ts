import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent implements OnInit {
  profile = {
    username: 'Ba Dat',
    email: 'lebadat1996ptit@gmail.com',
    facebook: 'Ba Dat',
    twitter: 'BaDat1996',
    website: 'lebadat1996',
    tel: '0334403811'
  };

  constructor() {
  }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  onSubmit(value: any) {
    console.log(value);
  }
}
