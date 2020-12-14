import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'join'
})
export class JoinPipe implements PipeTransform {

  transform(array: any, start?: any, end?: any): any {
    let result = array;
    if(start!==undefined)
    {
      if(end!==undefined){
        result = result.slice(start, end);
      }
      else
      result = result.slice(start, result.length);
    }
    return result.join(", ");
  }

}
