import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    private user = {
        balance: 10000
    }

    constructor() { }

    getUser() {
        return {...this.user};
    }
}
