import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {

    private users = [
        { id: 1, name: 'John Doe', type: 'admin' },
        { id: 2, name: 'Jane Doe', type: 'user' },
        { id: 3, name: 'Jim Doe', type: 'user' }
    ];

    getAllUsers() {
        return this.users;
    }

    getUserById(id: number) {
        return this.users.find(user => user.id === id);
    }
}
