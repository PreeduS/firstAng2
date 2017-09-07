import {Component} from 'angular2/core';
import {ContactService} from '.././contactService/contact.service';

import {Router} from 'angular2/router';


@Component({

    template: `
      
			Insert contact:<br />
			firstname: <input type="text" #fname/>
			lastname: <input type="text" #sname/>
			
			<button (click) = "addContact(fname.value,sname.value)">Insert</button>
		
    `,
	providers:[ContactService]
	
})
export class InsertContactComponent{
	private contactsList : ContactService;
	private router : Router;			//already included in the boot file as 'ROUTER_PROVIDERS'
	
	constructor(cList : ContactService, router : Router ){
		this.contactsList = cList;
		this.router = router;
	}

	addContact(fname, sname){
		//var dummyContact = {firstname : "f dummy", lastname:"l dummy"};
		let	contact = {
			firstname : fname||'empty',
			lastname:sname||'empty'
		};
		this.contactsList.addContact(contact);
		//this.router.navigate(['ListContacts']);		//name from @RouteConfig
		//this.router.navigate(['ListContactsParam', {lastname:contact.lastname} ]);		//name from @RouteConfig
		
		this.router.navigate(['ListContactsParam', {lastname:contact.lastname,testVar:'test'} ]);		//lastname is as path, testVar is as GET
		
		//this.router.navigate(['ListContacts', {lastname:contact.lastname} ]);		//as get variable		

	}
	
	

	
}