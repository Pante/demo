import {Component, OnInit, OnDestroy} from "@angular/core";
import {Router, Event, NavigationEnd} from "@angular/router/";

import {Subscription} from "rxjs/Subscription";

import {ProgressBarModule} from 'primeng/progressbar';

import {TimerService} from "./timer.service";
import {BarPipe} from "./timer.pipes";


@Component({
    selector : "timer",
    templateUrl : "./timer.component.html"
})
export class TimerComponent implements OnInit, OnDestroy {
    
    private router : Router;
    timer : TimerService;
    private subscription : Subscription;
    
    
    constrcutor(router : Router, timer : TimerService) {
        console.log("Timer constructor");
        this.router = router;
        this.timer = timer;
    }
    
    
    ngOnInit() {
        console.log("Timer init");
        this.router.events.subscribe((event : Event) => {
            if (event instanceof NavigationEnd) {
                this.subscription = this.timer.start().subscribe(current => {
                    if (current <= 0) {
                        this.subscription.unsubscribe();
                    }
                });
            }
        });
    }
    
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
    
    
    increase(time : number) : void {
        this.timer.reset(time * time);
    }
    
}


