import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-scroll-pane',
  templateUrl: './scroll-pane.component.html',
  styleUrls: ['./scroll-pane.component.css']
})
export class ScrollPaneComponent implements OnInit {

  @Input() paneHeader: string;
  @Input() paneLogoPath: string;
  @Input() paneTextContent: string;
  @Input() paneBackgroundColour: string;
  @Input() paneFontColour: string;

  constructor() { }

  ngOnInit() {
  }

  getColor() {
    return this.paneBackgroundColour;
  }

  getFontColour() {
    return this.paneFontColour;
  }


}
