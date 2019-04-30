import { NgModule } from '@angular/core';
import { RouterModule, Routes, ActivatedRoute, Params, Data } from '@angular/router';

// home page commponemnt
import { HomeLayoutComponent } from './layout/home-layout/home-layout.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { ContactComponent } from './contact/contact.component';
import { InvesterRelationsComponent } from './invester-relations/invester-relations.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { AboutComponent } from './about/about.component';
import { EmailverificationComponent } from './emailverification/emailverification.component';
import { FeaturesComponent } from './features/features.component';
import { FaqComponent } from './faq/faq.component';
import { TermsComponent } from './terms/terms.component';
import { RegisterTermsComponent } from './register-terms/register-terms.component';
import { BlogComponent } from './blog/blog.component';
import { BlogFooterComponent } from './blog-footer/blog-footer.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import { PricingComponent } from './pricing/pricing.component';


import { DashboardLayoutComponent } from './layout/dashboard-layout/dashboard-layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ActivityLogComponent } from './activity-log/activity-log.component';
import { DeleteAccountComponent } from './delete-account/delete-account.component';
import { NotificationComponent } from './notification/notification.component';
import { ManageProjectsComponent } from './manage-projects/manage-projects.component';
import { ManageTeamComponent } from './manage-team/manage-team.component';
// report module
import { ReportListComponent } from './report-list/report-list.component';
import { ReportDetailComponent } from './report-detail/report-detail.component';



// Team dashboard module
import { TeamDashboardComponent } from './team-dashboard/team-dashboard.component';
import { TeamReportListComponent } from './team-report-list/team-report-list.component';
import { TeamReportDetailComponent } from './team-report-detail/team-report-detail.component';
import { ProfileComponent } from './profile/profile.component';

// consumermodule
import { ConsumerDashboardComponent } from './consumer-dashboard/consumer-dashboard.component';
import { ConsumerProfileComponent } from './consumer-profile/consumer-profile.component';
import { ConsumerReportListComponent } from './consumer-report-list/consumer-report-list.component';
import { ConsumerReportdetailComponent } from './consumer-reportdetail/consumer-reportdetail.component';
import { ConsumersubmittedListComponent } from './consumersubmitted-list/consumersubmitted-list.component';
import { PointHistoryComponent } from './point-history/point-history.component';
import { SettingTransactionComponent } from './setting-transaction/setting-transaction.component';
import { SettingPaymentsComponent } from './setting-payments/setting-payments.component';
import { DiscountValueComponent } from './discount-value/discount-value.component';
import { SettingSubscriptionComponent } from './setting-subscription/setting-subscription.component';
import { SettingComponent } from './setting/setting.component';
import { TeamMemberReportListComponent } from './team-member-report-list/team-member-report-list.component';
import { ProjectListComponent } from './project-list/project-list.component';

// common
import { FeedbackComponent } from './feedback/feedback.component';
import { NodataComponent } from './nodata/nodata.component';






