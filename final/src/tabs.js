export function tabs(){
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
        
    
    // Decoration Tab

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
}