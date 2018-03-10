import {NgModule} from "@angular/core";
import {RouterModule} from '@angular/router';

import {ProgressBarModule} from 'primeng/progressbar';

import {TimerComponent} from "./timer.component";
import {BarPipe} from "./timer.pipes";
import {TimerService} from "./timer.service";


@NgModule({
    declarations : [TimerComponent, BarPipe],
    imports : [RouterModule, ProgressBarModule],
    exports : [TimerComponent, BarPipe],
    providers : [TimerService]
})
export class TimerModule {
    
}


