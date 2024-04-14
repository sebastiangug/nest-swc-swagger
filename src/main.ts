import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { SwaggerModule, DocumentBuilder } from "@nestjs/swagger";
import metadata from "./metadata";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // OpenAPI Swagger docs
  await SwaggerModule.loadPluginMetadata(metadata);
  const config = new DocumentBuilder()
    .setTitle("REST API")
    .setDescription("Description")
    .setVersion("1.0")
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup("docs", app, document);

  await app.listen(3000);
}
bootstrap();
