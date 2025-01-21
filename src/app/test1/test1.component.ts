import { Component } from '@angular/core';

@Component({
  selector: 'app-test1',
  imports: [],
  templateUrl: './test1.component.html',
  styleUrl: './test1.component.css'
})
export class Test1Component {
  pagetitle: string = 'Task One:';
  intro: string = 'Add the PrimeNG library to your project.';
  excerpt: string = "In this project, I've used the PrimeNG library to create buttons for the menu, along with a button for categories in the product directory. I've also used a snippet from PrimeNG for the product rating, including a prime icon." ;
}
