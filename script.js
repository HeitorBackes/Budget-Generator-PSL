function calcDiscount(quarto, desconto) {
  let result = quarto - quarto * (desconto / 100);
  return result;
}

function calcSgl(numDaily, discountRate) {
  let priceSgl = `*Quarto Individual*<br>
  Sem ar: R$ ${Math.round(
    calcDiscount(valSgl, discountRate)
  )}. Valor total: R$ ${
    Math.round(calcDiscount(valSgl, discountRate)) * numDaily
  }<br>
  Com ar: R$ ${Math.round(
    calcDiscount(valSglAr, discountRate)
  )}. Valor total: R$ ${
    Math.round(calcDiscount(valSglAr, discountRate)) * numDaily
  }<br><br>`;
  return priceSgl;
}

function calcTwn(numGuests, numDaily, discountRate) {
  if (numGuests === 1) {
    let priceTwn = `*Quarto Duplo Solteiro*<br>
  Sem ar: R$ ${Math.round(
    calcDiscount(valTwn1Pax, discountRate)
  )}. Valor total: R$ ${
      Math.round(calcDiscount(valTwn1Pax, discountRate)) * numDaily
    }<br>
  Com ar: R$ ${Math.round(
    calcDiscount(valTwnAr1Pax, discountRate)
  )}. Valor total: R$ ${
      Math.round(calcDiscount(valTwnAr1Pax, discountRate)) * numDaily
    }<br><br>`;
    return priceTwn;
  } else if (numGuests === 2) {
    let priceTwn = `*Quarto Duplo Solteiro*<br>
Sem ar: R$ ${Math.round(
      calcDiscount(valTwn2Pax, discountRate)
    )}. Valor total: R$ ${
      Math.round(calcDiscount(valTwn2Pax, discountRate)) * numDaily
    }<br>
Com ar: R$ ${Math.round(
      calcDiscount(valTwnAr2Pax, discountRate)
    )}. Valor total: R$ ${
      Math.round(calcDiscount(valTwnAr2Pax, discountRate)) * numDaily
    }<br><br>`;
    return priceTwn;
  } else {
  }
}

function calcDbl(numGuests, numDaily, discountRate) {
  if (numGuests === 1) {
    let priceDbl = `*Quarto Duplo Casal*<br>
Sem ar: R$ ${Math.round(
      calcDiscount(valDbl1Pax, discountRate)
    )}. Valor total: R$ ${
      Math.round(calcDiscount(valDbl1Pax, discountRate)) * numDaily
    }<br>
Com ar: R$ ${Math.round(
      calcDiscount(valDblAr1Pax, discountRate)
    )}. Valor total: R$ ${
      Math.round(calcDiscount(valDblAr1Pax, discountRate)) * numDaily
    }<br><br>`;
    return priceDbl;
  } else if (numGuests === 2) {
    let priceDbl = `*Quarto Duplo Casal*<br>
Sem ar: R$ ${Math.round(
      calcDiscount(valDbl2Pax, discountRate)
    )}. Valor total: R$ ${
      Math.round(calcDiscount(valDbl2Pax, discountRate)) * numDaily
    }<br>
Com ar: R$ ${Math.round(
      calcDiscount(valDblAr2Pax, discountRate)
    )}. Valor total: R$ ${
      Math.round(calcDiscount(valDblAr2Pax, discountRate)) * numDaily
    }<br><br>`;
    return priceDbl;
  } else {
  }
}

function calcTpl(numGuests, numDaily, discountRate) {
  if (numGuests === 2) {
    let priceTpl = `*Quarto Triplo*<br>
Sem ar: R$ ${Math.round(
      calcDiscount(valTpl2Pax, discountRate)
    )}. Valor total: R$ ${
      Math.round(calcDiscount(valTpl2Pax, discountRate)) * numDaily
    }<br><br>`;
    return priceTpl;
  } else if (numGuests === 3) {
    let priceTpl = `*Quarto Triplo*<br>
Sem ar: R$ ${Math.round(
      calcDiscount(valTpl3Pax, discountRate)
    )}. Valor total: R$ ${
      Math.round(calcDiscount(valTpl3Pax, discountRate)) * numDaily
    }<br><br>`;
    return priceTpl;
  } else {
  }
}

function calcQuad(numGuests, numDaily, discountRate) {
  if (numGuests === 3) {
    let priceQuad = `*Quarto Quadruplo*<br>
Sem ar: R$ ${Math.round(
      calcDiscount(valQuad3Pax, discountRate)
    )}. Valor total: R$ ${
      Math.round(calcDiscount(valQuad3Pax, discountRate)) * numDaily
    }<br><br>`;
    return priceQuad;
  } else if (numGuests === 4) {
    let priceQuad = `*Quarto Quadruplo*<br>
Sem ar: R$ ${Math.round(
      calcDiscount(valQuad4Pax, discountRate)
    )}. Valor total: R$ ${
      Math.round(calcDiscount(valQuad4Pax, discountRate)) * numDaily
    }<br><br>`;
    return priceQuad;
  } else {
  }
}

