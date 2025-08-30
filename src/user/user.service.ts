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
       const user = this.users.find(user => user.id === id);
       return user;
    }

    createUser(name: string, type: string) {
        const newUser = {
            id: this.users.length + 1,
            name,
            type
        };
        this.users.push(newUser);
        return newUser;
    }
}
