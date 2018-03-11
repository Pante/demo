import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {RouterModule, Routes} from '@angular/router';

import {ButtonModule} from 'primeng/button';

import {LoadingComponent} from './loading.component';

import {TimerModule} from "../timer/timer.module";


const loading: Routes = [
    {path : "loading", component : LoadingComponent},
    {path : "", redirectTo : "/loading", pathMatch: "full"} 
];

@NgModule({
    declarations: [LoadingComponent],
    imports: [RouterModule.forRoot(loading), CommonModule, ButtonModule, TimerModule],
    exports: [LoadingComponent],
    providers: []
})
export class LoadingModule {}



