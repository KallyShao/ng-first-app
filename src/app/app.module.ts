import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NgZorroAntdModule, NZ_I18N, en_US } from 'ng-zorro-antd';
import { HttpClientModule } from '@angular/common/http';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { CarouselComponent } from './carousel/carousel.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductComponent } from './product/product.component';
import { SearchComponent } from './search/search.component';
import { StarsComponent } from './stars/stars.component';
import { Code404Component } from './code404/code404.component';
import { GuardComponent } from './guard/guard.component';
import { ProDetailComponent } from './pro-detail/pro-detail.component';
import { HomeComponent } from './home/home.component';
import { ProductService } from './shared/product.service';
import { MultiplePipe } from './pipe/multiple.pipe';
import { FilterPipe } from './pipe/filter.pipe';
import { OrderComponent } from './order/order.component';


registerLocaleData(en);

@NgModule({
    declarations: [
        AppComponent,
        CarouselComponent,
        FooterComponent,
        NavbarComponent,
        ProductComponent,
        SearchComponent,
        StarsComponent,
        Code404Component,
        GuardComponent,
        ProDetailComponent,
        HomeComponent,
        MultiplePipe,
        FilterPipe,
        OrderComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        NgZorroAntdModule,
        HttpClientModule,
        NoopAnimationsModule,
        ReactiveFormsModule
    ],
    providers: [{ provide: NZ_I18N, useValue: en_US }, ProductService],
    bootstrap: [AppComponent] 
})
export class AppModule { }
