import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'description'
})
export class DescriptionPipe implements PipeTransform {

  transform(value: any, args?: any): any {

    let arr = value.replace(/<\/?[^>]+(>|$)/g, "")
      .match( /[^\.!\?]+[\.!\?]+/g );

    let descArr = [];
    let count = 0;

    if(arr) {
      arr.some(
        (ele) => {
  
          descArr.push(ele);
  
          count = count + ele.length;
  
          if(count > 250) {
            return true;
          }
        }
      );
    }

    console.log(count);

    return descArr.join(' ');
  }

}
