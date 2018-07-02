import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { MainpageComponent } from './mainpage/mainpage.component';
import { ScrollPaneComponent } from './scroll-pane/scroll-pane.component';
import { ImagePaneComponent } from './image-pane/image-pane.component';
import { InfoPaneComponent } from './info-pane/info-pane.component';
import { ListPaneComponent } from './list-pane/list-pane.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    MainpageComponent,
    ScrollPaneComponent,
    ImagePaneComponent,
    InfoPaneComponent,
    ListPaneComponent,
    FooterComponent
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
