import { Body, Controller, Headers, Post } from "@nestjs/common";
import { RegisterInput } from "../../entities/inputs/register.input";
import { RegisterResponse } from "../../entities/responses/register.response";
import { AcquireTokensInput } from "../../entities/inputs/acquire-tokens.input";
import { TokensResponse } from "../../entities/responses/tokens.response";

@Controller("auth")
export class AuthController {
  /**
   * registers a new client
   */
  @Post("register")
  public async register(
    @Body()
    input: RegisterInput,
    @Headers("Authorization") authorization: string,
  ): Promise<RegisterResponse> {
    console.log(input);
    console.log(authorization);

    return { key: "potato", keyId: "potato" };
  }

  /** signs the user in */
  @Post("acquire-tokens")
  public async login(
    @Body()
    input: AcquireTokensInput,
  ): Promise<TokensResponse> {
    console.log(input);
    return { accessToken: "potato", refreshToken: "potato" };
  }
}
