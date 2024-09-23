export class CreateUserParams {
    password: string;
    email: string;
} // this DTO is for p
export class UpdateUserParams {
  password: string;
  email: string;
} // this DTO is for p
export class CreateProfileParams {
  dob: string;
  firstName: string;
  lastName: string;
}
export class CreatePost{
  content: string;
}