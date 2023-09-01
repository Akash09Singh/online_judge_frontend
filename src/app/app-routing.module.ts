import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NavbarComponent } from './navbar/navbar.component';
import { AppComponent } from './app.component';

import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';
import { AdminDashboardComponent } from './pages/admin/admin-dashboard/admin-dashboard.component';
import { UserDashboardComponent } from './pages/user/user-dashboard/user-dashboard.component';
import { adminGuard } from './services/admin.guard';
import { userGuard } from './services/user.guard';
import { HomeComponent } from './home/home.component';
import { ProblemListComponent } from './problem-list/problem-list.component';
import { ProblemDecriptionComponent } from './Problem_Description/problem-description/problem-description.component';
import { ContestComponent } from './contest/contest.component';
import { ContestQuestionComponent } from './contest-question/contest-question.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { WelcomeComponent } from './pages/admin/welcome/welcome.component';
import { AddQuizComponent } from './pages/admin/add-quiz/add-quiz.component';
import { DisplayQuestionComponent } from './pages/admin/display-question/display-question.component';
import { AddQuestionComponent } from './pages/admin/add-question/add-question.component';
import { UserContestComponent } from './pages/user/user-contest/user-contest.component';
import { UserContestQuestionComponent } from './pages/user/user-contest-question/user-contest-question.component';
import { UserProblemListComponent } from './pages/user/user-problem-list/user-problem-list.component';
import { StartContestComponent } from './pages/user/start-contest/start-contest.component';
import { ContestInstructionsComponent } from './pages/user/contest-instructions/contest-instructions.component';
import { UserResultComponent } from './pages/user/user-result/user-result.component';
import { UserProblemSubmissionComponent } from './pages/user/user-problem-submission/user-problem-submission.component';
import { UserContestSubmissionsComponent } from './pages/user/user-contest-submissions/user-contest-submissions.component';
import { EditProblemComponent } from './pages/admin/edit-problem/edit-problem.component';
import { EditContestComponent } from './pages/admin/edit-contest/edit-contest.component';
import { ViewTestcaseComponent } from './pages/admin/view-testcase/view-testcase.component';
import { AddTestcaseComponent } from './pages/admin/add-testcase/add-testcase.component';

const routes: Routes = [
  { component: HomeComponent, path: '' },
  { component: SignupComponent, path: 'signup', pathMatch: 'full' },
  { component: LoginComponent, path: 'login', pathMatch: 'full' },
  {
    component: ProblemListComponent,
    path: 'problems',
    canActivate: [userGuard],
  },
  {
    component: AdminDashboardComponent,
    path: 'admin',
    canActivate: [adminGuard],
    children: [
      {
        component: WelcomeComponent,
        path: '',
      },
      { component: AddQuestionComponent, path: 'add-problem' },
      {
        component: ContestComponent,
        path: 'view-all-contest',
      },
      { component: ProblemListComponent, path: 'view-all-problem' },
      {
        component: AddQuizComponent,
        path: 'add-contest',
      },

      {
        component: ProfileComponent,
        path: 'profile',
      },
      { component: DisplayQuestionComponent, path: 'contests/:contestId' },
      { component: ProblemDecriptionComponent, path: 'problems/:problemId' },
      {
        component: ViewTestcaseComponent,
        path: 'problems/testcase/:problemId',
      },
      {
        component: AddTestcaseComponent,
        path: 'problems/testcase/:problemId/add',
      },
      { component: EditProblemComponent, path: 'edit-problem/:problemId' },
      { component: EditContestComponent, path: 'edit-contest/:contestId' },
      {
        component: AddQuestionComponent,
        path: 'contests/:contestId/add-problem',
      },
      {
        component: ProblemDecriptionComponent,
        path: 'contests/:contestId/problems/:problemId',
      },
    ],
  },
  {
    component: UserDashboardComponent,
    path: 'user',
    canActivate: [userGuard],
    children: [
      {
        component: WelcomeComponent,
        path: '',
      },
      {
        component: ProfileComponent,
        path: 'profile',
      },
      {
        component: UserContestComponent,
        path: 'view-all-contest',
      },
      { component: UserContestSubmissionsComponent, path: 'my-contest' },
      { component: UserProblemSubmissionComponent, path: 'my-submissions' },
      { component: UserProblemListComponent, path: 'view-all-problem' },
      { component: ProblemDecriptionComponent, path: 'problems/:problemId' },
      { component: UserResultComponent, path: 'contest/:contestId/result' },
    ],
  },
  {
    component: StartContestComponent,
    path: 'user/contest/:contestId',
    canActivate: [userGuard],
    children: [
      { component: ContestInstructionsComponent, path: '' },
      { component: ProblemDecriptionComponent, path: 'problems/:problemId' },
    ],
  },

  {
    component: ProblemDecriptionComponent,
    path: 'problems/:problemId',
    canActivate: [userGuard],
  },
  { component: ContestComponent, path: 'contests', canActivate: [userGuard] },
  { component: ContestQuestionComponent, path: 'contests/:contestId' },
  {
    component: ProblemDecriptionComponent,
    path: 'contests/:contestId/problems/:problemId',
    canActivate: [userGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
