import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuComponent } from './menu/menu.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'benchmark-test';
  pagetitle: string = "Kaitlyn Myer's Benchmark Test";
  intro: string = 'create a menu to display the test1 and test2 components';
  subtitle: string = "Thank you for your consideration!"
}