function calcQuint(numGuests, numDaily, discountRate) {
  if (numGuests === 3) {
    let priceQuint = `*Quarto Quintuplo*<br>
Sem ar: R$ ${Math.round(
      calcDiscount(valQuint3Pax, discountRate)
    )}. Valor total: R$ ${
      Math.round(calcDiscount(valQuint3Pax, discountRate)) * numDaily
    }<br><br>`;
    return priceQuint;
  } else if (numGuests === 4) {
    let priceQuint = `*Quarto Quintuplo*<br>
Sem ar: R$ ${Math.round(
      calcDiscount(valQuint4Pax, discountRate)
    )}. Valor total: R$ ${
      Math.round(calcDiscount(valQuint4Pax, discountRate)) * numDaily
    }<br><br>`;
    return priceQuint;
  } else if (numGuests === 5) {
    let priceQuint = `*Quarto Quintuplo*<br>
Sem ar: R$ ${Math.round(
      calcDiscount(valQuint5Pax, discountRate)
    )}. Valor total: R$ ${
      Math.round(calcDiscount(valQuint5Pax, discountRate)) * numDaily
    }<br><br>`;
    return priceQuint;
  } else {
  }
}

function writeDiscount(discountRate) {
  if (discountRate > 0) {
    let discountText = `Valores com ${discountRate}% de desconto.<br><br>`;
    return discountText;
  } else {
    let discountText = ``;
    return discountText;
  }
}

function getPrice(numGuests, numDaily, discountRate) {
  if (numGuests === 1) {
    let price = `${calcSgl(numDaily, discountRate)}

    ${calcTwn(numGuests, numDaily, discountRate)}

    ${calcDbl(numGuests, numDaily, discountRate)}`;
    return price;
  } else if (numGuests === 2) {
    let price = `${calcTwn(numGuests, numDaily, discountRate)}

    ${calcDbl(numGuests, numDaily, discountRate)}

    ${calcTpl(numGuests, numDaily, discountRate)}`;
    return price;
  } else if (numGuests === 3) {
    let price = `${calcTpl(numGuests, numDaily, discountRate)}

    ${calcQuad(numGuests, numDaily, discountRate)}

    ${calcQuint(numGuests, numDaily, discountRate)}`;
    return price;
  } else if (numGuests === 4) {
    let price = `${calcQuad(numGuests, numDaily, discountRate)}
    
    ${calcQuint(numGuests, numDaily, discountRate)}`;
    return price;
  } else if (numGuests === 5) {
    let price = `${calcQuint(numGuests, numDaily, discountRate)}`;
    return price;
  } else {
    let price = "Não temos quartos para mais de 5 pessoas.";
    return price;
  }
}

function fixDate(date) {
  date = new Date(
    date.getUTCFullYear(),
    date.getUTCMonth(),
    date.getUTCDate(),
    date.getUTCHours(),
    date.getUTCMinutes(),
    date.getUTCSeconds(),
    date.getUTCMilliseconds()
  );
  return date.toLocaleDateString();
}

function copy(copyId) {
  let inputElement = document.createElement("input");
  inputElement.type = "text";
  let copyText = document.getElementById(copyId).innerHTML;
  copyText = copyText.replaceAll("<br><br>", "");
  copyText = copyText.replaceAll("<br>", "");
  navigator.clipboard.writeText(copyText);
  alert("Orçamento copiado");
}

let submit = document.getElementById("submit");
let output = document.getElementById("output");

let valSgl = 169;
let valSglAr = 209;
let valTwn2Pax = 234;
let valTwnAr2Pax = 274;
let valTwn1Pax = 189;
let valTwnAr1Pax = 229;
let valDbl2Pax = 265;
let valDblAr2Pax = 305;
let valDbl1Pax = 200;
let valDblAr1Pax = 240;
let valTpl3Pax = 328;
let valTpl2Pax = 254;
let valQuad4Pax = 424;
let valQuad3Pax = 328;
let valQuad2Pax = 254;
let valQuint5Pax = 498;
let valQuint4Pax = 424;
let valQuint3Pax = 328;

submit.addEventListener("click", () => {
  // create a date object from input value
  let data1 = new Date(document.getElementById("data-1").value);
  let data2 = new Date(document.getElementById("data-2").value);
  let numGuests = parseInt(document.getElementById("qntPessoas").value);
  let discountRate = parseInt(document.getElementById("discount-rate").value);

  dataCheckIn = fixDate(data1);
  dataCheckOut = fixDate(data2);

  if (data1.getTime() && data2.getTime()) {
    let timeDifference = data2.getTime() - data1.getTime();
    let numDaily = Math.abs(timeDifference / (1000 * 60 * 60 * 24));

    console.log(numDaily);
    output.innerHTML = `Data do Check-In: ${dataCheckIn}<br>
Data do Check-Out: ${dataCheckOut}<br>
${numDaily} diárias para ${numGuests} pessoas<br><br>
${writeDiscount(discountRate)}
${getPrice(numGuests, numDaily, discountRate)}

Está incluso na diária: Café da manhã, serviço de limpeza, WiFi e estacionamento.<br><br>

Entrada no apto antes das 14:00 será cobrada meia diária. Saída do apto após as 11:30 será cobrada meia diária. Após as 18:00 será cobrado uma diária inteira.<br><br>

O pagamento pode ser feito no cartão de crédito ou débito, em dinheiro ou por PIX.<br><br>

Pousada São Lourenço<br>
reservas@pousadasaolourenco.com.br<br>
Telefone e Whatsapp: +55 51 3223 2800<br>
Paulino Chaves, 291 – Porto Alegre – RS<br>
pousadasaolourenco.com.br`;
  } else {
    output.innerHTML = "Selecione uma data válida";
  }
});
