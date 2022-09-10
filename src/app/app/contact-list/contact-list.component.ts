import { Component, OnInit } from '@angular/core';
import { ContactService } from '../contact.service';
import { ContactTemplate } from './contact-template';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  contactTemp: ContactTemplate = {

    name: 'Sam Fasher',
    number: '123-456-7890',
    notes:  'some info about the contact...'

  }
  

  contacts: ContactTemplate[] = [];

  constructor(private contactService: ContactService) { }

  ngOnInit(): void {
    this.contacts = this.contactService.getContacts();
    
  }


  addContact(newContact: ContactTemplate) {

    this.contactService.pushNewContact(newContact);
  }

}
