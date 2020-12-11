import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoriesComponent } from './components/categories/categories.component';
import { DemandComponent } from './components/categories/products/demand/demand.component';
import { ProductsComponent } from './components/categories/products/products.component';

const routes: Routes = [
  { path: '', component: CategoriesComponent },
  { path: 'categories/:id/products', component: ProductsComponent },
  { path: 'demand', component: DemandComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
