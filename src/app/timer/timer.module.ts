import {NgModule} from "@angular/core";
import {RouterModule} from '@angular/router';

import {ButtonModule} from 'primeng/button';
import {ProgressBarModule} from 'primeng/progressbar';

import {TimerComponent} from "./timer.component";
import {BarPipe, SecondsPipe} from "./timer.pipes";
import {TimerService} from "./timer.service";


@NgModule({
    declarations : [TimerComponent, BarPipe, SecondsPipe],
    imports : [RouterModule, ButtonModule, ProgressBarModule],
    exports : [TimerComponent, BarPipe, SecondsPipe],
    providers : [TimerService]
})
export class TimerModule {
    
}


