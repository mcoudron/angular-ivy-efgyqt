import { Component, OnInit } from '@angular/core';
import { DynamicComponent } from '../dynamic.component';

@Component({
  selector: 'app-unicat',
  template: `  
    <div class="welcome">
      <h2 class="mat-display-1">Kitty Kitty.</h2>
      <iframe src="https://giphy.com/embed/XfaQkOWb3WiUGBDtj4" width="480" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/Fuzzballs-cute-kawaii-fuzzballs-XfaQkOWb3WiUGBDtj4">via GIPHY</a></p>
    </div> `,
  styles: [
    `  
    .welcome {
      display: flex;
      flex-direction: column;
      align-items: center;  
 
      h2 { margin: 3rem; }  
      img { width: 40%; } 
    } 
  `,
  ],
})
export class UnicatComponent implements DynamicComponent {}
