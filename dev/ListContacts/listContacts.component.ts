import {Component} from 'angular2/core';
import {ContactService} from '.././contactService/contact.service';


import {RouteParams} from 'angular2/router';
import {OnInit} from 'angular2/core';

@Component({
    //selector: '...',
    template: `
      
			ListContacts:<br />
			<div *ngFor="#c of contactsList">f = {{c.firstname}}, l = {{c.lastname}}</div>
			
			<br />firstname param: = {{lastnameParam}}
    `,
	providers:[ContactService]
	

	
})
export class ListContactsComponent implements OnInit{

	private contactsListProvider : ContactService;
	
	private routerP : RouteParams;			//already included in the boot file as 'ROUTER_PROVIDERS'
	
	private lastnameParam;
	
	public contactsList;
	
	constructor(cList : ContactService, routerP : RouteParams){
		this.contactsListProvider = cList;
		this.routerP = routerP;
		
			this.getContacts();//edit later
	}

	getContacts(){
		this.contactsListProvider.getContacts().then( (cList) => this.contactsList = cList );	
		 
	}
	
	ngOnInit():any{
		this.lastnameParam = this.routerP.get('lastname');
	}
	
}