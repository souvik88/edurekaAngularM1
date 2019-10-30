import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

// decorator
@NgModule({
    
    // all modules will be declared here
    imports: [
        BrowserModule
    ],

    // all components will be declared here
    declarations: [
        AppComponent
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