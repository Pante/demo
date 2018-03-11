import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router/";

import {Food} from "./food";
import {FoodService} from "./food.service";


@Component({
    selector: 'food',
    templateUrl: 'food.component.html'
})
export class FoodComponent implements OnInit {
    
    private router : Router;
    private service : FoodService;
    items : Food[];
    
    
    constructor(router : Router, service : FoodService) {
        this.router = router;
        this.service = service;
    }
    
    
    ngOnInit() : void  {
        this.items = this.service.getItems();
    }
    
    order(id : number) : void {
        this.router.navigate(["/order", id]);
    }
    
}


