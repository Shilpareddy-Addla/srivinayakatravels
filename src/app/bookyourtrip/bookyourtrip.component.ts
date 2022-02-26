import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-bookyourtrip',
  templateUrl: './bookyourtrip.component.html',
  styleUrls: ['./bookyourtrip.component.css']
})
export class BookyourtripComponent implements OnInit {
  sendData(Data:NgForm){
console.log("data from form is",Data.value);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
