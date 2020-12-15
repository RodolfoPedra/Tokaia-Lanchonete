import { AfterContentInit, AfterViewInit, Component, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { Products } from '../../../../models/products.model';
import { TecprimedataService } from 'src/app/services/tecprimedata.service';
import { importExpr } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-demand',
  templateUrl: './demand.component.html',
  styleUrls: ['./demand.component.scss']
})
export class DemandComponent implements OnInit {

  products: Array<any> = [];
  valorTotal: string;
  removeProduct: Array<any> = [];

  constructor(private Tecprimedata: TecprimedataService) {
  }

  ngOnInit(): void {
    this.getListDemand();

    setTimeout(() => {
      this.removeMass();
    },1000)
  }

  async getListDemand() {
    const listProduct = await this.Tecprimedata.getListDemand();
    this.products.push(listProduct);
    this.totalPrice(listProduct);
  }

  totalPrice(product: any) {
    const total = product.reduce((acc: any, item: any, index: any) => {
      return Number(acc) + Number(item.preco);
    },0)
    this.valorTotal = this.formatPrice(total);
  }

  unique(value: any, index: any, self: any) {
    return self.indexOf(value) === index;
  }

  formatPrice(price: number) {
    return price.toFixed(2).replace('.',',');
  }

  removeMass() {
    const productItem = document.querySelectorAll('.itemDemand');
    productItem.forEach((proditem, index) => {
      proditem.addEventListener('click', (event) => {
        const toggle = proditem.classList.toggle('backgroundSelectItem');
        if(toggle) {
          this.removeProduct.push(index);
        }
        if(!toggle){
          const fIndex = this.removeProduct.filter((fItem: any) => fItem !== index);
          this.removeProduct.length = 0;
          this.removeProduct = fIndex;
        }
      })
    })
  }

  confirmRemoveMass() {
    this.removeProduct.map(productId => this.Tecprimedata.deleteListDemandList(productId));
    this.getListDemand();
    window.location.reload();
  }
}
