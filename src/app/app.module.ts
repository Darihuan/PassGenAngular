import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { ClipboardModule } from 'ngx-clipboard';



import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ContenedorComponent } from './contenedor/contenedor.component';
import {FormService} from './contenedor/form.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContenedorComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
      FormsModule,
      ClipboardModule
  ],
  providers: [FormService],
  bootstrap: [AppComponent]
})
export class AppModule { }
