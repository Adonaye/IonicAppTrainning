import { FormViewerPage } from './../pages/form-viewer/form-viewer';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { Firebase } from '@ionic-native/firebase';
import { AngularFireModule } from 'angularfire2';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';

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
import { FormProvider } from '../providers/form/form';

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
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireStorageModule,
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
    Firebase,
    {provide: ErrorHandler, useClass: IonicErrorHandler},

    QuestionService,
    QuestionControlService,
    FormProvider
  ]
})
export class AppModule {}
