import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Game1Component} from './game1/game1.component';
import { Game2Component } from './game2/game2.component';
import { OptionsComponent } from './options/options.component';

const routes: Routes = [
  { path: '', redirectTo: 'index', pathMatch: 'full'},
  { path: 'game1', component: Game1Component },
  { path: 'game2', component: Game2Component },
  { path: 'options', component: OptionsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
