import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'encriptor'
})
export class EncriptorPipe implements PipeTransform {

  transform(word: String, ocultar=true): String {

    let encriptedWord = null;
    let i = 0
    while(i < word.length){
      encriptedWord += "*"
    }

    return encriptedWord
  }

}
