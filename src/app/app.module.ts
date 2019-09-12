import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {AppComponent} from './app.component';
import {Routes, RouterModule} from '@angular/router';
import { DataGridComponent } from './shared/components/datagrid.components';
import { SearchPipe } from './shared/pipe/pipe.search';
import { DataGridTwoComponent } from './shared/components/datagridTwo/datagridTwo.components';

//маршруты

const appRoutes: Routes = [
    {path: '', component: DataGridComponent},
    {path: 'form2', component: DataGridTwoComponent}
]


@NgModule({
    imports: [BrowserModule, FormsModule, RouterModule.forRoot(appRoutes)], 
    declarations: [AppComponent, DataGridComponent, SearchPipe, DataGridTwoComponent],
    bootstrap: [AppComponent]
})

export class AppModule { }