import { Float, Query, Resolver, Int, Args } from '@nestjs/graphql';

@Resolver()
export class HelloWorldResolver {

  @Query(() => String, { description: 'hola mundo retorna', name: 'Hello' })
  helloWorld(): string {
    return 'Hola mundo';
  }

  @Query(() => Float, { name: 'randomNumber' })
  getRandomNumber(): number {
    return Math.random() * 100;
  }

  @Query(() => Int, { name: 'randomFromZeroTo', description: 'From zero to argumento (default 6)' })
  getRandomFromZeroTo(@Args('to', { nullable:true, type: () => Int }) to: number = 6): number {
    return Math.floor(Math.random() * to) + 1;
  }

}
