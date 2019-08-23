import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {ClientrootComponent} from './app.component';

@NgModule({
    imports:[FormsModule, CommonModule, BrowserModule],
    exports:[],
    declarations:[ClientrootComponent],
    providers:[],
    bootstrap:[ClientrootComponent]
})
export class ClientModule{}
