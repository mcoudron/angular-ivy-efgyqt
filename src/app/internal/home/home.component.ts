import { Component, OnInit } from '@angular/core';
import { DynamicComponent } from '../dynamic.component';

@Component({
  selector: 'app-home',
  template: `  
    <div class="welcome">
      <h2 class="mat-display-1">Welcome! We're home.</h2>
      <iframe src="https://giphy.com/embed/LoOXIa9yYoSc7ybtIj" width="480" height="476" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/animated-running-canter-LoOXIa9yYoSc7ybtIj">via GIPHY</a></p>
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
export class HomeComponent implements DynamicComponent {}
