import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ToastrModule } from 'ngx-toastr'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { PipesComponent } from './pipes/pipes.component';
import { JokeComponent } from './joke/joke.component';
import { JokeListComponent } from './joke-list/joke-list.component';
import { JokeFormComponent } from './joke-form/joke-form.component';
import { CustomDirective } from './custom.directive';
import { CcRolloverDirective } from './customdirectives/cc-rollover.directive';
import { NumberPipePipe } from './number-pipe.pipe';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { HttpApiComponent } from './http-api/http-api.component';
import { StatusPipePipe } from './status-pipe.pipe';
import { EeStatusComponent } from './ee-status/ee-status.component';
import { ServerHttpOperationsComponent } from './server-http-operations/server-http-operations.component';
import { ServerHttpServiceService } from "./services/server-http-service.service";
import { UserComponent } from './user/user.component';
import { HomeComponent } from './home/home.component';
import { appRoutes } from "app/routes";
import { RouterModule } from "@angular/router";
import { SignInComponent } from "app/user/auth/sign-in/sign-in.component";
import { SignUpComponent } from "app/user/auth/sign-up/sign-up.component";
import { AuthService } from "app/user/auth/auth.service";
import { TestComponent } from './delete/test/test.component';
import { MessageService } from './services/message.service';



@NgModule({
  declarations: [
    AppComponent,
    TemplateDrivenComponent,
    ReactiveFormsComponent,
    PipesComponent,
    JokeComponent,
    JokeListComponent,
    JokeFormComponent,
    CustomDirective,
    CcRolloverDirective,
    NumberPipePipe,
    ParentComponent,
    ChildComponent,
    HttpApiComponent,
    StatusPipePipe,
    EeStatusComponent,
    StatusPipePipe,
    ServerHttpOperationsComponent,
    SignInComponent,
    SignUpComponent,
    UserComponent,
    HomeComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,  
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpModule,
    ToastrModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [MessageService,ServerHttpServiceService,AuthService],
  bootstrap: [AppComponent],
  exports:[CcRolloverDirective]
})
export class AppModule { }
