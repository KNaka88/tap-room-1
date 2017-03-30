import {Pipe, PipeTransform} from '@angular/core';
import {Keg} from './keg.model';

@Pipe({
  name: "checkVolume",
  pure: false

})

export class CheckVolumePipe implements PipeTransform {

  transform(input: Keg[], filterByVolume){
    var output: Keg[] = [];

    for(var i=0; i<input.length; i++){
      console.log("deleted");
      if(input[i].pints <= 0){
        input.splice(i, 1);
      }
    }

  // console.log("check" + input);
    for(var i=0; i<input.length; i++){
      if (filterByVolume==="allKegs"){
        output.push(input[i]);
      }else if (filterByVolume === "lessthan10"){
        if(input[i].pints < 10){
          output.push(input[i]);
        }
      }
    }
    return output;



  }


}
