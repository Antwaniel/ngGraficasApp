import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BarrasDobleComponent } from './graficas/pages/barras-doble/barras-doble.component';
import { BarrasComponent } from './graficas/pages/barras/barras.component';
import { DonaHttpComponent } from './graficas/pages/dona-http/dona-http.component';
import { DonaComponent } from './graficas/pages/dona/dona.component';

const routes: Routes = [
{
  path: 'graficas',
  loadChildren: ()=> import('./graficas/graficas.module').then(m => m.GraficasModule)
},
{
  path: '**',
  redirectTo: 'graficas'
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
