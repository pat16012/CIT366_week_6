import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { Message } from '../message.model';

@Component({
  selector: 'cms-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css']
})
export class MessageListComponent implements OnInit {
  @Output() messageWasSelected = new EventEmitter<Message>();
messages: Message[] = [
  new Message(1, 'Test', 'This is a Test', 'This is the final Test')
];

  constructor() { }

  ngOnInit() {
  }

  onMessageSelected(message: Message) {
    this.messageWasSelected.emit(message);
  }

  onMessageAdded(message: Message) {
    this.messages.push(message);
  }

}
