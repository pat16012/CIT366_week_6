import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import { Message } from '../../message.model';

@Component({
  selector: 'cms-message-edit',
  templateUrl: './message-edit.component.html',
  styleUrls: ['./message-edit.component.css']
})
export class MessageEditComponent implements OnInit {
@ViewChild('subjectInput') subjectInputRef: ElementRef;
@ViewChild('messageInput') msgTxtInputRef: ElementRef;
@Output() messagesAdded = new EventEmitter<Message>();
  constructor() { }

  ngOnInit() {
  }

  onAddItem() {
    const messageSubject = this.subjectInputRef.nativeElement.value;
    const messageTxt = this.msgTxtInputRef.nativeElement.value;
    const newMessage = new Message(1, messageSubject, messageTxt, 'JTP');
    this.messagesAdded.emit(newMessage);
  }

}
