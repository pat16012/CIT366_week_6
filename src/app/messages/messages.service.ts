import {EventEmitter, Injectable} from '@angular/core';
import {Document} from '../documents/document.model';
import {MOCKDOCUMENTS} from '../documents/MOCKDOCUMENTS';
import {Message} from './message.model';
import {MOCKMESSAGES} from './MOCKMESSAGES';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {
  private messages: Message[] = [];
  messageSelectedEvent = new EventEmitter<Message>();
  messageChangeEvent = new EventEmitter<Message[]>();

  constructor() {
    this.messages = MOCKMESSAGES;
  }

    getMessage(id: string): Message {
      for (let i = 0; i < this.messages.length; i++) {
        if (this.messages[i].id === id) {
          return this.messages[i];
        }
      }
      return null;
    }

    getMessages() {
      return this.messages.slice();
    }

    addMessage(message: Message) {
      this.messages.push(message);
      this.messageChangeEvent.emit(this.messages.slice());
    }
  }

