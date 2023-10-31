import { Pipe, PipeTransform } from '@angular/core';
/*
 * Extract keys of an object
*/
@Pipe({name: 'streamSetToStream'})
export class StreamSetToStreamPipe implements PipeTransform {
  transform( value: { [key: string]: any }, streamName: string ): any {

    if( streamName in value ){
        return value[streamName];
    }
    return null;
  }
}