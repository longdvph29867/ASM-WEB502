import { required, validLength } from "./validation";

export const validateProduct = (data: FormProductData)=> {
    const {name, price, desc, images, gender, id_category} = data
    const errors: ValidProduct = {};
  
    if (required(name)) {
      errors.name = required(name);
    }
    else if(validLength(name, 3, 255)) {
      errors.name = validLength(name, 3, 253);
    }
  
    if (required(String(price))) {
      errors.price = required(String(price));
    }
    else if(isNaN(Number(price))) {
      errors.price = '*Trường này phải là số!';
    }
    else if(Number(price) <= 0) {
      errors.price = '*Giá phải lớn hơn 0!';
    }

    if (required(desc)) {
      errors.desc = required(desc);
    }
    else if(validLength(desc, 3, 255)) {
      errors.desc = validLength(desc, 63, 253);
    }

    if (required(images)) {
      errors.images = required(images);
    }
    else if(validLength(images, 3, 255)) {
      errors.images = validLength(images, 63, 253);
    }

    if (required(gender)) {
      errors.gender = required(gender);
    }

    if (required(id_category)) {
      errors.id_category = required(id_category);
    }
  
    return errors;
  }