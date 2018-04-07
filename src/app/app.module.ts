import { FormViewerPage } from './../pages/form-viewer/form-viewer';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { DynamicFormComponent } from '../components/dynamic-form/dynamic-form.component';
import { DynamicFormQuestionComponent } from './../components/dynamic-form-question/dynamic-form-question.component';
import { ReactiveFormsModule } from '@angular/forms';
import { QuestionControlService } from '../ts/question-control.service';
import { QuestionService } from '../ts/question.service';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    FormViewerPage,
    DynamicFormComponent,
    DynamicFormQuestionComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    FormViewerPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},

    QuestionService,
    QuestionControlService
  ]
})
export class AppModule {}
