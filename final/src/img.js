export function img(){
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
}