const input = document.querySelector('input[name="userName"]');

const userLastName = document.querySelector('.userLastname');
const userName = document.querySelector('.userName');
const userSurtName = document.querySelector('.userSurname');

input.addEventListener('change', outputUserName);
function  outputUserName(){
  //Избавляемся от лишних пробелов в начале и конце строки //Приводим всю сторку к нижнему регистру// Делим строку и преобразуем в массив
  let userDataArr =  input.value.trim().toLowerCase().split(" ");
  if (userDataArr.length === 3){
    for (let i = 0; i < userDataArr.length; i++){
    
      let lastName = userDataArr[0];
      let name = userDataArr[1];
      let SurName = userDataArr[2];
      
  
      userLastName.textContent = 'Фамилия: ' + lastName[0].toUpperCase() + lastName.slice(1);
      userName.textContent = 'Имя: ' + name[0].toUpperCase() + name.slice(1);
      userSurtName.textContent = 'Отчество: ' + SurName[0].toUpperCase() + SurName.slice(1); 
    }

  } else {
    alert("Вы ввели не все данные");

  }

  // Выводим элементы массив через цикла
  
}
//  ПуПкин бОрис вЕНиаМиновиЧ   