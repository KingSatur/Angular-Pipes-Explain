import { Pipe, PipeTransform} from '@angular/core'
import { Type } from '@angular/compiler';

@Pipe({
    name:'capitalizado'
})
export class CapitalizadoPipe implements PipeTransform{
    transform(value:string, args:any[]):string[]{

        value = value.toLowerCase()
        let words = value.split(' ')

        words.forEach(word => {
            word[0].toUpperCase() 
        })

        return words;
    }
}