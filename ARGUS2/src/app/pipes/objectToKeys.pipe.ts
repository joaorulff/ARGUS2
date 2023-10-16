import { Pipe, PipeTransform } from '@angular/core';
/*
 * Extract keys of an object
*/
@Pipe({name: 'objectToKeys'})
export class ObjectToKeysPipe implements PipeTransform {
  transform(value: { [key: string]: any } ): string[] {
    return Object.keys(value);
  }
}