import { Controller, Get } from '@nestjs/common';

@Controller('user')
export class UserController {
   @Get()
    getAllUsers() {
        return "List of all users"
    }
}

// Get: /user
// Get: /user/:id
// Post: /user
