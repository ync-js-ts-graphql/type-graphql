import { InputType, Field } from "type-graphql";

@InputType()
export class PersonInput {
  @Field()
  firstName: string;

  @Field()
  lastName: string;

  @Field()
  dateOfBirth: Date;
}
