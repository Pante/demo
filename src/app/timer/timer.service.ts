import {Injectable} from "@angular/core";

import {Observable} from "rxjs/Rx";


@Injectable()
export class TimerService {
    
    observable : Observable<number>;
    initial : number;
    current : number;
    
    
    constructor() {}
    
    
    start(initial = 10) : Observable<number> {
        if (this.observable == undefined) {
            this.initial = initial;
            this.current = initial;
            this.observable = Observable.timer(1000, 1000).map(tick => {
                if (this.current >= 0) {
                    this.current--;
                    return this.current;
                    
                } else {
                    return 0;
                }
            }).share();
        }
        
        return this.observable;
    }
    
    
    reset(current : number) : void {
        if (this.initial < current) {
            this.initial = current;
        }
        this.current = current;
    }
    
}


