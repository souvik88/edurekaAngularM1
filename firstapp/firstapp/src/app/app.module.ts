import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header.component';
import { ProductComponent } from './product/product.component';

// decorator
@NgModule({
    
    // all modules will be declared here
    imports: [
        BrowserModule
    ],

    // all components will be declared here
    declarations: [
        AppComponent,
        HeaderComponent,
        ProductComponent
    ],

    // only first or main component
    bootstrap: [
        AppComponent
    ],

    // all services
    providers: []
})

export class AppModule {

}