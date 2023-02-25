export const salesCounter = (vendas) => {
  const element = document.getElementById('salesNumber');
  let salesNumber = vendas;
  let stringNumber;

  stringNumber = salesNumber.toLocaleString();

  element.textContent = stringNumber;
};

export const setSalesCount = (vendas) => {
  const element = document.getElementById('salesNumber');
  const start = 1677293467301;
  let stringVenda;

  const millis = Date.now() - start;

  const timePassed = Math.floor(millis / 1000);

  let vendasAtual = Math.floor(vendas + timePassed / 10);

  stringVenda = vendasAtual.toLocaleString();

  element.textContent = stringVenda;

  console.log(vendasAtual);
  return vendasAtual;
};
