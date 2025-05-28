import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ProfilePageComponent } from './pages/dog-page/dog-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';

export const routes: Routes = [


    {
      path: 'primary',
      loadComponent:() =>
        import ('./pages/primary-page/primary-page.component'),

      children:[

        {
          path: 'home',
          loadComponent:() =>
            import ('./pages/home-page/home-page.component'),

        },
        {
          path: 'profile',
          component: ProfilePageComponent,
        },
        {
          path: 'contact/:query',
          component: ContactPageComponent,
        }

      ]
    },
    {
      path: '**',
      redirectTo: 'primary'
    }
];
