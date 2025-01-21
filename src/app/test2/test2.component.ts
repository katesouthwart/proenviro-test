import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { NgIf, NgFor } from '@angular/common';
import { ProductComponent } from '../product/product.component';

@Component({
  selector: 'app-test2',
  standalone: true,
  imports: [NgIf, NgFor, ProductComponent],
  templateUrl: './test2.component.html',
  styleUrl: './test2.component.css',
  providers: [DataService]
})

export class Test2Component implements OnInit {
  products: any[] = [];
  data: any[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.fetchData().subscribe(
      (data: any) => {
        this.products = data.products;
        this.data = data;
        console.log(this.data);
      },
      (error: any) => {
        console.error('Error', error);
      }
    );
  }

}
