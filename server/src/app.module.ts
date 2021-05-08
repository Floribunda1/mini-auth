import { Module } from '@nestjs/common';

import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';

import OAuthConfig from './config/oauth.config';

@Module({
  imports: [
    AuthModule,
    ConfigModule.forRoot({
      load: [OAuthConfig],
      isGlobal: true,
    }),
  ],
})
export class AppModule {}
