import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `  
  <div>  
  <mat-toolbar color="primary" class="toolbar">
      <h1>Unicorn Nation</h1>
      <div>        
        <app-menu></app-menu> 
      </div>
    </mat-toolbar>
    </div>
    <div>     
      <app-internal></app-internal> 
   </div>
  `,
  styles: [
    `  
   .toolbar { display: flex; justify-content: space-between; }
 `,
  ],
})
export class AppComponent {}
