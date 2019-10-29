import {Component, OnInit} from '@angular/core';
import { Document } from '../document.model';
import {DocumentsService} from '../documents.service';
import {ActivatedRoute, Router} from '@angular/router';


@Component({
  selector: 'cms-document-list',
  templateUrl: './document-list.component.html',
  styleUrls: ['./document-list.component.css']
})
export class DocumentListComponent implements OnInit {

  documents: Document[] = [];

  constructor(private documentsService: DocumentsService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.documents = this.documentsService.getDocuments();
    this.documentsService.documentChangeEvent.subscribe((documents: Document[]) => {
      this.documents = documents;
    });
  }
}
