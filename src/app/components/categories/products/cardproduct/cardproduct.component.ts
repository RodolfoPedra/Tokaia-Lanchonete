import { Component, Input, OnInit } from '@angular/core';
import { Products } from 'src/app/models/products.model';
import { TecprimedataService } from 'src/app/services/tecprimedata.service';


@Component({
  selector: 'app-cardproduct',
  templateUrl: './cardproduct.component.html',
  styleUrls: ['./cardproduct.component.scss']
})
export class CardproductComponent implements OnInit {

  valorTotal: number = 0;
  @Input() product : Products;

  constructor(private TecprimeData: TecprimedataService) { }

  ngOnInit(): void { }

  addProduct(product: Products) {
    this.valorTotal ? (this.valorTotal += 1) : (this.valorTotal = 1);
    console.log('prod add: ', product);
    this.TecprimeData.postListDemand(product);

  }

  removeProduct(productId: number) {
    this.valorTotal ? (this.valorTotal -= 1) : 0;
    console.log('prod sub: ', productId);
    this.TecprimeData.deleteListDemand(productId);
  }
}
