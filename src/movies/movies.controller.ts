import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Query } from '@nestjs/common';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { Movie } from './entities/movie.entity';
import { MoviesService } from './movies.service';

@Controller('movies')
export class MoviesController {

    constructor(private readonly moviesService: MoviesService) {}

    @Get()
    getAll(): Movie[] {
        return this.moviesService.getAll();
    }
    
    @Get('search')
    search(@Query('year') searchingYear:string) {
        return `we are searching for a movie made after ${searchingYear}`;
    }

    @Get(':id')
    getOne(@Param('id') movieId: string): Movie{
        return this.moviesService.getOne(movieId);
    }

    @Post()
    create(@Body() movieData: CreateMovieDto){
        console.log(typeof movieData);
        return this.moviesService.createOne(movieData);
    }

    @Delete(':id')
    remove(@Param('id') movieId:string){
        return this.moviesService.deleteOne(movieId);
    }

    @Patch(':id') 
    path(@Param('id') movieId:string, @Body() updateData: UpdateMovieDto) {
        return this.moviesService.update(movieId, updateData);
    }

}