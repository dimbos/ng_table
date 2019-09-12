import { Injectable } from '@angular/core';


@Injectable()
export class UsersService{

    thead = ['Имя', 'Возраст', 'Email', 'Description',];

    constructor() {

    }
    
    users = [
        {name: 'Мария', age: 42, email: 'test1@test.ru', profession: 'Вокал'},
        {name: 'Вера', age: 34, email: 'test2@test.ru', profession: 'Инспектор'},
        {name: 'Катя', age: 33, email: 'test5@test.ru', profession: 'Преподаватель'},
        {name: 'Майя', age: 29, email: 'test4@test.ru', profession: 'Инспектор'},
        {name: 'Люда', age: 25, email: 'test3@test.ru', profession: 'Юрист'},
    ];

    getUsers() {
      return this.users;
      };

    getHeadTable(){
      return this.thead;
    };


    
}

