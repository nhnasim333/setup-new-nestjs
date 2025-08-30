import { Controller, Get, Param } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {

    constructor(private readonly userService: UserService) {}

   @Get()
    getAllUsers() {
        const users  = this.userService.getAllUsers();
        return users;
    }

    @Get(':id')
    getUserById(@Param('id') id: number) {
        const user = this.userService.getUserById(+id);
        return user;
    }
}

// Get: /user
// Get: /user/:id
// Post: /user
