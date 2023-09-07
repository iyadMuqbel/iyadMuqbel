import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { OrderComponent } from './order/order.component';
import { ErrorPathComponent } from './error-path/error-path.component';
import { CatFilterComponent } from './cat-filter/cat-filter.component';
import { LoginComponent } from './Login/Login.component';
import { MainLayoutComponent } from './MainLayout/MainLayout.component';
import { DetailsProductComponent } from './DetailsProduct/DetailsProduct.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { authGuard } from './Gaurds/auth.guard';

const routes: Routes = [
  { path: '', component: MainLayoutComponent, children:[
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'product', component: OrderComponent },
    { path: 'product/:pid', component: DetailsProductComponent },
    { path: 'order', component: CatFilterComponent ,canActivate:[authGuard]},
  ]},
  
   { path: 'login', component: LoginComponent },
  { path: 'userlogin', component: UserLoginComponent },
  { path: 'userlogout', component: UserLoginComponent },
  { path: '**', component: ErrorPathComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
