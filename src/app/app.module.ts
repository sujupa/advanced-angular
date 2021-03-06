import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
// import { LoggingService } from './logging.service';
import { CanDeactivateGuard } from './auth-guard/can-deactivate-guard.service';
import { TemplateDrivenComponent } from './forms/template-driven/template-driven.component';
import { ReactiveComponent } from './forms/reactive/reactive.component';
import { PipesComponent } from './pipes/pipes.component';
import { ShortenPipe } from './customPipe/shorten.pipe';
import { FilterPipe } from './customPipe/filter.pipe';
import { HttpComponent } from './http/http.component';
import { AuthInterceptorService } from './interceptors/auth-interceptor.service';
import { LoggingInterceptorsService } from './interceptors/logging-interceptors.service';
import { DynamicComponentComponent } from './dynamic-component/dynamic-component.component';
import { PlaceholderDirective } from './http/placeholder/placeholder.directive';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

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
  { path: 'pipes', component: PipesComponent },
  { path: 'http', component: HttpComponent },
  { path: '**', redirectTo: '/notFound' }
];

@NgModule({
  entryComponents: [
    DynamicComponentComponent     // Not needed for angular >= 9
  ],
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
    ReactiveComponent,
    PipesComponent,
    ShortenPipe,
    FilterPipe,
    HttpComponent,
    DynamicComponentComponent,
    PlaceholderDirective
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    // RouterModule.forRoot(routes, { useHash: true })
    // RouterModule.forRoot(routes, { useHash: true })
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabled'
    }),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [AuthService, AuthGuard, CanDeactivateGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoggingInterceptorsService,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
