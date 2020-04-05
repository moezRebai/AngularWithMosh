import {Component} from '@angular/core'
import { CoursesService } from './courses.service';

@Component(
    {
        selector: 'courses',
        template: `<h2>{{title}}
        <ul>
            <li *ngFor="let course of courses">
                {{course}}
            </li>
        </ul>
        </h2>`
    }
)

export class CoursesComponent {

     title : string = "List of courses From Service";
     courses: string[];

     constructor(_service : CoursesService) {
         
        this.courses = _service.getCourses();
         
     }

     getTitle()
     {
         return this.title;
     }
}