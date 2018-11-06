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

    let forms = document.querySelectorAll('.form'),
        statusMessage = document.createElement('div'),
        phoneInputs = document.querySelectorAll('input[type="tel"]'),
        message = {
            loading: 'Идет отправка...',
            success: 'Отправлено!',
            failure: 'Ошибка!'
        };

        for (let i = 0; i < phoneInputs.length; i++) {
            mask(phoneInputs[i]);
        }
        function mask(input) {
            input.addEventListener('input', function() {
                input.value = input.value.replace(/[^0-9]/ig, '');
            });
        }

        forms.forEach(function (form) {
            form.addEventListener('submit', function(event) {
                event.preventDefault();
                let input = form.querySelectorAll('input');
                form.appendChild(statusMessage);
                let formData = new FormData(form);

            function postData(data) {
                return new Promise(function(resolve, reject){
                let request = new XMLHttpRequest();

                    request.open("POST", "server.php");
                    request.setRequestHeader("Content-Type", "application/json; charset=utf-8");

                    request.onreadystatechange = function () {
                        if (request.readyState < 4) {
                            resolve();
                        } else if (request.readyState === 4) {
                            if (request.status == 200 && request.status < 300) {
                                resolve();
                        }
                        } else {
                            reject();
                        }
                    };
                    request.send(data);
                });
            }
            function clearInput() {
                for (let i = 0; i < input.length; i++) {
                    input[i].value = "";
                }
                setTimeout(function() {
                    statusMessage.innerHTML = "";
                }, 10000);
            }

            postData(formData)
                .then(() => (statusMessage.innerHTML = message.loading))
                .then(() => (statusMessage.innerHTML = message.success))
                .catch(() => (statusMessage.innerHTML = message.failure))
                .then(clearInput);
            });
        });


    // Glazing Tab
    let glazingBlock = document.querySelectorAll(".glazing_block"),
        glazingTab = document.querySelectorAll(".glazing_tab"),
        glazingImg = document.querySelectorAll(".glazing_block > img"),
        glazingContent = document.querySelectorAll(".glazing_content");

    function hideTabContent(a) {
        for (let i = a; i < glazingContent.length; i++) {
            glazingTab[i].classList.remove("active");
            glazingContent[i].classList.remove("show");
            glazingContent[i].classList.add("hide");
        }
    }
    hideTabContent(1);

    function showTabContent(b) {
        glazingTab[b].classList.add("active");
        glazingContent[b].classList.add("show");
        glazingContent[b].classList.remove("hide");
    }

    glazingBlock.forEach(function(item, index) {
        item.addEventListener("click", function(event) {
            for (let i = 0; i < glazingBlock.length; i++) {
                if (event.target && event.target == glazingTab[i] || event.target == glazingBlock[i] || event.target == glazingImg[i]) {
                    hideTabContent(0);
                    showTabContent(index);
                    break;
                }
            }
        });
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
                    
                    if (inputWidth.value == '' || inputHeight.value == '' || inputWidth.value == 0 || inputHeight.value == 0) {
                        alert('Введите ширину и высоту!');
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
        });

        sum.addEventListener('click', function(){
            formDate.append('Name: ', popupCalcFormInput[0].value);
            formDate.append('Phone:', popupCalcFormInput[1].value);
        });

        selectType.addEventListener('change', function(){
            formDate.append('Glazing type: ', this.options[this.selectedIndex].innerHTML);
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

    
    // Delay popup 
    setTimeout (function (){
        popup.style.display = 'block';
    }, 60000);

    // Timer

    let deadline = '2019-11-07';

    function getTimeRemaining(endtime){
        let newestData = new Date().getTimezoneOffset(),
            t = Date.parse(endtime) - Date.parse(new Date()) + (newestData * 60000),
            seconds = Math.floor((t/1000)%60),
            minutes = Math.floor((t/1000/60)%60),
            hours = Math.floor((t/(1000*60*60) % 24)),
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
            days.textContent = ('0' + t.days).slice(-2);

            if(t.total <= 0) {
                clearInterval(timeInterval);
                days.innerHTML = '00';
                hours.innerHTML = '00';
                minutes.innerHTML = '00';
                seconds.innerHTML = '00';
            }
        }
    }
    setClock('timer', deadline);

    // Images zoom
    let overlayImg = document.createElement('div'),
        bigImg = document.createElement('img'),
        minImg = document.querySelectorAll('.ourworks_min_img');

        overlayImg.classList.add('overlay_img');
        bigImg.classList.add('big_img');
        document.body.appendChild(overlayImg);
        overlayImg.appendChild(bigImg);


        minImg.forEach(function(item){
            item.addEventListener('click', function(event){
                event.preventDefault();
                overlayImg.style.display = 'flex';
                bigImg.src = this.href;     
            });
        });
        overlayImg.addEventListener('click', function (event) {
            if(event.target && event.target.classList.contains('overlay_img')){
                overlayImg.style.display = 'none';
            }
        });
});

   

