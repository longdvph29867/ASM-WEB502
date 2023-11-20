export const formartCurrency = (number?:number) =>{
  return number?.toLocaleString('vi-VN', {
      style: 'currency',
      currency: 'VND',
    })
}
export const formartRating = (number?:number) =>{
  return (number as number) * 20;
}


export const showSpinner = () => {
  const spinnerElement = document.getElementById('spinner');
  if(spinnerElement) {
    spinnerElement.style.display = 'flex';
  }
}
export const hiddenSpinner = () => {
  const spinnerElement = document.getElementById('spinner');

  if(spinnerElement) {
    spinnerElement.style.display = 'none';
  }
}