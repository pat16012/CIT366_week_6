import {EventEmitter, Injectable} from '@angular/core';
import {Document} from './document.model';
import {MOCKDOCUMENTS} from './MOCKDOCUMENTS';

@Injectable({
  providedIn: 'root'
})
export class DocumentsService {
  documentSelectedEvent = new EventEmitter<Document>();
  documentChangeEvent = new EventEmitter<Document[]>();
  constructor() {
    this.documents = MOCKDOCUMENTS;
  }

  private documents: Document[] = [];


  getDocument(id: string): Document {
    return this.documents[id];
  }

  getDocuments() {
  return this.documents.slice();
  }

  deleteDocument(document: Document) {
    if (document === null) {
      return;
    }

    const pos = this.documents.indexOf(document);
    if (pos < 0) {
      return;
    }

    this.documents.splice(pos, 1);
    this.documentChangeEvent.emit(this.documents.slice());
  }
}
