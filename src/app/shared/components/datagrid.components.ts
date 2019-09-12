import {Component, Input} from '@angular/core';
import {UsersService} from '../service/users.service';
import {Observable, combineLatest, Subscription} from 'rxjs';
import { User } from '../model/user.model';

@Component({
    selector: 'data-grid',
    templateUrl: './datagrid.components.html',
    styleUrls: ['./datagrid.components.css'],
})

export class DataGridComponent { 
    @Input () user: User[];
    users: User[] = [];
    @Input () thead = [];
    theads = [];
    searchStr = '';
    searchProf = '';
    myArray = [];

    constructor(private usersService: UsersService){
        
    }

    ngOnInit(){
        // this.users = this.usersService.getUsers();
            this.load();
          this.theads = this.thead;
        // this.thead = this.usersService.getHeadTable();
    }

    load(){
        return this.users = this.user;

    }

    sortType(sort: string){
        if(sort === 'name'){
            this.myArray = this.users.slice();
           this.user = this.myArray.sort(this.sortName);
           this.load();
        }
        if(sort === 'age'){
            this.myArray = this.users.slice();
            this.user = this.myArray.sort(this.sortAge);
            this.load();
        }
        if(sort === 'email'){
            this.myArray = this.users.slice();
            this.user = this.myArray.sort(this.sortEmail);
            this.load();
        }
        if(sort === 'profession'){
            this.myArray = this.users.slice();
            this.user = this.myArray.sort(this.sortProfession);
            this.load();
        }
    }

    sortName(user1: User, user2: User){
        if(user1.name > user2.name) {
            return 1;
        }
        else if(user1.name === user2.name) {
            return 0;
        }
        else{
             return -1;
        }
    }

    sortAge(user1: User, user2: User){
        if(user1.age > user2.age) {
            return 1;
        }
        else if(user1.age === user2.age) {
            return 0;
        }
        else{
             return -1;
        }
    }

    sortEmail(user1: User, user2: User){
        if(user1.email > user2.email) {
            return 1;
        }
        else if(user1.email === user2.email) {
            return 0;
        }
        else{
             return -1;
        }
    }

    sortProfession(user1: User, user2: User){
        if(user1.profession > user2.profession) {
            return 1;
        }
        else if(user1.profession === user2.profession) {
            return 0;
        }
        else{
             return -1;
        }
    }
    

}