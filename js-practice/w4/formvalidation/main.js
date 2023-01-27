const id = (id) => document.getElementById(id);
const btn = id('btn');
btn.addEventListener('click', (e) => {
  e.preventDefault();
  const cardNo = id('cardNo');
  const cvv = id('cvv');
  const cardNumber = id('cardNumber');
  const cvvHelp = id('cvvHelp');
  const cardNumberHelp = id('cardNumberHelp');
  let cvv_reg = /^[0-9]{3}$/;
  let dateReg = /^(0[1-9]|1[0-9]|2[0-9]|3[0-1])[\/](0[1-9]|1[0-2])$/;
  const date = id('date');
  let cardNameReg = /^[A-Za-z]{3,20}[\s]{1}[A-Za-z]{3,20}$/;
  let cardNumberReg = /^[0-9]{4}[-]{1}[0-9]{4}[-]{1}[0-9]{4}[-]{1}[0-9]{4}$/;
  //card Number validation
  if (cardNo.value === '' || cardNameReg.test(cardNo.value) === false) {
    const cardHelp = id('cardHelp');
    cardHelp.classList.remove('d-none');
    cardNo.classList.add('is-invalid');
  } else {
    cardNo.classList.remove('is-invalid');
    cardHelp.classList.add('d-none');
    cardNo.classList.add('is-valid');
  }
  //cvv validation
  if (cvv.value === '' || cvv_reg.test(cvv.value) == false) {
    cvvHelp.classList.remove('d-none');
    cvv.classList.add('is-invalid');
  } else {
    cvv.classList.remove('is-invalid');
    cvvHelp.classList.add('d-none');
    cvv.classList.add('is-valid');
  }
  if (
    cardNumber.value === '' ||
    cardNumberReg.test(cardNumber.value) == false
  ) {
    cardNumberHelp.classList.remove('d-none');
    cardNumber.classList.add('is-invalid');
  } else {
    cardNumber.classList.remove('is-invalid');
    cardNumberHelp.classList.add('d-none');
    cardNumber.classList.add('is-valid');
  }
  console.log(dateReg.test(date.value));
  // date validation
  if (date.value === '' || dateReg.test(date.value) == false) {
    dateHelp.classList.remove('d-none');
    date.classList.add('is-invalid');
  } else {
    date.classList.remove('is-invalid');
    dateHelp.classList.add('d-none');
    date.classList.add('is-valid');
  }
});
