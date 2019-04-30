import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule} from '@angular/router';
import { TabsModule } from 'ngx-bootstrap';
import { ModalModule } from 'ngx-bootstrap/modal';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { InnerBannerComponent } from './inner-banner/inner-banner.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DashbardHeaderComponent } from './dashbard-header/dashbard-header.component';
import { DashboardCopyrightComponent } from './dashboard-copyright/dashboard-copyright.component';
import { MusicbtnComponent } from './musicbtn/musicbtn.component';
import { FilterComponent } from './modal/filter/filter.component';
import { ConfirmationModalComponent } from './confirmation-modal/confirmation-modal.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    InnerBannerComponent,
    SidebarComponent,
    DashbardHeaderComponent,
    DashboardCopyrightComponent,
    MusicbtnComponent,
    FilterComponent,
    ConfirmationModalComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    TabsModule.forRoot(),
    ModalModule.forRoot(),
    BsDropdownModule.forRoot(),
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    InnerBannerComponent,
    SidebarComponent,
    DashbardHeaderComponent,
    DashboardCopyrightComponent,
    MusicbtnComponent,
    FilterComponent,
    ConfirmationModalComponent
  ],
  entryComponents: [
    ConfirmationModalComponent
  ]
})
export class SharedModule { }
