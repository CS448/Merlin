import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'

const routs: Routes = [
  {
    path: '',
    loadChildren: './main-container/main-container.module#MainContainerModule' 
  }
]

@NgModule({
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
