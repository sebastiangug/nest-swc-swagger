import { Length } from "class-validator";

export class AcquireTokensInput {
  @Length(1, 128)
  keyId: string;

  @Length(12, 512)
  key: string;
}
