import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { Ng5SliderModule } from 'ng5-slider';
import { SlickCarouselModule } from 'ngx-slick-carousel';
// Ngx Modules Bootstrap
 import { TabsModule } from 'ngx-bootstrap';
 import { ModalModule } from 'ngx-bootstrap/modal';
 import { PopoverModule } from 'ngx-bootstrap/popover';
 import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
 import { PaginationModule } from 'ngx-bootstrap/pagination';

const ngxModulesI = [
  TabsModule.forRoot(),
  AccordionModule.forRoot(),
  BsDropdownModule.forRoot(),
  ModalModule.forRoot(),
  PopoverModule.forRoot(),
  PaginationModule.forRoot(),
  Ng5SliderModule,
  SlickCarouselModule
];
const ngxModulesE = [
  TabsModule
];

@NgModule({
  declarations: [
    AppComponent,
    routingComponents
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    FormsModule,
    ngxModulesI
  ],
  exports: [
    ngxModulesE
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
