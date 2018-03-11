import {Component, OnDestroy} from '@angular/core';
import {Router, Event, NavigationEnd} from "@angular/router/";

import {Subscription} from "rxjs/Subscription";

import {TimerService} from "../timer/timer.service";


@Component({
    selector: 'loading',
    templateUrl: 'loading.component.html'
})
export class LoadingComponent implements OnDestroy {
    
    private router : Router;
    private subscription : Subscription;
    timer : TimerService;
    
    
    constructor(router : Router, timer : TimerService) {
        this.router = router;
        this.timer = timer;
        this.router.events.subscribe((event : Event) => {
            if (event instanceof NavigationEnd) {
                if (this.subscription != undefined && this.subscription != null) {
                    this.subscription.unsubscribe();
                }
                this.subscription = this.timer.start().subscribe();
            }
        });
    }
    
    
    ngOnDestroy() {
        if (this.subscription != undefined) {
            this.subscription.unsubscribe();
        }
    }
    
    
    onClick() : void {
        this.router.navigate(["/food"]);
    }
    
}
