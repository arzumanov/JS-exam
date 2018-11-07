export function calc(){
    let popupCalc = document.querySelector('.popup_calc'),
    closeCalc = document.querySelector('.popup_calc_close'),
    btnCalc = document.querySelectorAll('.popup_calc_btn'),
    inputWidth = document.querySelector('#width'),
    inputHeight = document.querySelector('#height');
    
for (let i = 0; i < btnCalc.length; i++) {
    btnCalc[i].addEventListener('click', function(){
        popupCalc.style.display = 'block';
        popupCalc.classList.add('animated');
        popupCalc.classList.add('fadeIn');
    });
}
// popupCalc.addEventListener('click', function(event){
//     if (event.target && event.target.classList.contains('popup_calc')) {
//         popupCalc.style.display = 'none';
//         inputWidth.value = '';
//         inputHeight.value = '';
//     } 
// });
closeCalc.addEventListener('click', function(){
    popupCalc.style.display = 'none';
    inputWidth.value = '';
    inputHeight.value = '';
});

// Tab for balcon
let balconIcons = document.querySelectorAll('.balcon_icons'),
    balconImg = document.querySelectorAll('.balcon_img'),
    balconbigImg = document.querySelectorAll('.balconbig_img');


    function hideCalc(a) {
        for (let i = a; i < balconbigImg.length; i++) {
            balconbigImg[i].classList.remove('showb');
            balconbigImg[i].classList.add('hide');
            balconImg[i].classList.remove('typeform');
            balconImg[i].style.width = '20%';

        }
    }
    hideCalc(1);

    function showCalc(b) {
        if (balconbigImg[b].classList.contains('hide')) {
            balconbigImg[b].classList.remove('hide');
            balconbigImg[b].classList.add('showb');
            balconImg[b].classList.add('typeform');
            balconImg[b].style.width = '30%';
        }
    }

    for (let i = 0; i < balconIcons.length; i++) {
        balconIcons[i].addEventListener('click', function(event){
            if(event.target && event.target.classList.contains('balcon_img')) {
                for(let i = 0; i < balconImg.length; i++) {
                    if(event.target == balconImg[i]) {
                        hideCalc(0);
                        showCalc(i);
                        break;
                    }
                }   
            }
        });
    }
    // Popup calc next
    let popupBtnCalc = document.querySelector('.popup_calc_button'),
        popupCalcProfile = document.querySelector('.popup_calc_profile'),
        popupCalcProfileClose = document.querySelector('.popup_calc_profile_close'),
        popupCheck = document.querySelectorAll('.checkbox'),
        popupCalcBtn = document.querySelector('.popup_calc_profile_button'),
        popupCalcEnd = document.querySelector('.popup_calc_end'),
        popupCaclEndClose = document.querySelector('.popup_calc_end_close');

        // Проверка пустых полей ширины и высоты
        
            popupBtnCalc.addEventListener('click', function () {                
                let typeForm = document.querySelector('.typeform');

                if (inputWidth.value == '' || inputHeight.value == '' || inputWidth.value == 0 || inputHeight.value == 0 || typeForm == null) {
                    alert('Выберите тип и введите ширину и высоту!');
                } else {
                    popupCalc.style.display ='none';
                    popupCalcProfile.style.display ='block';
                }             
            
            }); 
        
       
        // Функция очистки input & check
        let clear = function () {
            inputWidth.value = '';
            inputHeight.value = '';
            popupCheck[0].checked = false;
            popupCheck[1].checked = false;
        }
        // popupCalcProfile.addEventListener('click', function(event){
        //     if(event.target && event.target.classList.contains('popup_calc_profile')){
        //         popupCalcProfile.style.display ='none';
        //         clear();
        //     }
        // });
        popupCalcProfileClose.addEventListener('click', function(){
            popupCalcProfile.style.display ='none';
            clear();
        });
        // Checkbox
        setInterval(function () {
            if (popupCheck[0].checked === false && popupCheck[1].checked === false) {
                popupCalcBtn.setAttribute('disabled', 'true');
            } else {
                popupCalcBtn.removeAttribute('disabled', 'true');
            }

            popupCheck[0].addEventListener('click', function() {
                popupCheck[1].checked = false;
                popupCalcBtn.removeAttribute('disabled', 'true');
            });
            popupCheck[1].addEventListener('click', function() {
                popupCheck[0].checked = false;
                popupCalcBtn.removeAttribute('disabled', 'true');
            });

            popupCalcBtn.addEventListener('click', function(){
                popupCalcProfile.style.display = 'none';
                popupCalcEnd.style.display = 'block';
            });

            popupCaclEndClose.onclick = function(){
                popupCalcEnd.style.display ='none';
            };
        }, 0);
        // popupCalcEnd.addEventListener('click', function(event){
        //     if(event.target && event.target.classList.contains('popup_calc_end')){
        //         popupCalcEnd.style.display ='none';
        //     }
        // });

let popupCalcForm = document.querySelector('#popup_calc_form'),
    popupCalcFormInput = popupCalcForm.getElementsByTagName('input'),
    statusM = document.createElement('div'),
    sum = document.getElementById('sum'),
    selectType = document.getElementById('view_type'),
    formDate = new FormData();

    statusM.classList.add('status');

    let text = {
            loading: 'Идет отправка...',
            success: 'Отправлено!',
            fail: 'Ошибка!'
    };
                
    popupBtnCalc.addEventListener('click', function(){
        let typeForm = document.querySelector('.typeform');
        
        formDate.append('Width: ', inputWidth.value);
        formDate.append('Height: ', inputHeight.value);
        formDate.append('Type: ', typeForm.alt);
    });

    popupCalcBtn.addEventListener('click', function(){

        if(popupCheck[0].checked === true) {
            formDate.append('Glazing: ', 'Cold');
        } else if (popupCheck[1].checked === true) {
            formDate.append('Glazing: ', 'Warm');
        }
        formDate.append('Glazing type: ', selectType.value);
    });

    sum.addEventListener('click', function(){
        formDate.append('Name: ', popupCalcFormInput[0].value);
        formDate.append('Phone:', popupCalcFormInput[1].value);
    });        

    // Send form for calc_end

    function sendForm(el) {
    
        el.addEventListener('submit', function(event){
            event.preventDefault();
                el.appendChild(statusM);
    
                function postData(data) {
                    return new Promise(function(resolve, reject){
                        let request = new XMLHttpRequest();
    
                        request.open('POST', 'server.php');
                        request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    
                        request.onreadystatechange = function(){
                            if (request.readyState < 4) {
                                resolve();
                            } else if(request.readyState === 4) {
                                if(request.status == 200 && request.status < 300) {
                                    resolve();
                                }
                                else {
                                    reject();
                                }
                            }
                        };
    
                        let obj = {};
                        formDate.forEach(function(value, key){
                            obj[key] = value;
                        });
                        let json = JSON.stringify(obj);
                        request.send(json);
    
                    });
                }
    
                postData(formDate)
                    .then(() => statusM.innerHTML = text.loading)
                    .then(() => statusM.innerHTML = text.success)
                    .catch(() => statusM.innerHTML = text.failure)
                    .then(() => {
                        for (let i = 0; i < popupCalcFormInput.length; i++) {
                            popupCalcFormInput[i].value = '';
                        }
                    });
            });
    
    }

    sendForm(popupCalcForm);

}