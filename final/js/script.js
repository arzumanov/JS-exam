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
    popupEngineer.addEventListener('click', function(event){
        if (event.target && event.target.classList.contains('popup_engineer')) {
            popupEngineer.style.display = 'none';
        } 
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

    popup.addEventListener('click', function(event){
        if (event.target && event.target.classList.contains('popup')) {
            popup.style.display = 'none';
        } 
    });
    closePopup.addEventListener('click', function(){
        popup.style.display = 'none';
    });

    
    // Form

    let message = {
        loading: 'Идет отправка...',
        success: 'Отправлено!',
        fail: 'Ошибка!'
    };

    let form = document.querySelectorAll('.form'),
    statusMessage = document.createElement('div'),
    phoneInputs = document.querySelectorAll('input[type="tel"]');

  
    for (let i = 0; i < phoneInputs.length; i++) {
        mask(phoneInputs[i]);
    }
    function mask(input) {
    input.addEventListener('input', function() {
        input.value = input.value.replace(/[^0-9+() ]/ig, '');
        });
    }

    for (let i = 0; i < form.length; i++) {
    sendForm(form[i]);
    }

    function sendForm(elem) {
    elem.addEventListener('submit', function (event) {
        event.preventDefault();
        elem.appendChild(statusMessage);
        let inputs = elem.getElementsByTagName('input');
        elem.appendChild(statusMessage);
        let formData = new FormData(elem);

        function postData(data) {
        return new Promise(function (resolve, reject) {
            let request = new XMLHttpRequest();
            request.open("POST", '../server.php');
            request.setRequestHeader('Content-type', 'application/json; charset=utf-8');

            let obj = {};
            formData.forEach(function(value, key) {
                obj[key] = value;
            });
            let json = JSON.stringify(obj);

            request.onreadystatechange = function () {
                if (request.readyState < 4) {
                    resolve();
                } else if (request.readyState === 4 && request.status == 200) {
                    if (request.status == 200 && request.status < 300) {
                    resolve();
                    } else {
                    reject();
                    }
                }
            };

            request.send(json);
        });
        } 


        function clearInput() {
            for (let i = 0; i < inputs.length; i++) {
                inputs[i].value = '';
            }
        }

        postData(formData)
        .then(() => statusMessage.innerHtml = message.loading)
        .then(() => statusMessage.innerHTML = message.success)
        .catch(() => statusMessage.innerHTML = message.fail)
        .then(clearInput);
    });
    }


    // Tab
    let glazingTab = document.querySelectorAll('.glazing_tab'),
        glazingBlock = document.querySelector('.glazing_slider'),
        glazingContent = document.querySelectorAll('.glazing_content');

    function hideContent(a) {
        for (let i = a; i < glazingContent.length; i++) {
            glazingContent[i].classList.remove('show');
            glazingContent[i].classList.add('hide');
            glazingTab[i].classList.remove('active');
        }
    }
    hideContent(1);

    function showContent(b) {
        if (glazingContent[b].classList.contains('hide')) {
            glazingContent[b].classList.remove('hide');
            glazingContent[b].classList.add('show');
            glazingTab[b].classList.add('active');
        }
    }

    glazingBlock.addEventListener('click', function(event){
        let target = event.target;
        if (target && target.classList.contains('glazing_tab')){
            for (let i = 0; i < glazingTab.length; i++) {
                if (target == glazingTab[i]) {
                    hideContent(0);
                    showContent(i);                    
                    break;
                }
            }
        }
    });
    // Tab 2

    let decorationTab = document.querySelectorAll('.decoration_link'),
        decorationItem = document.querySelectorAll('.decor_decor'),
        decorationSlider = document.querySelector('.decoration_slider'),
        decorationContent = document.querySelectorAll('.decoration_cont');

        function hideDecoration(a) {
            for (let i = a; i < decorationContent.length; i++) {
                decorationContent[i].classList.remove('show');
                decorationContent[i].classList.add('hide');
                decorationItem[i].classList.remove('after_click');
            }
        }
        hideDecoration(1);
    
        function showDecoration(b) {
            if (decorationContent[b].classList.contains('hide')) {
                decorationContent[b].classList.remove('hide');
                decorationContent[b].classList.add('show');
                decorationItem[b].classList.add('after_click');
            }
        }

        decorationSlider.addEventListener('click', function(event){
                let target = event.target;
                if (target && target.classList.contains('decor_decor')){
                    for (let i = 0; i < decorationItem.length; i++) {
                        if (target == decorationItem[i]) {
                            hideDecoration(0);
                            showDecoration(i);                        
                            break;
                        }
                    }
                }
            });   

        decorationSlider.addEventListener('click', function(event){
            let target = event.target;
            if (target && target.classList.contains('decoration_link')){
                for (let i = 0; i < decorationTab.length; i++) {
                    if (target == decorationTab[i]) {
                        hideDecoration(0);
                        showDecoration(i);                        
                        break;
                    }
                }
            }
        });

    // Popup calc
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
        balconbigImg = document.querySelectorAll('.balconbig_img')


        function hideCalc(a) {
            for (let i = a; i < balconbigImg.length; i++) {
                balconbigImg[i].classList.remove('showb');
                balconbigImg[i].classList.add('hide');
            }
        }
        hideCalc(1);
    
        function showCalc(b) {
            if (balconbigImg[b].classList.contains('hide')) {
                balconbigImg[b].classList.remove('hide');
                balconbigImg[b].classList.add('showb');
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

            popupBtnCalc.addEventListener('click', function(){
                popupCalc.style.display ='none';
                popupCalcProfile.style.display ='block';
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
        formData = new FormData();

        statusM.classList.add('status');

        let text = {
                loading: 'Идет отправка...',
                success: 'Отправлено!',
                fail: 'Ошибка!'
        };
                    
        popupBtnCalc.addEventListener('click', function(){
            formData.append('Ширина: ', inputWidth.value);
            formData.append('Высота: ', inputHeight.value);
        });

        popupCalcBtn.addEventListener('click', function(){
            if(popupCheck[0].checked === true) {
                formData.append('Остекление - ', 'Холодное');
            } else if (popupCheck[1].checked === true) {
                formData.append('Остекление - ', 'Теплое');
            }
        });

        sum.addEventListener('click', function(){
            formData.append("Имя ", popupCalcFormInput[0].value);
            formData.append("Телефон ", popupCalcFormInput[1].value);
        });

        selectType.addEventListener('change', function(){
            formData.append("Тип остекления ", this.options[this.selectedIndex].innerHTML);
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
                            formData.forEach(function(value, key){
                                obj[key] = value;
                            });
                            let json = JSON.stringify(obj);
                            request.send(json);
        
                        });
                    }
        
                    postData(formData)
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

    
    // Delay popup 
    setTimeout (function (){
        popup.style.display = 'block';
    }, 60000);

    // Timer

    let deadline = '2019-07-04';

    function getTimeRemaining(endtime){
        let t = Date.parse(endtime) - Date.parse(new Date()),
            seconds = Math.floor((t/1000)%60),
            minutes = Math.floor((t/1000/60)%60),
            hours = Math.floor((t/(1000*60*60))),
            // hours = Math.floor((t/(1000/60/60) % 24));
            days = Math.floor(t/(1000*60*60*24));

            return {
                'total': t,
                'hours': hours,
                'minutes': minutes,
                'seconds': seconds,
                'days': days
            };
    }

    function setClock (id, endtime) {
        let hours = document.querySelector('.hours'),
            minutes = document.querySelector('.minutes'),
            seconds = document.querySelector('.seconds'),
            days = document.querySelector('.days'),
            timeInterval = setInterval(updateClock, 1000);

        function updateClock() {
            let t = getTimeRemaining(endtime);
            hours.textContent = ('0' + t.hours).slice(-2);
            minutes.textContent = ('0' + t.minutes).slice(-2);
            seconds.textContent = ('0' + t.seconds).slice(-2);
            days.textContent = t.days;

            if(t.total <= 0) {
                clearInterval(timeInterval);
            }
        }
    }
    setClock('timer', deadline);
});

   

