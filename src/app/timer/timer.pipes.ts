import {Pipe, PipeTransform} from "@angular/core";


@Pipe({name : "bar"})
export class BarPipe implements PipeTransform {
    
    transform(value : number, initial : number) : number {
        let inverse = Math.floor((value / initial) * 100);
        return 100 - inverse;
    }
    
}


@Pipe({name : "seconds"})
export class SecondsPipe implements PipeTransform {
    
    transform(value : number) : string {
        return `${value}s`;
    }
    
}

