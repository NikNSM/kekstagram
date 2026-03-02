//Функция проверки строки на паллидром

const checkStringPalidrom = (string) => {
  let stringReverse = '';
  const firstString = string.toLowerCase().replaceAll(' ', '')
  for(let i = 1; i <= firstString.length; i++) {
    stringReverse = stringReverse + firstString.at(length - i);
  }

  return  stringReverse === firstString;
}

// Функция извлечение числа из строки.

const extractNumber = (data) => {
  let result = '';

  if(typeof(data) === "number"){
    if(data < 0 ){
      return -data;
    }
    return data;
  }

  for(let i = 0; i < data.length; i++){
    let messageSimbolIsNumbaer= parseInt(data.at(i))
    if(isNaN(messageSimbolIsNumbaer)){
      continue;
    }
    result = result + messageSimbolIsNumbaer;
  }
  return parseInt(result)
}

// Функция для заполнения строки задданными символами;

const fillOutText = (firstText, length, simbols) => {
  if(firstText.length >= length){
    return firstText;
  }

  let lastText = firstText;

  while(lastText.length < length){
    let differenceLength = length - lastText.length;
     if(simbols.length > differenceLength){
      lastText = simbols.slice(0, differenceLength) + lastText;
      continue;
     }
    lastText = simbols + lastText;
  }
  return lastText;
}

// Функция провекрки длинны строки

const checkLengthText = (text, length) => text.length <= length ? true : false;
