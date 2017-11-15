import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { ViewListComponent} from './component/view-list/view-list.component';
import { ListComponent } from './list.component';

const routes: Routes = [
	{ path: 'list', component: ListComponent, data: { title: 'list' } },
	{ path: 'list/:listId', component: ViewListComponent, data: { title: 'list-edit' } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class ListRoutingModule { }
