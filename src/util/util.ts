export const formartCurrency = (number?:number) =>{
    return (number as number).toLocaleString('vi-VN', {
        style: 'currency',
        currency: 'VND',
      })
}
export const formartRating = (number?:number) =>{
  return (number as number) * 20;
}