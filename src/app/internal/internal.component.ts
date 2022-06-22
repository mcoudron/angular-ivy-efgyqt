import { Component, OnDestroy, OnInit, Type, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { NavigationService } from '../navigation.service';

import { DynamicComponent } from './dynamic.component';
import { DynamicDirective } from './dynamic.directive';
import { HomeComponent } from './home/home.component';
import { UnicatComponent } from './unicat/unicat.component';
import { UnicornComponent } from './unicorn/unicorn.component';

@Component({
  selector: 'app-internal',
  template: `  
   <h3 class="mat-headline">Relax, you got this</h3>
   <ng-template appDynamic></ng-template> 
  `,
  styles: [
    `  
    h3 { text-align: center; } 
  `,
  ],
})
export class AppInternal {
  @ViewChild(DynamicDirective) dynamicHost: DynamicDirective;
  private interval: number | undefined;
  private currentIndex = 1;
  subscription: Subscription;

  constructor(private navigationService: NavigationService) {
    this.subscription = this.navigationService
      .onMessage()
      .subscribe((location) => {
        if (location) {
          this.loadComponent(location.menuItem);
        }
      });
  }

  ngAfterViewInit() {
    this.loadComponent('home');
  }

  private loadComponent(componentIdentifier: string): void {
    let component = HomeComponent;
    if (componentIdentifier == 'catcorn') {
      component = UnicatComponent;
    } else if (componentIdentifier == 'unicorn') {
      component = UnicornComponent;
    }

    const viewContainerRef = this.dynamicHost.viewContainerRef;
    viewContainerRef.clear();

    const componentRef =
      viewContainerRef.createComponent<DynamicComponent>(component);
  }
}
