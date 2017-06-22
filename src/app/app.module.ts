import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';
import { FlexLayoutModule } from '@angular/flex-layout';

import { KeysPipe } from './pipes/keys.pipe';
import { FilterPipe } from './pipes/filter.pipe';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { ContentComponent } from './components/content/content.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ListComponent } from './components/list/list.component';
import { AsteroidService } from './services/asteroid.service';
import { PaginatorComponent } from './components/paginator/paginator.component';
import { DetailsComponent } from './components/details/details.component';
import { ListFilterComponent } from './components/list-filter/list-filter.component';
import { AboutComponent } from './components/about/about.component';

import 'hammerjs';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    NotFoundComponent,
    ListComponent,
    PaginatorComponent,
    DetailsComponent,
    KeysPipe,
    FilterPipe,
    ListFilterComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MaterialModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpModule,
    FlexLayoutModule
  ],
  providers: [AsteroidService],
  bootstrap: [AppComponent],
  entryComponents: [
    AboutComponent
  ]
})
export class AppModule {}
