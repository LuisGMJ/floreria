import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailsComponent } from './pages/details/details.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ProductsComponent } from './pages/products/products.component';


const routes: Routes = [
  { path: 'inicio', component: HomeComponent },
  { path: 'productos/:id', component: ProductsComponent },
  { path: 'flores/detalles/:id', component: DetailsComponent },
  { path: 'nosotros/:section', component: AboutComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'inicio' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
