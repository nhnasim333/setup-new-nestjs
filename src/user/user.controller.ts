import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { UserDto } from './user.dto';

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

    @Post()
    createUser(@Body() user: UserDto) {
        const newUser = this.userService.createUser(user);
        return newUser;
    }
}

// Get: /user
// Get: /user/:id
// Post: /user
