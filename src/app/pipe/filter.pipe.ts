import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(list: any[], filterField: string, keyword: string): any {
    if (!list || !filterField) {
      console.log(8388)
      return list;
    }
    return list.filter(item => {
      let fieldValue = item[filterField];
      return fieldValue.indexOf(keyword) >= 0;
    });
  }

}
