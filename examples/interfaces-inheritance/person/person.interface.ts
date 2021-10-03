import { InterfaceType, Field, Int, ID, Arg } from "type-graphql";

import { IResource } from "../resource/resource.interface";

@InterfaceType({
  // workaround for bug: https://github.com/MichalLytek/type-graphql/issues/373
  resolveType: value => value.constructor.name,
})
export abstract class IPerson implements IResource {
  @Field(type => ID)
  id: string;

  @Field()
  firstName: string;

  @Field()
  lastName: string;

  @Field(type => Int)
  age: number;

  @Field()
  fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  @Field()
  avatar(
    @Arg("size") size: number,
    @Arg("format") format: string): string {
    throw new Error("Method not implemented.");
  }
}
