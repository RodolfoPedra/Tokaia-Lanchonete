import { Component, Input, OnInit } from '@angular/core';
import { Products } from 'src/app/models/products.model';


@Component({
  selector: 'app-cardproduct',
  templateUrl: './cardproduct.component.html',
  styleUrls: ['./cardproduct.component.scss']
})
export class CardproductComponent implements OnInit {

  valorTotal: number = 0;
  @Input() product : Products;

  constructor() { }

  ngOnInit(): void {
    console.log('prod do card: ', this.product);

  }

  addProduct(product: Products) {
    this.valorTotal ? (this.valorTotal += 1) : (this.valorTotal = 1);
  }

  subProduct(product: Products) {
    this.valorTotal ? (this.valorTotal -= 1) : 0;
  }

  idProduct(id: number) {
    console.log('id da produto: ', id);
  }

}
