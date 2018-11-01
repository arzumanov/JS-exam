window.addEventListener('DOMContentLoaded', function(){
    'use strict';
    // Modal
    let popupBtn = document.querySelector('.popup_engineer_btn'),
        popupEngineer = document.querySelector('.popup_engineer'),
        closeEngineer = document.querySelectorAll('.popup_close')[1];
        
    popupBtn.addEventListener('click', function(){
        popupEngineer.style.display = 'block';
        popupEngineer.classList.add('animated');
        popupEngineer.classList.add('fadeIn');  
        
    });

    popupEngineer.addEventListener('click', function(){
        popupEngineer.style.display = 'none';
    });

    closeEngineer.addEventListener('click', function(){
        popupEngineer.style.display = 'none';
    });

    // Modal2 
    let phoneLink = document.querySelectorAll('.phone_link'),
        popup = document.querySelector('.popup'),
        closePopup = document.querySelectorAll('.popup_close')[0];

        for (let i = 0; i < phoneLink.length; i++) {
            phoneLink[i].addEventListener('click', function(){
                popup.style.display = 'block';
                popup.classList.add('animated');
                popup.classList.add('fadeIn');
            });
        }

        popup.addEventListener('click', function(){
            popup.style.display = 'none';
        });
        closePopup.addEventListener('click', function(){
            popup.style.display = 'none';
        });

    // Form

    let message = {
        loading: 'Идет отправка',
        success: 'Отправлено',
        fail: 'Ошибка'
    };

    let form = document.querySelectorAll('.form')[0],
        input = form.getElementsByTagName('input'),
        statusMessage = document.createElement('div');
        
        statusMessage.classList.add('status');
    
    form.addEventListener('submit', function(event){
        event.preventDefault();
        form.appendChild(statusMessage);

        let request = new XMLHttpRequest();
            request.open('POST', 'server.php');
            request.setRequestHeader ('Content-Type', 'application/json; charset=utf-8');

        let formData = new FormData(form);

        let obj = {};
        formData.forEach(function(value, key){
            obj[key] = value;
        });

        let json = JSON.stringify(obj);
        
        request.send(json);

        request.addEventListener('readystatechange', function(){
            if(request.readyState < 4) {
                statusMessage.innerHTML = message.loading;
            }else if (request.readyState == 4 && request.status == 200) {
                statusMessage.innerHTML = message.success;
            }else {
                statusMessage.innerHTML = message.fail;
            }
        });
        
        for (let i = 0; i < input.length; i++){
            input[i].value = '';
        }        
    });
    input[1].addEventListener('keypress', function(event) {
        if(!/\d/.test(event.key)){
            event.preventDefault();
        } 
    });
});
    
    
    