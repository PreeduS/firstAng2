import {Injectable} from 'angular2/core';

import {IContact} from './IContact';
import {contactList} from './contact-mock';



@Injectable()
export class ContactService{


	
	getContacts(){
		return Promise.resolve(contactList);
		//contactList
		
	}
	
	
	addContact(c : IContact){
		Promise.resolve(contactList).then( (cList : IContact[]) => cList.push(c) );
	}
	
	
}