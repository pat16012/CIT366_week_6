import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ContactListComponent } from './contacts/contact-list/contact-list.component';
import { ContactDetailComponent } from './contacts/contact-detail/contact-detail.component';
import { ContactItemComponent } from './contacts/contact-list/contact-item/contact-item.component';
import { DocumentsComponent } from './documents/documents.component';
import { DocumentListComponent } from './documents/document-list/document-list.component';
import { DocumentDetailComponent } from './documents/document-detail/document-detail.component';
import { DocumentItemComponent } from './documents/document-list/document-item/document-item.component';
import { MessagesComponent } from './messages/messages.component';
import { MessageListComponent } from './messages/message-list/message-list.component';
import { MessageItemComponent } from './messages/message-list/message-item/message-item.component';
import { MessageEditComponent } from './messages/message-list/message-edit/message-edit.component';
import { DropdownDirective } from './shared/dropdown.directive';
import {ContactsService} from './contacts/contacts.service';
import {DocumentsService} from './documents/documents.service';
import {MessagesService} from './messages/messages.service';
import { AppRoutingModule } from './app-routing.module';
import { ContactStartComponent } from './contacts/contact-start/contact-start.component';
import { ContactEditComponent } from './contacts/contact-edit/contact-edit.component';
import { DocumentStartComponent } from './documents/document-start/document-start.component';
import { DocumentEditComponent } from './documents/document-edit/document-edit.component';
import { DocumentViewComponent } from './documents/document-view/document-view.component';
import {WindRefService} from './wind-ref.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContactsComponent,
    ContactListComponent,
    ContactDetailComponent,
    ContactItemComponent,
    DocumentsComponent,
    DocumentListComponent,
    DocumentDetailComponent,
    DocumentItemComponent,
    MessagesComponent,
    MessageListComponent,
    MessageItemComponent,
    MessageEditComponent,
    DropdownDirective,
    ContactStartComponent,
  ContactEditComponent,
  DocumentStartComponent,
  DocumentEditComponent,
  DocumentViewComponent
],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ContactsService, DocumentsService, MessagesService, WindRefService],
  bootstrap: [AppComponent]
})
export class AppModule { }
