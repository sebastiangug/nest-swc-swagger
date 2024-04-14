import { Length } from "class-validator";

/**
 *  Input required for registering
 *  @example {}
 */
export class RegisterInput {
  /**
   * @example abcdefgh
   */
  @Length(1, 128)
  globalBrandId: string;
  @Length(1, 128)
  globalBrandName: string;
}
