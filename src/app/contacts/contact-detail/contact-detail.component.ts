import {Component, Input, OnInit} from '@angular/core';
import {Contact} from '../contact.model';
import {ContactsService} from '../contacts.service';

@Component({
  selector: 'cms-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.css']
})
export class ContactDetailComponent implements OnInit {
  @Input() contact: Contact;
  constructor(private contactsService: ContactsService) { }

  ngOnInit() {
    this.contactsService.contactSelectedEvent.subscribe((contact: Contact) => {
      this.contact = contact;
    });
  }


}
