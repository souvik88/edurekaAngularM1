import { Component } from '@angular/core';

// decorator
@Component({
    selector: 'app-root',
    template: `<div>
                    <app-header></app-header>
                    <h1>This is my first angular app</h1>
                </div>`
})

export class AppComponent {

}