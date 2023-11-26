import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from '@layouts/components';
import { AppRouteEnum } from '@core/enums';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,

    children: [
      {
        path: AppRouteEnum.Home,
        loadChildren: () => import('@pages/home')
          .then((m) => m.HomeModule)
      },
      {
        path: AppRouteEnum.Channels,
        loadChildren: () => import('@pages/channels')
          .then((m) => m.ChannelsModule)
      },
      {
        path: AppRouteEnum.Developers,
        loadChildren: () => import('@pages/developers')
          .then((m) => m.DevelopersModule)
      },
      {
        path: AppRouteEnum.Auth,
        loadChildren: () => import('@pages/auth')
          .then((m) => m.AuthModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
