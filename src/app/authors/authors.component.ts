import { AuthorService } from './../author.service';
import { Component, OnInit } from '@angular/core';
import { AuthorComponent } from '../author/author.component';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {

  title = "Authors"
  authors: string[];
  constructor(_service : AuthorService) {

      this.authors = _service.getAuthors();
   }

  ngOnInit(): void {
  }

}
