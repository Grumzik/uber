"use strict";
document.addEventListener('DOMContentLoaded', ()=>{
  var burger = document.querySelector('.burger');
  var menu = document.querySelector('.menu');
  var menuItems = document.querySelectorAll('.menu_item');


  burger.addEventListener('click',()=>{
    menu.classList.toggle('menu_active');
    burger.classList.toggle('burger_active');
  });

  menuItems.forEach(item =>{
    item.addEventListener('click', ()=>{
      menu.classList.remove('menu_active');
      burger.classList.remove('burger_active');
    })
  })
})

