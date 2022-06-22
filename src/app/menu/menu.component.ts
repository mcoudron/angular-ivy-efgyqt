import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';
import { NavigationService } from '../navigation.service';

@Component({
  selector: 'app-menu',
  template: `  
    <button mat-icon-button aria-label="Button to open menu" [matMenuTriggerFor]="menu">  
      Menu
    </button> 
    <mat-menu #menu="matMenu">  
      <button mat-menu-item (click)="navigate('home')">
        <mat-icon>home</mat-icon> <span>Home</span> 
      </button> 
      <button mat-menu-item (click)="navigate('catcorn')">  
        <mat-icon>cat</mat-icon> <span>Unicat</span>
      </button> 
      <button mat-menu-item (click)="navigate('unicorn')">  
        <mat-icon>unicorn</mat-icon> <span>Unicorn</span>
      </button> 
    </mat-menu>
  `,
})
export class MenuComponent {
  constructor(private navigationService: NavigationService) {}

  public navigate(location: string) {
    this.navigationService.sendMessage(location);
  }
}
