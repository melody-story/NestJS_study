import { Controller, Get } from '@nestjs/common';

@Controller('')
export class AppController {
    @Get() 
    home() {
        return `Hello Welcome to Melody's Movie API`;
    }


}
