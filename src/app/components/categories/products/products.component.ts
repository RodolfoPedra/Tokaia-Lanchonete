import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  queryParams: number;
  value1: number;
  value2: number;
  valorTotal: number = 0;
  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(param => {
      this.queryParams = param.id;
    })
  }

  ngOnInit(): void {
    this.mostrarParams()
  }

  mostrarParams() {
    console.log('params ',this.queryParams);

  }

  calcularSoma() {
    this.valorTotal ? (this.valorTotal += 1) : (this.valorTotal = 1);
  }

  calcularSub() {
    this.valorTotal ? (this.valorTotal -= 1) : 0;
  }
}
