import {Component, OnInit} from '@angular/core';
import {UsersService} from './shared/service/users.service';
import { User } from './shared/model/user.model';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [UsersService],
})

export class AppComponent implements OnInit { 
    user: User[] = [];
    thead = [];

    constructor(private usersService: UsersService){
        
    }
    
    ngOnInit(){
        this.user = this.usersService.getUsers();
        this.thead = this.usersService.getHeadTable();
    }

}