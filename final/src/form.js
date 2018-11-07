export function form() {
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
}