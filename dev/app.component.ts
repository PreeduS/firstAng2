import {Component} from 'angular2/core';
import {FirstComponent} from './first.component';

import {HomeComponent} from './home/home.component';
import {ListContactsComponent} from './ListContacts/listContacts.component';
import {InsertContactComponent} from './InsertContact/insertContact.component';

import {ROUTER_DIRECTIVES} from 'angular2/router';
import {RouteConfig} from 'angular2/router';

@Component({
    selector: 'my-app',
    template: `
        
		<nav>
			<a [routerLink] = "['Home']">Home</a>
			<a [routerLink] = "['ListContacts']">ListContacts</a>
			<a [routerLink] = "['InsertContact']">InsertContact</a>
		</nav>
		
		<div id = "main">main:<br />
			<router-outlet></router-outlet>
		</div>
		
		
		<br /><hr/>ff:<br />
		<first></first>
    `,
	directives:[FirstComponent,ROUTER_DIRECTIVES]
})

@RouteConfig([
	{path:"/home",name:"Home",component:HomeComponent,useAsDefault:true},
	{path:"/ListContactsUrl",name:"ListContacts",component:ListContactsComponent},
	{path:"/ListContactsUrl/:lastname",name:"ListContactsParam",component:ListContactsComponent},
	{path:"/InsertContactUrl",name:"InsertContact",component:InsertContactComponent},
])

export class AppComponent {

}