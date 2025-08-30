import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
   @Get()
    getAllUsers() {
        const users  = new UserService().getAllUsers();
        return users;
    }

    getUserById(id: number) {
        const user = new UserService().getUserById(id);
        return user;
    }
}

// Get: /user
// Get: /user/:id
// Post: /user
