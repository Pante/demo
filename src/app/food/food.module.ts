import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {RouterModule, Routes} from '@angular/router';

import {ButtonModule} from 'primeng/button';

import {FoodComponent} from './food.component';
import {FoodService} from "./food.service";

import {TimerModule} from "../timer/timer.module";


const food: Routes = [
    {path : "food", component : FoodComponent}
];

@NgModule({
    declarations: [FoodComponent],
    imports: [RouterModule.forRoot(food), CommonModule, ButtonModule, TimerModule],
    exports: [FoodComponent],
    providers: [FoodService]
})
export class FoodModule {}


