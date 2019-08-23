import {Component} from '@angular/core';

@Component({
selector:'app-root',
template:`
<div>test 
{{name}} </div><br>
<input  [(ngModel)]="name" [ngModelOptions]="{standalone:true}">
`
})
export class ApprootComponent{
    public name:string = "My First Application";
}
