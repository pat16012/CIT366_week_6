import {Component, OnInit} from '@angular/core';
import {Contact} from '../contact.model';
import {ContactsService} from '../contacts.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'cms-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

contacts: Contact[] = [];
  constructor(private contactService: ContactsService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.contacts = this.contactService.getContacts();
    this.contactService.contactChangeEvent.subscribe((contacts: Contact[]) => {
      this.contacts = contacts;
    });
  }

}
