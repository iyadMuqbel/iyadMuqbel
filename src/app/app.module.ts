import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HomeComponent } from './home/home.component';
import { OrderComponent } from './order/order.component';
import { FormsModule } from '@angular/forms';
import { ConvertUSDToJDPipe } from './CustomPipe/convert-usdto-jd.pipe';
import { CatFilterComponent } from './cat-filter/cat-filter.component';
import { TotalPriceComponent } from './total-price/total-price.component';
import { ErrorPathComponent } from './error-path/error-path.component';
import { LoginComponent } from './Login/Login.component';
import { MainLayoutComponent } from './MainLayout/MainLayout.component';
import { DetailsProductComponent } from './DetailsProduct/DetailsProduct.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialsModule } from './materials/materials.module';
import { DialogContentExampleDialogComponent } from './dialog-content-example-dialog/dialog-content-example-dialog.component';
import { UserLoginComponent } from './user-login/user-login.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    HomeComponent,
    OrderComponent,
    ConvertUSDToJDPipe,
    CatFilterComponent,
    TotalPriceComponent,
    ErrorPathComponent,
    LoginComponent,
    MainLayoutComponent,
    DetailsProductComponent,
    DialogContentExampleDialogComponent,
    UserLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
