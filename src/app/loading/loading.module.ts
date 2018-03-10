import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {LoadingComponent} from './loading.component';

import {TimerModule} from "../timer/timer.module";


const loading: Routes = [
    {path : "loading", component : LoadingComponent},
    {path : "", redirectTo : "/loading", pathMatch: "full"} 
];

@NgModule({
    declarations: [LoadingComponent],
    imports: [RouterModule.forChild(loading), TimerModule],
    exports: [LoadingComponent],
    providers: []
})
export class LoadingModule {}



