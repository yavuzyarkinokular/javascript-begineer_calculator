let numverOne = prompt("1 nci numarayı giriniz: ");
let numberTwo = prompt("2 nci numarayı giriniz: ");

let counter = 0;
while (counter < 100) {
  let selectCondition = prompt(
    "Toplama için 1 'i çıkarma için 2 'yi çarpma için 3 'ü bölme için 4 'ü tuşlayınız çıkmak için 5 'i tuşlayınız: "
  );
  if (selectCondition == 1) {
    alert("İşlem Sonucunuz: " + " " + (Number(numverOne) + Number(numberTwo)));
    break;
  } else if (selectCondition == 2) {
    alert("İşlem Sonucunuz: " + " " + (Number(numverOne) - Number(numberTwo)));
    break;
  } else if (selectCondition == 3) {
    alert("İşlem Sonucunuz: " + " " + Number(numverOne) * Number(numberTwo));
    break;
  } else if (selectCondition == 4) {
    let calculateResult = Number(numverOne) / Number(numberTwo);
    if (calculateResult < 1) {
      alert("Sonuç 1 den küçük olduğu için işlem sonlandırıldı.");
      break;
    } else {
      alert("İşlem Sonucunuz: " + " " + calculateResult);
      break;
    }
  } else if (selectCondition == 5) {
    alert("Görüşmek üzere...");
    break;
  } else {
    console.warn("Yanlış bir tuşlama yaptınız. Tekrar deneyiniz.");
    break;
  }
  counter++;
}
