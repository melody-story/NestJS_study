import { Module } from '@nestjs/common';
import { MoviesModule } from './movies/movies.module';
import { AppController } from './app.controller';

//앱을 만들 때 모듈로 분리하면 좋다. 기존에 있던 MovieService와 MovieController를 따로 movies.module.ts를 생성하여, 넣어주었다.
@Module({
  imports: [MoviesModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
