import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../models/category.model';
import { Products } from '../models/products.model';

@Injectable({
  providedIn: 'root',
})
export class TecprimedataService {
  constructor(private http: HttpClient) {}

  public getCategories(): Observable<Category> {
    return this.http.get<Category>(`http://localhost:3000/categories`);
  }

  async getProducts(id: number) {
    const res = await fetch(`http://localhost:3000/products`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify({ id }),
    });
    const json = await res.json();
    return json;
  }

  public async getListDemand() {
    const res = await fetch(`http://localhost:3000/demand`, {
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
    });
    const json = await res.json();
    return json;
  }

  async postListDemand(product: Products) {
    const res = await fetch(`http://localhost:3000/demand`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify(product),
    });
    const json = await res.json();
    return json;
  }

  async deleteListDemandCard(productId: number) {
    const res = await fetch(`http://localhost:3000/demand/card`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify({productId}),
    });
    const json = await res.json();
    return json;
  }

  async deleteListDemandList(indexID: number) {
    const res = await fetch(`http://localhost:3000/demand/list`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify({indexID}),
    });
    const json = await res.json();
    return json;
  }
}
