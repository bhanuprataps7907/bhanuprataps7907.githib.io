import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import 'rxjs/add/operator/map';
// import { GridModule } from '@syncfusion/ej2-angular-grids';
import { InMemoryDataService }  from './services/in-mem';
import { GridAllModule } from '@syncfusion/ej2-angular-grids';
import { AppComponent } from './app.component';
import { CrudService }  from './services/crud.service';
import { environment } from 'src/environments/environment';


@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    // GridModule,
    GridAllModule,
    ! environment.production ? HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService) :[],
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [CrudService],
  bootstrap: [AppComponent]
})
export class AppModule { }
