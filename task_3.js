//Разрешаем вводить только цифры
document.querySelector(".input").addEventListener("keyup", function(){
    this.value = this.value.replace(/[^\d]/g, "");
});


//Получение данных из input
const inputIn = document.querySelector('.input');
// Ищем ноду для вставки результата запроса
const resultNode = document.querySelector('.j-result');
// Ищем кнопку
const btnNode = document.querySelector('button');

btnNode.onclick = function() {
  check()
}

 function check() {
    if (!Number(inputIn.value)) {
      console.log ('Ошибка! Введите число.')
    } else {
      let inputNumber = Number(inputIn.value)
      0 < inputNumber && inputNumber < 11 ? useRequest (inputNumber, displayResult):
      console.log ('Введите число из указанного диапазона!')
    }
  }

//Функция запроса фото
function useRequest(userNumber, callback) {
  var xhr = new XMLHttpRequest();
  const url = 'https://picsum.photos/v2/list/?limit=${userNumber}'
  xhr.open('GET', url, true);

  xhr.onload = function() {
    if (xhr.status != 200) {
      console.log('Статус ответа: ', xhr.status);
    } else {
      const result = JSON.parse(xhr.response);
      if (callback) {
        callback(result);
      }
    }
  };

  xhr.onerror = function() {
    console.log('Ошибка! Статус ответа: ', xhr.status);
  };

  xhr.send();
};

//Создание карточек фото
function displayResult(apiData) {
  let cards = '';
  // console.log('start cards', cards);

  apiData.forEach(item => {
    const cardBlock = `
      <div class="card">
        <img
          src="${item.download_url}"
          class="card-image"
        />
        <p>${item.author}</p>
      </div>
    `;
    cards = cards + cardBlock;
  });

  // console.log('end cards', cards);

  resultNode.innerHTML = cards;
}
