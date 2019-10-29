import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {ContactsComponent} from './contacts/contacts.component';
import {ContactEditComponent} from './contacts/contact-edit/contact-edit.component';
import {ContactDetailComponent} from './contacts/contact-detail/contact-detail.component';
import {DocumentsComponent} from './documents/documents.component';
import {MessagesComponent} from './messages/messages.component';
import {DocumentStartComponent} from './documents/document-start/document-start.component';
import {DocumentDetailComponent} from './documents/document-detail/document-detail.component';
import {DocumentEditComponent} from './documents/document-edit/document-edit.component';

const appRoutes: Routes = [
  { path: 'documents', component: DocumentsComponent, children: [
      { path: 'new', component: DocumentEditComponent},
      { path: ':id', component: DocumentDetailComponent},
      { path: ':id/edit', component: DocumentEditComponent}
    ]},
  { path: 'contacts', component: ContactsComponent, children: [
      { path: 'new', component: ContactEditComponent},
      { path: ':id', component: ContactDetailComponent},
      { path: ':id/edit', component: ContactEditComponent}
    ]},
  { path: 'messages', component: MessagesComponent }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(appRoutes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
