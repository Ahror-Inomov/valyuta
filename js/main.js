let elForm = document.querySelector(`.form`);
let elInput = document.querySelector(`.form__input`);
let elSelect = document.querySelector(`.form__list`);
let elText = document.querySelector(`.result`);

elForm.addEventListener(`submit`, function(evt) {
   evt.preventDefault();
   let elInp = +elInput.value;
   let elSelct = +elSelect.value;
   let elResult = elInp / elSelct;

   if(elSelct == 12250) {
      elText.textContent = `Siz AQSH kursini tanladingiz. Sizning kiritgan summangiz $` + elResult.toFixed(2);
   } else if (elSelct == 13000) {
      elText.textContent = `Siz Yevropa kursini tanladingiz. Sizning kiritgan summangiz €` + elResult.toFixed(2);
   } else if (elSelct == 127) {
      elText.textContent = `Siz Rossiya kursini tanladingiz. Sizning kiritgan summangiz ₽` + elResult.toFixed(2);
   }
});