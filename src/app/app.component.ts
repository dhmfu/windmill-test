import { Component } from '@angular/core';

import { UserService } from './services/user.service';

import { User } from './models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    get userBalance(): number {
        return this.userService.getBalance();
    }

    constructor(public userService: UserService) {}

}
