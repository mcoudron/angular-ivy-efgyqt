import { Component, OnInit } from '@angular/core';
import { DynamicComponent } from '../dynamic.component';

@Component({
  selector: 'app-unicorn',
  template: `  
    <div class="welcome">
      <h2 class="mat-display-1">Noo.</h2>
      <iframe src="https://giphy.com/embed/YmVNzDnboB0RQEpmLr" width="480" height="438" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/YmVNzDnboB0RQEpmLr">via GIPHY</a></p>
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
export class UnicornComponent implements DynamicComponent {}
