import {Component, OnInit} from '@angular/core';
import {Router, Event, NavigationEnd} from "@angular/router/";

import {Subscription} from "rxjs/Subscription";

import {TimerComponent} from "../timer/timer.component";
import {TimerService} from "../timer/timer.service";


@Component({
    selector: 'loading',
    templateUrl: 'loading.component.html'
})
export class LoadingComponent implements OnInit {
    
    private router : Router;
    private timer : TimerService;
    private subscription : Subscription;
    
    
    constrcutor(router : Router, timer : TimerService) {
        this.router = router;
        this.timer = timer;
    }
    
    
    ngOnInit() {
        console.log(this.router == undefined);
        console.log(this.timer == undefined);
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
    
}


