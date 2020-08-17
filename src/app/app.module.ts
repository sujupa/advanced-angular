import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { BasicHighlightDirective } from './basic-highlight/basic-highlight.directive';
import { BetterHighlightDirective } from './better-highlight/better-highlight.directive';
import { UnlessDirective } from './unless.directive';
import { TrialComponent } from './trial/trial.component';
import { ChildTestComponentComponent } from './child-test-component/child-test-component.component';
import { combineLatest } from 'rxjs';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGuard } from './auth-guard/auth-guard.service';
import { AuthService } from './auth-guard/auth.service';
import { CanDeactivateGuard } from './auth-guard/can-deactivate-guard.service';
import { TemplateDrivenComponent } from './forms/template-driven/template-driven.component';
import { ReactiveComponent } from './forms/reactive/reactive.component';

const routes: Routes = [
  { path: '', component: AppComponent },
  {
    path: 'test', component: TestComponent,
    // canActivate: [AuthGuard],      //for parent
    canActivateChild: [AuthGuard],    //for child
    children: [
      {
        path: 'child', component: ChildTestComponentComponent,
        canDeactivate: [CanDeactivateGuard]
      }
    ]
  },
  { path: 'trial', component: TrialComponent },
  { path: 'trial/:id/:name', component: TrialComponent },
  { path: 'trial/:id/edit', component: TrialComponent },
  { path: 'notFound', component: PageNotFoundComponent, data: { message: 'Page Not Found from app.module.ts' } },
  { path: 'templateForms', component: TemplateDrivenComponent },
  { path: 'reactiveForms', component: ReactiveComponent },
  { path: '**', redirectTo: '/notFound' }
];

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    BasicHighlightDirective,
    BetterHighlightDirective,
    UnlessDirective,
    TrialComponent,
    ChildTestComponentComponent,
    PageNotFoundComponent,
    TemplateDrivenComponent,
    ReactiveComponent
  ],
  imports: [
    BrowserModule,
    // RouterModule.forRoot(routes, { useHash: true })
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [AuthService, AuthGuard, CanDeactivateGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
