// export const scrollTo = (id) => {
//   const element = document.getElementById(id);
//   element.scrollIntoView({ behavior: 'smooth', block: 'end' });
// };

// export const scrollTo = () => {
//   const element = document.getElementById('textid');
//   const initialNumber = 1200;
//   let salesNumber = initialNumber;
//   salesNumber++;

//   element.textContent = salesNumber.toString();
// };

export const updateSales = (vendas) => {
  const element = document.getElementById('salesNumber');

  let salesNumber = vendas;
  // salesNumber++;
  let stringNumber;

  stringNumber = salesNumber.toLocaleString();
  element.textContent = stringNumber;
  // let timeleft = 10;
  // const downloadTimer = setInterval(function () {
  //   // if (timeleft <= 0) {
  //   //   salesNumber++;
  //   // }
  //   // timeleft -= 1;
  // }, 1000);
};
