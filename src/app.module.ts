import { join } from 'path';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql'
import { ApolloDriver, ApolloDriverConfig} from '@nestjs/apollo'
import { HelloWorldModule } from './hello-world/hello-world.module';
// import { ApolloServerPluginLandingPageDisabled } from 'apollo-server-core'

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      // playground: false,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      plugins:[
        // ApolloServerPluginLandingPageDisabled
      ]
    }),
    HelloWorldModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
