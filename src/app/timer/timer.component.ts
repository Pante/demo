import {Component, OnDestroy} from "@angular/core";
import {Router, Event, NavigationEnd} from "@angular/router/";

import {Subscription} from "rxjs/Subscription";

import {TimerService} from "./timer.service";


@Component({
    selector : "timer",
    templateUrl : "./timer.component.html"
})
export class TimerComponent implements OnDestroy {
    
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
                this.subscription = this.timer.start().subscribe(current => {
                    if (current <= 0) {
                        this.subscription.unsubscribe();
                    }
                });
            }
        });
    }
    
    
    ngOnDestroy() {
        if (this.subscription != undefined) {
            this.subscription.unsubscribe();
        }
    }
    
    
    increase(time : number) : void {
        this.timer.reset(time * time);
    }
    
}


