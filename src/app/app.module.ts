import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';

import { NavbarComponent } from './navbar/navbar.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatCardModule } from '@angular/material/card';
import { authInterceptorProvidor } from './services/auth.interceptor';
import { AdminDashboardComponent } from './pages/admin/admin-dashboard/admin-dashboard.component';
import { UserDashboardComponent } from './pages/user/user-dashboard/user-dashboard.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { MatListModule } from '@angular/material/list';
import { SidebarComponent } from './pages/admin/sidebar/sidebar.component';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HomeComponent } from './home/home.component';
import { ProblemListComponent } from './problem-list/problem-list.component';
import { ProblemDecriptionComponent } from './Problem_Description/problem-description/problem-description.component';
import { ContestComponent } from './contest/contest.component';
import { ContestQuestionComponent } from './contest-question/contest-question.component';
import { WelcomeComponent } from './pages/admin/welcome/welcome.component';
import { MatTableModule } from '@angular/material/table';
import { AddQuizComponent } from './pages/admin/add-quiz/add-quiz.component';
import { DisplayQuestionComponent } from './pages/admin/display-question/display-question.component';
import { AddQuestionComponent } from './pages/admin/add-question/add-question.component';
import { UserSidebarComponent } from './pages/user/user-sidebar/user-sidebar.component';
import { UserContestComponent } from './pages/user/user-contest/user-contest.component';
import { UserContestQuestionComponent } from './pages/user/user-contest-question/user-contest-question.component';
import { UserProblemListComponent } from './pages/user/user-problem-list/user-problem-list.component';
import { StartContestComponent } from './pages/user/start-contest/start-contest.component';
import { ContestInstructionsComponent } from './pages/user/contest-instructions/contest-instructions.component';
import { UserMyContestComponent } from './pages/user/user-my-contest/user-my-contest.component';
import { UserResultComponent } from './pages/user/user-result/user-result.component';
import { UserProblemSubmissionComponent } from './pages/user/user-problem-submission/user-problem-submission.component';
import { UserContestSubmissionsComponent } from './pages/user/user-contest-submissions/user-contest-submissions.component';
import { NgxUiLoaderHttpModule, NgxUiLoaderModule } from 'ngx-ui-loader';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    SignupComponent,
    AdminDashboardComponent,
    UserDashboardComponent,
    ProfileComponent,
    SidebarComponent,
    HomeComponent,
    ContestComponent,
    ContestQuestionComponent,
    ProblemDecriptionComponent,
    ProblemListComponent,
    WelcomeComponent,
    AddQuizComponent,
    DisplayQuestionComponent,
    AddQuestionComponent,
    UserSidebarComponent,
    UserContestComponent,
    UserContestQuestionComponent,
    UserProblemListComponent,
    StartContestComponent,
    ContestInstructionsComponent,
    UserMyContestComponent,
    UserResultComponent,
    UserProblemSubmissionComponent,
    UserContestSubmissionsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    FormsModule,
    MatSnackBarModule,
    MatCardModule,
    MatListModule,
    MatIconModule,
    MatToolbarModule,
    MatTableModule,
    ReactiveFormsModule,
    NgxUiLoaderModule,
    NgxUiLoaderHttpModule.forRoot({ showForeground: true }),
  ],
  providers: [authInterceptorProvidor],
  bootstrap: [AppComponent],
})
export class AppModule {}
