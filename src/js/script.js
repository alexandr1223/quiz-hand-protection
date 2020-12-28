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
                    document.querySelector('.content-quiz__next').classList.add('nextActive');
                } else if (event.target.classList.contains('content-quiz__item--second')) { 
                    document.querySelector('.content-quiz__next').classList.add('nextActive');
                    document.querySelector('.prevBtnSecond').style.cssText = 'opacity: 1';
                } else if (event.target.classList.contains('content-quiz__item--third')) { 
                    document.querySelector('.content-quiz__next').classList.add('nextActive');
                    document.querySelector('.prevBtnThird').style.cssText = 'opacity: 1';
                } else if (event.target.classList.contains('content-quiz__item--fourth')) { 
                    document.querySelector('.content-quiz__next').classList.add('nextActive');
                    document.querySelector('.prevBtnFourth').style.cssText = 'opacity: 1';
                }
            }, false)
        })
    }
    optionClick();

  

function nextBlock(block, nextBlock, nextBtn) {
    let counter = 0;

    document.querySelector(".content-quiz__next").addEventListener('click', function() {
        console.log(this)
        if (this.classList.contains("nextActive")) {
        
            counter = counter + 1;
            console.log(counter);

            function hide(block) {
                document.querySelector(block).classList.add("blockHide");
                function hideNew() {
                    document.querySelector(block).classList.add("dNone");
                }
                setTimeout(hideNew, 250)
            }
            function show(block) {
                
                function showNew() {
                    document.querySelector(block).classList.add("dBlock");
                    function s() {
                        document.querySelector(block).classList.add("blockShow")
                    }
                    setTimeout(s, 250)
                }
                setTimeout(showNew, 250)
            }
            if (counter == 1) {
                hide(".content-quiz__first");
                setTimeout(hide, 0);
                show(".content-quiz__second");
                document.querySelector(".content-quiz__prev").classList.add('prevActive')
            } else if (counter == 2) {
                hide(".content-quiz__second");
                setTimeout(hide, 0);
                show(".content-quiz__third");
            } else if (counter == 3) {
                hide(".content-quiz__third");
                setTimeout(hide, 0);
                show(".content-quiz__fourth");
            } else if (counter == 4) {
                hide(".content-quiz__fourth");
                setTimeout(hide, 0);
                function nShow() {
                
                    function showNew() {
                        document.querySelector(".form-send").classList.add("dBlock");
                        function s() {
                            document.querySelector(".form-send").classList.add("blockShow")
                        }
                        setTimeout(s, 150)
                    }
                    setTimeout(showNew, 250)
                }
                nShow();
                document.querySelector(".content-quiz__navigation").classList.add("dNoneHigh");
            }

            document.querySelector(".content-quiz__next").classList.remove("nextActive");
        }


        function hide() {
            document.querySelector(block).classList.add("blockHide");
            function hideNew() {
                document.querySelector(block).classList.add("dNone");
            }
            setTimeout(hideNew, 250)
        }
        setTimeout(hide, 0)
        function show() {
            document.querySelector(nextBlock).classList.add("dBlock");
            function showNew() {
                document.querySelector(nextBlock).classList.add("blockShow");
            }
            setTimeout(showNew, 250)
        }
        setTimeout(show, 250)
    })

    document.querySelector(".content-quiz__prev").addEventListener('click', function() {
        console.log(this)
        if (this.classList.contains("prevActive")) {
        
            counter = counter - 1;
            console.log(counter);

            function hide(block) {
                document.querySelector(block).classList.add("blockShow");
                function hideNew() {
                    document.querySelector(block).classList.remove("dBlock");
                }
                setTimeout(hideNew, 250)
            }
            function show(block) {
                
                function showNew() {
                    document.querySelector(block).classList.remove("dNone");
                    function s() {
                        document.querySelector(block).classList.remove("blockHide")
                    }
                    setTimeout(s, 250)
                }
                setTimeout(showNew, 250)
            }
            if (counter == 0) {
                hide(".content-quiz__second");
                setTimeout(hide, 0);
                show(".content-quiz__first");
                document.querySelector(".content-quiz__prev").classList.remove('prevActive')
            } else if (counter == 1) {
                hide(".content-quiz__third");
                setTimeout(hide, 0);
                show(".content-quiz__second");
            } else if (counter == 2) {
                hide(".content-quiz__fourth");
                setTimeout(hide, 0);
                show(".content-quiz__third");
            } else if (counter == 4) {
                hide(".content-quiz__fourth");
                setTimeout(hide, 0);
                function nShow() {
                
                    function showNew() {
                        document.querySelector(".form-send").classList.add("dBlock");
                        function s() {
                            document.querySelector(".form-send").classList.add("blockShow")
                        }
                        setTimeout(s, 150)
                    }
                    setTimeout(showNew, 250)
                }
                nShow();
                document.querySelector(".content-quiz__navigation").classList.add("dNone");
            }

            document.querySelector(".content-quiz__next").classList.remove("nextActive");
        }


        function hide() {
            document.querySelector(block).classList.add("blockHide");
            function hideNew() {
                document.querySelector(block).classList.add("dNone");
            }
            setTimeout(hideNew, 250)
        }
        setTimeout(hide, 0)
        function show() {
            document.querySelector(nextBlock).classList.add("dBlock");
            function showNew() {
                document.querySelector(nextBlock).classList.add("blockShow");
            }
            setTimeout(showNew, 250)
        }
        setTimeout(show, 250)
    })
}
nextBlock();
// nextBlock('.content-quiz__first', '.content-quiz__second', '.content-quiz__next');
// nextBlock('.content-quiz__second', '.content-quiz__third', '.nextBtnSecond');
// nextBlock('.content-quiz__third', '.content-quiz__fourth', '.nextBtnThird');
// nextBlock('.content-quiz__fourth', '.form-send', '.nextBtnFourth');


function prevBlock(block, prevBlock, prevBtn) {
    document.querySelector(prevBtn).addEventListener('click', () => {
        document.querySelector(block).style.cssText = "z-index: -100;  opacity: 0; ";
        document.querySelector(prevBlock).style.cssText = "z-index: 2; opacity: 1; ";
    })
}
prevBlock('.content-quiz__second', '.content-quiz__first', '.prevBtnSecond');
prevBlock('.content-quiz__third', '.content-quiz__second', '.prevBtnThird');
prevBlock('.content-quiz__fourth', '.content-quiz__third', '.prevBtnFourth');


var mh = Math.max.apply(Math, $('.content-quiz').map(function(){  
    return $(this).height();
}).get());
$(".content-quiz").height(mh);

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