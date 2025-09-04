import { Injectable } from '@nestjs/common';
import { UserDto } from './user.dto';

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
       if(!user) {
        throw new Error('User not found!!');
       }
       return user;
    }

    createUser(user: UserDto) {
        const newUser = {
            id: this.users.length + 1,
            ...user
        };
        this.users.push(newUser);
        return newUser;
    }
}
