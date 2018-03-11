import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'statusPipe',
  pure:false
})
export class StatusPipePipe implements PipeTransform {

  transform(value: any, serverStatus: string, currentStatus: string): any {
    console.log('serverStatus==>'+serverStatus)
    if (value.length === 0 || serverStatus === '')
      return value;
    let filterDetails = [];
    for (const item of value) {
      console.log('serverStatus2==>'+item[currentStatus])
      if (item[currentStatus] === serverStatus) {
         
        filterDetails.push(item);
      }

    }
    return filterDetails;
  }

}
