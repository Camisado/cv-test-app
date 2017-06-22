import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(value: any, input: string) {
    if (input) {
      input = input.toLowerCase();
      return value.filter(function (asteroid: any) {
        return asteroid.name.toLowerCase().indexOf(input) > -1;
      })
    }
    return value;
  }
}
