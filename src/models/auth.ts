export interface AuthLogin{
    token: string
    expiration:Date
}

export interface RegisterFormData {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
  };


  export interface LoginFormData {
    email: string
    password: string
  };