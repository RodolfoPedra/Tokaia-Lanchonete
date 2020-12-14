import { Component, OnInit } from '@angular/core';
import { Products } from '../../../../models/products.model';
import { TecprimedataService } from 'src/app/services/tecprimedata.service';

@Component({
  selector: 'app-demand',
  templateUrl: './demand.component.html',
  styleUrls: ['./demand.component.scss']
})
export class DemandComponent implements OnInit {

  products: Array<any> = [];

  constructor(private Tecprimedata: TecprimedataService) { }

  ngOnInit(): void {
    this.getListDemand();
  }

  getListDemand() {
    this.Tecprimedata.getListDemand().subscribe(
      (product) => {
        console.log(product);
        this.products.push(product);
      },
      (error) => {
        console.error(error);
      }
    )
  }

}
