import { required, validLength, validPhoneNumber } from "./validation";


export const validateFormSignUp = (data: FormSignUpData): Partial<FormSignUpData> => {
  const {account, phoneNumber, fullName, password, rePassword} = data
  const errors: Partial<FormSignUpData> = {};

  if (required(account)) {
    errors.account = required(account);
  }
  else if(validLength(account, 6, 25)) {
    errors.account = validLength(account, 6, 25);
  }

  if (required(phoneNumber)) {
    errors.phoneNumber = required(phoneNumber);
  }
  else if(validPhoneNumber(phoneNumber)) {
    errors.phoneNumber = validPhoneNumber(password);
  }

  if (required(fullName)) {
    errors.fullName = required(fullName);
  }
  else if(validLength(fullName, 6, 25)) {
    errors.fullName = validLength(fullName, 6, 25);
  }


  if (required(password)) {
    errors.password = required(password);
  }
  else if(validLength(password, 6, 25)) {
    errors.password = validLength(password, 6, 25);
  }

  if (required(rePassword)) {
    errors.rePassword = required(rePassword);
  }
  else if(password !== rePassword) {
    errors.rePassword = '*Mật khẩu không khớp!'
  }

  return errors;
}

export const validateFormSignIn = (data: FormSignInData): Partial<FormSignInData>=> {
  const {account, password} = data
  const errors: Partial<FormSignInData> = {};

  if (required(account)) {
    errors.account = required(account);
  }

  if (required(password)) {
    errors.password = required(password);
  }

  return errors;
}


