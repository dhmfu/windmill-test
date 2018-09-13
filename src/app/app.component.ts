import { Component, OnInit } from '@angular/core';

import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    user: {
        balance: number
    };

    constructor(public userService: UserService) {}

    ngOnInit() {
        this.user = this.userService.getUser();
    }
}
