import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { Document } from '../document.model';

@Component({
  selector: 'cms-document-list',
  templateUrl: './document-list.component.html',
  styleUrls: ['./document-list.component.css']
})
export class DocumentListComponent implements OnInit {
@Output() documentWasSelected = new EventEmitter<Document>();
test: Document[];
documents: Document[] = [
  new Document(1, 'Test Document', 'Decription', 'www.test.test', 'testChild')
];

  constructor() { }

  ngOnInit() {
  }
onDocumentSelected(document: Document) {
    this.documentWasSelected.emit (document);
}
}
