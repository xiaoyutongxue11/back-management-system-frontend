export namespace Login {
  export interface LoginParams {
    account: string;
    password: string;
  }
  export interface RegisterParams extends LoginParams {
    rePassword: string;
  }
  export interface ForgetParams extends RegisterParams {
    email: string;
  }
}
