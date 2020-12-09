import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent implements OnInit {
  value1: number;
  value2: number;
  valorTotal: number = 0;
  constructor() {}

  ngOnInit(): void {}

  calcularSoma() {
    this.valorTotal ? (this.valorTotal += 1) : (this.valorTotal = 1);
  }

  calcularSub() {
    this.valorTotal ? (this.valorTotal -= 1) : 0;
  }
}
