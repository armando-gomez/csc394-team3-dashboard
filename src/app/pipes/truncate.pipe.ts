import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'truncate'
})
export class TruncatePipe implements PipeTransform {

	transform(value: any, arg): any {
		if(arg === undefined) {
			return value;
		}

		if(value.length > arg) {
			return value.substring(0, arg) + '...';
		} else {
			return value;
		}
	}

}
