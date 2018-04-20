
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { Firebase } from '@ionic-native/firebase';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { GooglePlus } from '@ionic-native/google-plus';
import { environment } from '../environments/environment';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { FormViewerPage } from './../pages/form-viewer/form-viewer';
import { FormListPage } from './../pages/form-list/form-list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { DynamicFormComponent } from '../components/dynamic-form/dynamic-form.component';
import { DynamicFormQuestionComponent } from './../components/dynamic-form-question/dynamic-form-question.component';
import { ReactiveFormsModule } from '@angular/forms';
import { QuestionControlService } from '../ts/question-control.service';
import { QuestionService } from '../ts/question.service';
import { FormProvider } from '../providers/form/form';
import { FireProvider } from '../providers/fire/fire';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    FormViewerPage,
    FormListPage,
    DynamicFormComponent,
    DynamicFormQuestionComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireStoreModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    FormViewerPage,
    FormListPage,
  ],
  providers: [
    GooglePlus,
    StatusBar,
    SplashScreen,
    Firebase,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    QuestionService,
    QuestionControlService,
    FormProvider,
    FireProvider
  ]
})
export class AppModule {}
