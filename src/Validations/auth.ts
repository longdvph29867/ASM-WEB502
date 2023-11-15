const required = (value: string): string => {
  if (value.trim().length === 0) {
    return '*Vui lòng nhập trường này!';
  }
  return '';
}
const validLength = (value: string, min: number, max: number): string => {
  const {length} = value.trim()
  if(length < min || length > max) {
    return `*Trường này phải ${min} đến ${max} ký tự!`;
  }
  return '';
}

const validPhoneNumber = (value: string): string => {
  // Implement email validation logic
  const regexPhoneNumber = /(84|0[3|5|7|8|9])+([0-9]{8})\b/g;
  if(!regexPhoneNumber.test(value.trim())) {
    return `*Số điện thoại không hợp lệ!`!
  }
  return '';
};

export const validateFormSignUp = (data: FormSignUpData): ObjString | null => {
  const {account, phoneNumber, fullName, password, rePassword} = data
  const errors: ObjString = {};

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

  console.log("🚀 ~ file: auth.ts:65 ~ validateFormSignUp ~ errors:", errors)
  return Object.keys(errors).length > 0 ? errors : null;
}


