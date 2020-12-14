import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category.model';
import { TecprimedataService } from 'src/app/services/tecprimedata.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent implements OnInit {
  categories: Array<any> = [];

  constructor(private Tecprimedata: TecprimedataService) {
    this.getCategories();
  }

  ngOnInit(): void {}

  getCategories() {
    this.Tecprimedata.getCategories().subscribe(
      (data) => {
        this.categories.push(data);
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
