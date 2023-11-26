type FormSignUpData = {
    account: string;
    password: string;
    fullName: string;
    email: string;
    rePassword?: string;
};
type ObjString = {[key: string]: string}

type FormSignInData = Pick<FormSignUpData, 'email' | 'password'>;

