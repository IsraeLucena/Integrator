import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';
const LAYOUT_ROUTES: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', redirectTo: 'unidades', pathMatch: 'full' },
      //---------------------------------------------------------->
      //Dashboards
      //---------------------------------------------------------->
      {
        path: 'unidades',
        loadChildren: '../pages/unidades/unidades.module#UnidadesModule'
      },
      //---------------------------------------------------------->
      //Convenios e Plano
      //---------------------------------------------------------->
      {
        path: 'convenios',
        loadChildren: '../pages/convenios/convenios.module#ConveniosModule'
      },
      //---------------------------------------------------------->
      //Convenios e Plano
      //---------------------------------------------------------->
      {
        path: 'servicos',
        loadChildren: '../pages/servicos/servicos.module#ServicosModule'
      },
      //---------------------------------------------------------->
      //Configuracao
      //---------------------------------------------------------->
      {
        path: 'configuracao',
        loadChildren: '../pages/configuracao/configuracao.module#ConfiguracaoModule'
      },
      //---------------------------------------------------------->
      //Convenios e Plano
      //---------------------------------------------------------->
      {
        path: 'registro',
        loadChildren: '../pages/registro/registro.module#RegistroModule'
      },
      //---------------------------------------------------------->
      //Blacklist
      //---------------------------------------------------------->
      {
        path: 'blacklist',
        loadChildren: '../pages/blacklist/blacklist.module#BlacklistModule'
      },
      //---------------------------------------------------------->
      //Int. Manual
      //---------------------------------------------------------->
      {
        path: 'manual',
        loadChildren: '../pages/manual/manual.module#ManualModule'
      }
    ]
  },

  // 404 Page Not Found
  { path: '**', redirectTo: 'unidades' }
];

export const LayoutRoutes = RouterModule.forChild(LAYOUT_ROUTES);
