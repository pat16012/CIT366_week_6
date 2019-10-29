import {EventEmitter, Injectable} from '@angular/core';
import { Contact } from './contact.model';
import { MOCKCONTACTS } from './MOCKCONTACTS';


@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  contactSelected = new EventEmitter<Contact>();
  contactChangeEvent = new EventEmitter<Contact[]>();
  contacts: Contact[] = [];

  constructor() {
    this.contacts = MOCKCONTACTS;
  }

  getContact(id: string): Contact {
    return this.contacts[id];
  }

    getContacts() {
      return this.contacts.slice();
    }

    deleteContact(contact: Contact) {
      if (contact === null) {
        return;
      }

      const pos = this.contacts.indexOf(contact);
      if (pos < 0) {
        return;
      }

      this.contacts.splice(pos, 1);
      this.contactChangeEvent.emit(this.contacts.slice());
    }


  }

