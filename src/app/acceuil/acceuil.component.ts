import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.component.html',
  styleUrls: ['./acceuil.component.css']
})
export class AcceuilComponent implements OnInit {

  constructor() { }
  signUpForm: boolean = false;
  openForm:boolean = true;
  ngOnInit(): void {
  }
  recieveMessage($event){
    this.signUpForm=$event;
  }
  xxxx($event:any){
    console.log("done");
    this.openForm=$event;
  }
  closePopUp(){
    this.openForm=false;
  }

}
