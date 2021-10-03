import { ObjectType, Field, Arg } from "type-graphql";

import { IPerson } from "./person.interface";

@ObjectType({ implements: IPerson })
export class Person implements IPerson {
  id: string;
  firstName: string;
  lastName: string;
  fullName: () => string;
  age: number;

  @Field()
  avatar(
    @Arg("size") size: number,
    @Arg("format") format: string): string {
    return `http://i.pravatar.cc/${size}.${format}`;
  }
}
