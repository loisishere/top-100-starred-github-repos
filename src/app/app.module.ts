import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { CommitDetailsComponent } from './commit-details/commit-details.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    CommitDetailsComponent
  ],
  imports: [
	BrowserModule,
	HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
