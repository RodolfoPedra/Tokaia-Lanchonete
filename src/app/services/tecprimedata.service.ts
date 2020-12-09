import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../models/category.model';

@Injectable({
  providedIn: 'root'
})
export class TecprimedataService {

constructor(private http: HttpClient) { }

public getCategories() : Observable<Category> {
  return this.http.get<Category>(`http://tecprime.com.br/api/categories`);
}

}
