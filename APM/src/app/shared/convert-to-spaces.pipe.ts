import { PipeTransform, Pipe } from "../../../node_modules/@angular/core";
@Pipe({
    name: 'convertToSpaces'
})
export class ConvertToSpacesPipe implements PipeTransform {
    //transform(value: any, ...args: any[]) {
    transform(value: string, character: string): string {        
        return value.replace(character, ' ');
    }
}