import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {

  transform(bottles: any, term: any): any {
    if (term === undefined) return bottles;
    return bottles.filter(bottle => {
      return bottle.name.toLowerCase().includes(term.toLowerCase()) ||
        bottle.country.toLowerCase().includes(term.toLowerCase()) ||
        bottle.district.toLowerCase().includes(term.toLowerCase()) ||
        bottle.scent.toLowerCase().includes(term.toLowerCase()) ||
        bottle.taste.toLowerCase().includes(term.toLowerCase()) ||
        bottle.comment.toLowerCase().includes(term.toLowerCase()) ||
        bottle.grape.toLowerCase().includes(term.toLowerCase()) ||
        bottle.food.toLowerCase().includes(term.toLowerCase());
    });  
  }
}






      /*


      export class FilterPipe implements PipeTransform {
    transform(items: Array<any>, filter: {[key: string]: any }): Array<any> {
        return items.filter(item => {
                let notMatchingField = Object.keys(filter)
                                             .find(key => item[key] !== filter[key]);

                return !notMatchingField; // true if matches all fields
            });
    }
}


  transform(bottles: any, term: any): any {
    if (term === undefined) return bottles;
    return bottles.filter(function(bottle){
      return bottle.name.toLowerCase().includes(term.toLowerCase());
    });
  }

        return data.filter(item => {
        return item.toUpperCase().indexOf(searchTerm) !== -1 
      });


    if (term === undefined) return bottles;
    return bottles.filter(bottle => {
      return bottle.name.toLowerCase().includes(term.toLowerCase());
    });  
      */