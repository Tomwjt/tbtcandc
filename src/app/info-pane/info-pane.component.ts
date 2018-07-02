import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-info-pane',
  templateUrl: './info-pane.component.html',
  styleUrls: ['./info-pane.component.css', '../shared-styles/pane.css']
})
export class InfoPaneComponent implements OnInit {

  @Input() paneHeader: string;
  @Input() paneTextContent: string;

  constructor() { }

  ngOnInit() {
  }

  getText() {
    return this.paneTextContent;
  }

}
