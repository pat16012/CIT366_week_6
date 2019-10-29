import {Component, OnInit} from '@angular/core';
import {Contact} from '../contact.model';
import {ContactsService} from '../contacts.service';
import {ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'cms-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.css']
})
export class ContactDetailComponent implements OnInit {
contact: Contact;
id: string;
  constructor(private contactsService: ContactsService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = params['id'];
      this.contact = this.contactsService.getContact(this.id);
    });
  }

  onDelete() {
    this.contactsService.deleteContact(this.contact);
    this.router.navigate(['/contacts']);
  }
}
