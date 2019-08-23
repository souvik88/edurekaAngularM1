import {Component} from '@angular/core';

@Component({
selector:'client-root',
template:`
<div>test 
{{name}} </div><br>
<input  [(ngModel)]="name" [ngModelOptions]="{standalone:true}">
`
})
export class ClientrootComponent{
    public name:string = "My First Application";
}
