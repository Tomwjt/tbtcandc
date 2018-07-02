import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import {ServerComponent} from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { ScrollPaneComponent } from './scroll-pane/scroll-pane.component';
import { ImagePaneComponent } from './image-pane/image-pane.component';
import { InfoPaneComponent } from './info-pane/info-pane.component';
import { ListPaneComponent } from './list-pane/list-pane.component';


@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    MainpageComponent,
    ScrollPaneComponent,
    ImagePaneComponent,
    InfoPaneComponent,
    ListPaneComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
