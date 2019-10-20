import {Component, Input, OnInit} from '@angular/core';
import {Contact} from './contact.model';
import {ContactsService} from './contacts.service';

@Component({
  selector: 'cms-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css'],
  providers: [ContactsService]
})
export class ContactsComponent implements OnInit {
  selectedContact: Contact;
  constructor(private contactsService: ContactsService) { }

  ngOnInit() {
    this.contactsService.contactSelectedEvent.subscribe((contact: Contact) => {
      this.selectedContact = contact;
    });
  }

}
