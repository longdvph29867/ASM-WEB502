export const required = (value: string): string => {
  if (value.trim().length === 0) {
    return '*Vui lòng nhập trường này!';
  }
  return '';
}
export  const validLength = (value: string, min: number, max: number): string => {
  const {length} = value.trim()
  if(length < min || length > max) {
    return `*Trường này phải ${min} đến ${max} ký tự!`;
  }
  return '';
}
  
export  const validPhoneNumber = (value: string): string => {
  const regexPhoneNumber = /(84|0[3|5|7|8|9])+([0-9]{8})\b/g;
  if(!regexPhoneNumber.test(value.trim())) {
    return `*Số điện thoại không hợp lệ!`!
  }
  return '';
};
