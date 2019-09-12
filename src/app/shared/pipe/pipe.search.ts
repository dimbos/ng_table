import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'search',
})
export class SearchPipe implements PipeTransform{
    transform(users, value){
        return users.filter((u) => {
            return u.name.toLowerCase().includes(value.toLowerCase()) ||
            u.profession.toLowerCase().includes(value.toLowerCase());
        })
    }
}