export function timer() {
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
            days.textContent = ('0' + t.days).slice(-3);

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
}