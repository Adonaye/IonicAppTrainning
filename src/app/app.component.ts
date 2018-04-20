import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Observable } from 'rxjs/Observable';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { FormViewerPage } from '../pages/form-viewer/form-viewer';
import { Categoria } from '../models/categoria';
import { CategoriasProvider } from '../providers/fire/categorias';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;
  categorias: Categoria[] = new Array<Categoria>();

  constructor(
    public platform: Platform, 
    public statusBar: StatusBar, 
    public splashScreen: SplashScreen,
    public cp: CategoriasProvider
  ) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    // this.pages = [
    //   { title: 'Home', component: HomePage },
    //   { title: 'List', component: ListPage },
    //   { title: 'Form Viewer', component: FormViewerPage },
    // ];
    
    // import categories and add the url references to the pages property
    // redirect to form-list component with the url in the navparams
    
    
    
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      
      // load categories in the sidebar
      this.loadCategorias();
      
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    //this.nav.setRoot(page.component);
    
    // use url in the page and send it to the form-list component
    
    
  }
  
  loadCategorias() {
    let categoriasObservable = this.cp.fetch();
    categoriasObservable.subscribe(
      data => {
        this.categorias = data.map(
          categoria => {
            return {id: categoria.payload.doc.id, ...categoria.payload.doc.data()};
          }
        );
      }
    );
  }
}
