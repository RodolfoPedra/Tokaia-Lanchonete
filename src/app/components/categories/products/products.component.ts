import { Component, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Products } from 'src/app/models/products.model';
import { TecprimedataService } from 'src/app/services/tecprimedata.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  queryParams: number;

  products: Array<Products[]> = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private Tecprimedata: TecprimedataService
  ) {
    this.activatedRoute.params.subscribe((param) => {
      this.queryParams = param.id;
    });
  }

  ngOnInit(): void {
    this.getProducts(+this.queryParams);
  }

  getProducts(id: number) {
    const resProd = this.Tecprimedata.getProducts(id);
    resProd.then((res) => this.products.push(res));
  }
}
