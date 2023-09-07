import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ConvertUSDToJD'
})
export class ConvertUSDToJDPipe implements PipeTransform {

  transform(value: any,rate: any= 0.708 ): any {
    return value * rate ;
  }

}
