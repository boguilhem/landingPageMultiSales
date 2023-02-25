export const salesCounter = (vendas) => {
  const element = document.getElementById('salesNumber');

  let salesNumber = vendas;
  let stringNumber;

  stringNumber = salesNumber.toLocaleString();
  element.textContent = stringNumber;
};
