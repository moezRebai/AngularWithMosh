import { Injectable } from '@angular/core';
import { AuthorComponent } from './author/author.component';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  constructor() { }

  getAuthors()
  {
    return ["author1", "author2", "author3", "author4"];
  }

  getAuthors2(){

      let author1 = new AuthorComponent();
      author1.setAuthor("Alex", "0654896598", "92400, courbevoie");
      let author2 = new AuthorComponent();
      author1.setAuthor("Jhon", "0654899098", "92000, Puteaux");
      let author3 = new AuthorComponent();
      author1.setAuthor("Steve", "0654895598", "94000, Creteil");
      let author4 = new AuthorComponent();
      author1.setAuthor("Moez", "0754896598", "95100, Unknown");

      return [author1, author2, author3, author4];
  }
}
