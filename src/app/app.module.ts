import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
// import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';

import { AppComponent } from './app.component';
// import { HomeComponent } from './internal/home/home.component';
import { MenuComponent } from './menu/menu.component';
import { AppInternal } from './internal/internal.component';
import { DynamicDirective } from './internal/dynamic.directive';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    // RouterModule.forRoot([{ path: '', component: HomeComponent }]),
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatCardModule,
    MatListModule,
    BrowserAnimationsModule,
  ],
  declarations: [AppComponent, MenuComponent, AppInternal, DynamicDirective],
  bootstrap: [AppComponent],
})
export class AppModule {}
