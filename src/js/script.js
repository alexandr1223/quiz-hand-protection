window.addEventListener('DOMContentLoaded', () => {

    jQuery(function($){
        $("#tel").mask("+7(999) 999-9999");
    });

    function optionClick() {
        let selected = null;
        document.querySelectorAll('.content-quiz__block').forEach(item => {
            console.log(item)
            item.addEventListener('click', event => {
                if (event.target.classList.contains('content-quiz__item')) {
                    if (selected) {
                        selected.classList.remove('check')
                    }
                    
                    selected = event.target;
                    
                    selected.classList.add('check');
                }
                if (event.target.classList.contains('content-quiz__item--first')) {
                    document.querySelector('.nextBtnFirst').style.cssText = 'opacity: 1';
                } else if (event.target.classList.contains('content-quiz__item--second')) { 
                    document.querySelector('.nextBtnSecond').style.cssText = 'opacity: 1';
                    document.querySelector('.prevBtnSecond').style.cssText = 'opacity: 1';
                } else if (event.target.classList.contains('content-quiz__item--third')) { 
                    document.querySelector('.nextBtnThird').style.cssText = 'opacity: 1';
                    document.querySelector('.prevBtnThird').style.cssText = 'opacity: 1';
                } else if (event.target.classList.contains('content-quiz__item--fourth')) { 
                    document.querySelector('.nextBtnFourth').style.cssText = 'opacity: 1';
                    document.querySelector('.prevBtnFourth').style.cssText = 'opacity: 1';
                }
            }, false)
        })
    }
    optionClick();

function nextBlock(block, nextBlock, nextBtn) {
    document.querySelector(nextBtn).addEventListener('click', () => {
        document.querySelector(block).style.cssText = "z-index: -100;  opacity: 0; ";
        document.querySelector(nextBlock).style.cssText = "z-index: 2; opacity: 1; ";
    })
}
nextBlock('.content-quiz__first', '.content-quiz__second', '.nextBtnFirst');
nextBlock('.content-quiz__second', '.content-quiz__third', '.nextBtnSecond');
nextBlock('.content-quiz__third', '.content-quiz__fourth', '.nextBtnThird');
nextBlock('.content-quiz__fourth', '.form-send', '.nextBtnFourth');


function prevBlock(block, prevBlock, prevBtn) {
    document.querySelector(prevBtn).addEventListener('click', () => {
        document.querySelector(block).style.cssText = "z-index: -100;  opacity: 0; ";
        document.querySelector(prevBlock).style.cssText = "z-index: 2; opacity: 1; ";
    })
}
prevBlock('.content-quiz__second', '.content-quiz__first', '.prevBtnSecond');
prevBlock('.content-quiz__third', '.content-quiz__second', '.prevBtnThird');
prevBlock('.content-quiz__fourth', '.content-quiz__third', '.prevBtnFourth');

function FormSend() {
    $('.content-quiz__item').on('click', function(event) {
        var all_data = $(this).data();
        for (var key in all_data) {
            var data = all_data[key];
            var key = key;
        }
        console.log(all_data[key])
        if ($('.quiz-form').children('input[name="' + key + '"]').length > 0) {
            $('input[name="' + key + '"]').val($(this).data(key));
        } else {
            $(".quiz-form").append('<input type="hidden" name="' + key + '" value="' + $(this).data(key) + '">');
        }
    });
    // $('.content-quiz__options').on('click', function(event) {
    //     var all_data = $(this).data();
    //     for (var key in all_data) {
    //         var data = all_data[key];
    //         var key = key;
    //     }
    //     if ($('.quiz-form').children('input[name="' + key + '"]').length > 0) {
    //         $('input[name="' + key + '"]').val($(this).data(key));
    //     } else {
    //         $(".quiz-form").append('<input type="hidden" name="' + key + '" value="' + $(this).data(key) + '">');
    //     }
    // });

}
FormSend();
})