const routes: Routes = [
  { path: '', component: HomeLayoutComponent, children: [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent, data: {isDataHeaderObj: true} },
    { path: 'login', component: LoginComponent },
    { path: 'signUp', component: RegisterComponent },
    { path: 'forgotPassword', component: ForgotPasswordComponent },
    { path: 'resetPassword', component: ResetPasswordComponent , data: {isDataHeaderObj: false}},
    { path: 'contact', component: ContactComponent, data: {isDataHeaderObj: true} },
    { path: 'investerRelations', component: InvesterRelationsComponent, data: {isDataHeaderObj: true} },
    { path: 'privacyPolicy', component: PrivacyPolicyComponent, data: {isDataHeaderObj: true} },
    { path: 'about', component: AboutComponent  , data: {isDataHeaderObj: true} },
    { path: 'verification', component: EmailverificationComponent  , data: {isDataHeaderObj: false}},
    { path: 'features', component: FeaturesComponent  , data: {isDataHeaderObj: true}},
    { path: 'faq', component: FaqComponent  , data: {isDataHeaderObj: true}},
    { path: 'terms', component: TermsComponent  , data: {isDataHeaderObj: false}},
    { path: 'register/terms', component: RegisterTermsComponent  , data: {isDataHeaderObj: false}},
    { path: 'blog', component: BlogComponent  , data: {isDataHeaderObj: true}},
    { path: 'blog-detail', component: BlogDetailComponent  , data: {isDataHeaderObj: true}},
    { path: 'pricing', component: PricingComponent  , data: {isDataHeaderObj: true}},
    // { path: '404', component: Page404Component },
    { path: '**', redirectTo: '404' }
  ]},
  { path: '', component: DashboardLayoutComponent, children: [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'report-list', component: ReportListComponent },
    { path: 'report-detail', component: ReportDetailComponent },
    { path: 'activity-log', component: ActivityLogComponent },
    { path: 'delete-account', component: DeleteAccountComponent },
    { path: 'feedback', component: FeedbackComponent },
    { path: 'notification', component: NotificationComponent },
    { path: 'manage-projects', component: ManageProjectsComponent },
    { path: 'manage-team', component: ManageTeamComponent },
    { path: 'team/dashboard', component: TeamDashboardComponent },
    { path: 'team/report-list', component: TeamReportListComponent },
    { path: 'team/member-report-list', component: TeamMemberReportListComponent },
    { path: 'team/report-detail', component: TeamReportDetailComponent },
    { path: 'profile', component: ProfileComponent},
    { path: 'consumer/dashboard', component: ConsumerDashboardComponent},
    { path: 'consumer/profile', component: ConsumerProfileComponent},
    { path: 'consumer/report-list', component: ConsumerReportListComponent},
    { path: 'consumer/submitted-list', component: ConsumersubmittedListComponent},
    { path: 'consumer/report-detail', component: ConsumerReportdetailComponent},
    { path: 'consumer/point-history', component: PointHistoryComponent},
    { path: 'consumer/project-list', component: ProjectListComponent},
    { path: 'setting/profile', component: SettingComponent},
    { path: 'setting/transactions', component: SettingTransactionComponent},
    { path: 'discount-value', component: DiscountValueComponent},
    { path: 'setting/subscription', component: SettingSubscriptionComponent},
    { path: '**', redirectTo: '404' }
  ]},
  { path: '', component: DashboardLayoutComponent, children: [
    { path: 'setting/payments', component: SettingPaymentsComponent, pathMatch: 'full'},
    { path: 'setting/payments/:edit', component: SettingPaymentsComponent, pathMatch: 'full'},
  ]},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: [],
  entryComponents: []
})
export class AppRoutingModule { }
export const routingComponents = [
  HomeLayoutComponent,
  HomeComponent,
  LoginComponent,
  RegisterComponent,
  ForgotPasswordComponent,
  ResetPasswordComponent,
  ContactComponent,
  InvesterRelationsComponent,
  PrivacyPolicyComponent,
  AboutComponent,
  EmailverificationComponent,
  FeaturesComponent,
  FaqComponent,
  TermsComponent,
  RegisterTermsComponent,
  BlogComponent,
  BlogFooterComponent,
  BlogDetailComponent,
  PricingComponent,
  DashboardLayoutComponent,
  DashboardComponent,
  ReportListComponent,
  ReportDetailComponent,
  ActivityLogComponent,
  DeleteAccountComponent,
  FeedbackComponent,
  NodataComponent,
  NotificationComponent,
  ManageProjectsComponent,
  ManageTeamComponent,
  TeamDashboardComponent,
  TeamReportListComponent,
  TeamMemberReportListComponent,
  TeamReportDetailComponent,
  ProfileComponent,
  ConsumerDashboardComponent,
  ConsumerProfileComponent,
  ConsumerReportListComponent,
  ConsumerReportdetailComponent,
  ConsumersubmittedListComponent,
  ProjectListComponent,
  PointHistoryComponent,
  SettingComponent,
  SettingTransactionComponent,
  SettingPaymentsComponent,
  DiscountValueComponent,
  SettingSubscriptionComponent
];
