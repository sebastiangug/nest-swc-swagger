import { Module } from "@nestjs/common";

import { AuthController } from "./controllers/auth/auth.controller";

@Module({
  imports: [],
  controllers: [AuthController],
})
export class AppModule {}
