import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {ApprootComponent} from './app.component';

@NgModule({
    imports:[FormsModule, CommonModule, BrowserModule],
    exports:[],
    declarations:[ApprootComponent],
    providers:[],
    bootstrap:[ApprootComponent]
})
export class AppModule{}
