import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numberPipe'
})
export class NumberPipePipe implements PipeTransform {

  transform(value: Number): Number {
    var val: Number;
    if (value <= 10)
      val = 100;
    else
      val = value.valueOf() * 10;
    return val;
  }

}
