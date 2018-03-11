import {Injectable} from '@angular/core';

import {Food} from "./food";


@Injectable()
export class FoodService {
    
    items: Food[];


    constructor() {
        this.items = [
            new Food(1, "Beverage", "assets/food/beverage.svg"),
            new Food(2, "Breakfast", "assets/food/breakfast.svg"),
            new Food(3, "fast-food", "assets/food/fast-food.svg"),
            new Food(4, "french-fries", "assets/food/french-fries.svg"),
            new Food(5, "hamburger", "assets/food/hamburger.svg"),
            new Food(6, "ice-cream", "assets/food/ice-cream.svg"),
            new Food(7, "pancakes", "assets/food/pancakes.svg"),
            new Food(8, "pizza", "assets/food/hamburger.svg"),
            new Food(9, "sushi", "assets/food/sushi.svg")
        ];
    }
    
    
    getItems() : Food[] {
        return this.items;
    }
    
}


