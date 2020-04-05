import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {

  private _name : string;
  private _mobile : string;
  private _adress : string;

  constructor() { }

  ngOnInit(): void {
  }
  
  setAuthor(name : string, phone : string, adress : string)
  {
    this._name = name;
    this._mobile = phone;
    this._adress = adress;
  }
  
  getinfo(){
    return `Author name : ${this._name} ,
     Author phone : ${this._mobile} ,
      Author phone : ${this._adress}`;
  }

}
