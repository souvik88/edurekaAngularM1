/* Import the Component Dependency from Angular Core */
import {Component} from '@angular/core';

/* Components annotation declare metadata for the components */
/* Components are Directives with functionality and view */
/* Template or TemplateUrl provide the views or template for the component */
/* Selector is the reference for the component and how it has to be referenced in the app view */
/* Expressions bind modelname in view and taken from the defined Class's anyModelName */

@Component({
    selector: 'my-app',
    template: '<span style="text-align:center"><h1>Hello World : {{anyModelName}}</h1></span>'
})

/* Defining the Root app's Component Controller-Functionality and exporting class to be used in other parts of app like bootstrap */
export class AppComponent {
    public anyModelName = "Edureka - AngularJS Introduction.";
 }