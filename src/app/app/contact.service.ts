import { Injectable } from '@angular/core';
import { ContactTemplate } from './contact-list/contact-template';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  list: ContactTemplate[] = [];

  constructor() { }

  getContacts(): ContactTemplate[] {
    return this.list = [
      {
        name: 'Sam Fasher',
        number: '123-456-7890',
        notes:  'some info about the contact...'    
      },
      {
        name: 'John Wick',
        number: '123-456-7890',
        notes:  'some info about the contact...'
      },
      {
        name: 'Lara Croft',
        number: '123-456-7890',
        notes:  'some info about the contact...'    
      },
      {
        name: 'Rick Grimes',
        number: '123-456-7890',
        notes:  'some info about the contact...'
      }
  
    ]
  }


  pushNewContact(newContact: ContactTemplate) {
    return this.list.push(newContact);
  }
}
