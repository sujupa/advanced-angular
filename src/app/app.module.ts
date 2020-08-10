import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { BasicHighlightDirective } from './basic-highlight/basic-highlight.directive';
import { BetterHighlightDirective } from './better-highlight/better-highlight.directive';
import { UnlessDirective } from './unless.directive';
import { TrialComponent } from './trial/trial.component';

const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'test', component: TestComponent },
  { path: 'trial', component: TrialComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    BasicHighlightDirective,
    BetterHighlightDirective,
    UnlessDirective,
    TrialComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
