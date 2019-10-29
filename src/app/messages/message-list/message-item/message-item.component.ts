import {Component, Input, OnInit} from '@angular/core';
import { Message } from '../../message.model';
import {ContactsService} from '../../../contacts/contacts.service';
import {Contact} from '../../../contacts/contact.model';
import {MessagesService} from '../../messages.service';

@Component({
  selector: 'cms-message-item',
  templateUrl: './message-item.component.html',
  styleUrls: ['./message-item.component.css']
})
export class MessageItemComponent implements OnInit {
  constructor(private contactService: ContactsService, private messagesService: MessagesService) { }

  @Input() message: Message;
  messageSender: string;

  ngOnInit() {
    let contact: Contact = this.contactService.getContact(this.message.sender);
    this.messageSender = contact.name;
  }

  onSelected(contact: Contact) {
    this.contactService.contactSelected.emit(contact);
  }

}
