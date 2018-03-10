import {Pipe, PipeTransform} from "@angular/core";
import { CommonModule } from '@angular/common';


@Pipe({name : "bar"})
export class BarPipe implements PipeTransform {
    
    transform(value : number, initial : number) : number {
        let inverse = Math.floor((value / initial) * 100);
        return 100 - inverse;
    }
    
}

