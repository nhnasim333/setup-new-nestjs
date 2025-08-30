import { Body, Controller, Get, Param, Post } from '@nestjs/common';
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

    @Post()
    createUser(@Body() createUserDto: { name: string; type: string }) {
        const user = this.userService.createUser(createUserDto.name, createUserDto.type);
        return user;
    }
}

// Get: /user
// Get: /user/:id
// Post: /user
