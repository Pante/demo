import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule} from "@angular/router";

import { AppComponent } from './app.component';
import {FoodModule} from "./food/food.module";
import {LoadingModule} from "./loading/loading.module";
import {TimerModule} from "./timer/timer.module";

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, RouterModule.forRoot([]), FoodModule, LoadingModule, TimerModule],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
