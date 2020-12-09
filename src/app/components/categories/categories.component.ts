import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category.model';
import { TecprimedataService } from 'src/app/services/tecprimedata.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent implements OnInit {

  categories = [
    {
      "id": 1,
      "nome": "Hambúrgueres"
    },
    {
      "id": 2,
      "nome": "Refrigerantes"
    },
    {
      "id": 3,
      "nome": "Sucos"
    },
    {
      "id": 4,
      "nome": "Porções"
    }
  ];

  constructor(private Tecprimedata: TecprimedataService) {
    // this.getCategories();
  }

  ngOnInit(): void {}

  imprimeID(id: number){
    console.log('id da categoria: ', id);

  }

  styleCardCategory() {
    return {
      'background': 'url(../../assets/images/categories/1.jpg)'
    }
  }

  // getCategories() {
  //   this.Tecprimedata.getCategories().subscribe(
  //     data => {
  //       this.categories = data;
  //       console.log(this.categories);
  //   },
  //     error => {
  //       console.error(error);

  //   }
  //   )
  // }
}
