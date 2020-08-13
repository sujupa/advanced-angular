import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { BasicHighlightDirective } from './basic-highlight/basic-highlight.directive';
import { BetterHighlightDirective } from './better-highlight/better-highlight.directive';
import { UnlessDirective } from './unless.directive';
import { TrialComponent } from './trial/trial.component';
import { ChildTestComponentComponent } from './child-test-component/child-test-component.component';
import { combineLatest } from 'rxjs';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', component: AppComponent },
  {
    path: 'test', component: TestComponent, children: [
      { path: 'child', component: ChildTestComponentComponent }
    ]
  },
  { path: 'trial', component: TrialComponent },
  { path: 'trial/:id/:name', component: TrialComponent },
  { path: 'trial/:id/edit', component: TrialComponent }
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
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
