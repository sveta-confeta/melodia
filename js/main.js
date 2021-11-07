$(document).ready(function () {    //  jqDoc + TAB=разворачивает конструкцию
    let currentFloor=2;//переменная где хранится текущий этаж
    let floorPath= $(".home-image path"); //каждый отдельный этаж в svg
    let counterUp=$('.counter-up'); //кнопка вверх
    let counterDown=$('.counter-down'); //кнопка вниз
    let modal=$('.modal');
    let modalCloseButton=$('.modal-close-button');
    let viewFlatsButton=$('.view-flats');
    let flatsPath= $(".flats path");//каждая отдельная квартира на этаже
    let flatList= $(".flat-list");//родитель списка с квартирами
    let flateItem= $(".flat-item");//ребенок квартира список
    
  

    //функция при наведении мышкой на этаж
    floorPath.on('mouseover',function(){ //mouseover=при наведении мыши
        floorPath.removeClass('current-floor');//удаляем класс активный у этажей(очищаем прошлое событие)
       currentFloor=$(this).attr('data-floor');//получаем текущее значение у этажа
       $('.counter').text(currentFloor);//записываем значение этажа в счетчик справа
    });


    floorPath.on('click',function(){
      modal.toggleClass('is-open');
    });

    modalCloseButton.on('click',function(){
      modal.toggleClass('is-open');
    });

    viewFlatsButton.on('click',function(){
      modal.toggleClass('is-open');
    });

  counterUp.on('click',function(){ //привязываем событие к кнопке вверх
if(currentFloor<18){
    currentFloor++;
 usCurrentFloor=currentFloor.toLocaleString('en-US',{minimumIntegerDigits: 2,
useGrouping:false});//форматируем переменную с этажем,чтобы было 01 а не 1

$('.counter').text(usCurrentFloor);//записываем значение этажа в счетчик справа

floorPath.removeClass('current-floor');//удаляем класс активный у этажей
$(`[data-floor=${usCurrentFloor}]`).toggleClass('current-floor'); //чтоб при клике на кнопки подсвечивались этажи-номер которых мы выбираем
}
  });
  counterDown.on('click',function(){ //привязываем событие к кнопке вниз
    if(currentFloor>2){
        currentFloor--;
     usCurrentFloor=currentFloor.toLocaleString('en-US',{minimumIntegerDigits: 2,
    useGrouping:false});
    
    $('.counter').text(usCurrentFloor);
    
    floorPath.removeClass('current-floor');
    $(`[data-floor=${usCurrentFloor}]`).toggleClass('current-floor'); //чтоб при клике на кнопки подсвечивались этажи-номер которых мы выбираем
    }
      })
});    

let flatsPath = document.querySelectorAll(".flats path"); //каждая отдельная квартира на этаже
let flateItem = document.querySelectorAll(".flat-item"); //ребенок квартира список

// функция наведения на квартиры
flatsPath.forEach((image, index) => {
  image.addEventListener('mouseover', () => {
    flateItem[index].classList.add("active-hover");
  });

  image.addEventListener('mouseleave', () => {
    flateItem[index].classList.remove("active-hover");
  });
});



//функция при наведении на список

flateItem.forEach((item, index) => {
  item.addEventListener("mouseover", () => {
    flatsPath[index].classList.add("list-hover");
  });

  item.addEventListener("mouseleave", () => {
    flatsPath[index].classList.remove("list-hover");
  });
});
   

//мобильное меню:
const menuElem = document.querySelector('.navbar_nav');
const hamburgerElem = document.querySelector('.humburger-menu');

const toggleMenu = () => {
    menuElem.classList.toggle('menu-active') ;// класс active прописан в css но его нет в html. мы его этой функцией будем добавлять
    hamburgerElem.classList.toggle('humburger-menu-active');
};

hamburgerElem.addEventListener('click', toggleMenu);

//проблема что меню само не закрывается, когда кликаешь по списку и куда то перемещаешься