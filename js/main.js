$(document).ready(function () {
    $('.main-btn a,.best-btn a,.comments-btn a').click(function () {
        $('html, body').animate({scrollTop: $('.tovar-section').offset().top}, 500);
        return false;
    });
    $('.ollia2').click(function () {
        $('html, body').animate({scrollTop: $('.quality-section').offset().top}, 500);
        return false;
    });
    $('.ollia3').click(function () {
        $('html, body').animate({scrollTop: $('.comments-section').offset().top}, 500);
        return false;
    });
    $('.ollia4').click(function () {
        $('html, body').animate({scrollTop: $('.advantages-section').offset().top}, 500);
        return false;
    });
    $(".tel").keypress(function (e) {
        var phone = $(this).val();
        var value_str5 = phone.substr(0, 5);
        if (value_str5 == '+7(89') {
            $(this).val('+7(9');
        }
    });
    $('.buttons22').click(function () {
        var nomer = $(this).attr('nomer');
        var phone = $('#lv-formLanding' + nomer + ' .tel').val();
        var phone_length = phone.length;
        var value_str4 = phone.substr(0, 4);
        var value_str5 = phone.substr(0, 5);
        var error = [0];
        if (phone_length != 16) {
            $('#lv-formLanding' + nomer + ' .tel').css({'border': '1px solid red', 'color': 'red'});
            error.push(1);
        } else {
        }
        if (value_str4 == '+7(8' || value_str4 == '+7(1' || value_str4 == '+7(2' || value_str4 == '+7(3' || value_str4 == '+7(5' || value_str4 == '+7(6' || value_str4 == '+7(0' || value_str4 == '+7(7') {
            $('#lv-formLanding' + nomer + ' .tel').css({'border': '1px solid red', 'color': 'red'});
            error.push(1);
        } else {
        }
        if (value_str5 == '+7(89') {
            $('#lv-formLanding' + nomer + ' .tel').css({'border': '1px solid red', 'color': 'red'});
            $('#lv-formLanding' + nomer + ' .tel').val('+7(9');
            error.push(1);
        } else {
        }
        if (phone == '+7(495)112-02-02') {
            $('#lv-formLanding' + nomer + ' .tel').css({'border': '1px solid red', 'color': 'red'});
            error.push(1);
        } else {
        }

        function charst(string, symbol) {
            var count = 0;
            for (var i = 0; i < string.length; i++) {
                if (string.charAt(i) == symbol) {
                    count++;
                }
            }
            return count;
        }

        var count1 = charst(phone, "1");
        var count2 = charst(phone, "2");
        var count3 = charst(phone, "3");
        var count4 = charst(phone, "4");
        var count5 = charst(phone, "5");
        var count6 = charst(phone, "6");
        var count7 = charst(phone, "7");
        var count8 = charst(phone, "8");
        var count9 = charst(phone, "9");
        var count0 = charst(phone, "0");
        if (parseInt(count1) > 5 || parseInt(count1) > 5 || parseInt(count2) > 5 || parseInt(count3) > 5 || parseInt(count4) > 5 || parseInt(count5) > 5 || parseInt(count6) > 5 || parseInt(count7) > 5 || parseInt(count8) > 5 || parseInt(count9) > 5 || parseInt(count0) > 5) {
            $('#lv-formLanding' + nomer + ' .tel').css({'border': '1px solid red', 'color': 'red'});
            error.push(1);
        } else {
        }
        var err = 0;
        for (i in error) {
            if (error[i] == 1) {
                err = 1;
            }
        }
        if (err == 0) {
        } else {
            return false;
        }
    });
    $('.tovar_item').hover(function () {
        $(this).addClass('tovar_hover');
    }, function () {
        $(this).removeClass('tovar_hover');
    });
    $('.popup-close, .allfon_').click(function () {
        $('.popup-wrapper, .allfon').attr('style', 'display:none;');
    });
    $('.back-catalog-xs').click(function () {
        $('.popup-wrapper,.allfon').css('display', 'none');
    })
    $(window).scroll(function () {
        var topp = $(this).scrollTop();
        if (topp >= 66) {
            $('.cartpopolz_doin').addClass('fixedcart');
        } else {
            $('.cartpopolz_doin').removeClass('fixedcart');
        }
    })
    $('body').on('click', '.cartminiitem .up', function () {
        $qnobj = $(this).prev('a').prev('input');
        var id = parseInt($(this).attr('id_product'));
        var q = parseInt($qnobj.val());
        $qnobj.text(q + 1);
        $.post("/ajax.php", {id: id, q: q + 1, action: 'edit'}, function onAjaxSuccess(data) {
            $('.cartblokosn').html(data);
        })
        return false;
    });
    $('body').on('click', '.cartminiitem .down', function () {
        $qnobj = $(this).prev('input');
        var id = parseInt($(this).attr('id_product'));
        var q = parseInt($qnobj.val());
        if (q > 1) {
            $qnobj.text(q - 1);
            $.post("/ajax.php", {id: id, q: q - 1, action: 'edit'}, function onAjaxSuccess(data) {
                $('.cartblokosn').html(data);
            })
        } else {
            $.post("/ajax.php", {id: id, action: 'delete'}, function onAjaxSuccess(data) {
                $('.cartblokosn').html(data);
            })
        }
        return false;
    });
    $('.incart.add').click(function () {
        var id = parseInt($(this).attr('id_product'));
        var q = 1;
        $.post("/ajax.php", {id: id, q: q, action: 'add'}, function onAjaxSuccess(data) {
            $('.item' + id + ' .add').text("в корзине");
            $('.cartblokosn').html(data);
        })
        return false;
    });
    $('.popzakbtnbig').click(function () {
        var id = parseInt($(this).attr('id_product'));
        var q = 1;
        $.post("/ajax.php", {id: id, q: q, action: 'add'}, function onAjaxSuccess(data) {
            $('.popzakbtnbig').text("Добавлен в корзину");
            $('.cartblokosn').html(data);
            setTimeout(function () {
                $('.popzakbtnbig').text("добавить в корзину и продолжить покупки");
                $('.popup-wrapper, .allfon').removeClass('is-visible');
            }, 1000)
        })
        return false;
    });
    $('.cartblock').on('click', '.cartbasket .up', function () {
        $qnobj = $(this).prev('input');
        var id = parseInt($(this).attr('id_product'));
        var q = parseInt($qnobj.val());
        $qnobj.text(q + 1);
        $.post("/ajax_cart.php", {id: id, q: q + 1, action: 'edit'}, function onAjaxSuccess(data) {
            $('.cartblock').html(data);
        })
        return false;
    });
    $('.cartblock').on('click', '.cartbasket .down', function () {
        $qnobj = $(this).next('input');
        var id = parseInt($(this).attr('id_product'));
        var q = parseInt($qnobj.val());
        if (q > 1) {
            $qnobj.text(q - 1);
            $.post("/ajax_cart.php", {id: id, q: q - 1, action: 'edit'}, function onAjaxSuccess(data) {
                $('.cartblock').html(data);
            })
        } else {
            $.post("/ajax_cart.php", {id: id, action: 'delete'}, function onAjaxSuccess(data) {
                $('.cartblock').html(data);
            })
        }
        return false;
    });
    $('.popzakbtn').click(function () {
        var phone = $('#popform .phone').val();
        if (phone == '') {
            $('#popform .phone').addClass('inp-error');
        } else {
            $('#popform .phone').removeClass('inp-error');
            $('#popform').submit();
        }
        return false;
    });
    setTimeout(function () {
        cc();

        function cc() {
            var counter = 28;
            var interval = setInterval(function () {
                counter = counter - 1;
                $('.akckor span').text(counter);
                if (counter == 3) {
                    clearInterval(interval);
                }
            }, 4000);
        }
    }, 4000);
    $('.popup-close').on('click', function () {
        $('.popup-wrapper').toggleClass(' hidden');
    });
});


$(document).ready(function () {
    $('.slider_prods').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });
});

/* timer */
function update() {
    var Now = new Date(), Finish = new Date();
    Finish.setHours( 23);
    Finish.setMinutes( 59);
    Finish.setSeconds( 59);
    if( Now.getHours() === 23  &&  Now.getMinutes() === 59  &&  Now.getSeconds === 59) {
        Finish.setDate( Finish.getDate() + 1);
    }
    var sec = Math.floor( ( Finish.getTime() - Now.getTime()) / 1000);
    var hrs = Math.floor( sec / 3600);
    sec -= hrs * 3600;
    var min = Math.floor( sec / 60);
    sec -= min * 60;
    $(".timer .hours").text( pad(hrs));
    $(".timer .minutes").text( pad(min));
    $(".timer .seconds").text( pad(sec));
    setTimeout( update, 200);
}
function pad(s) { return ('00'+s).substr(-2) }
update();

/*scroll*/
$(function(){
        $("a[href^='#']").click(function(){
                var _href = $(this).attr("href");
                $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
                return false;
        });
});


$('.btn.btn-orange.bzak').on('click', function (){
    let art = $(this).attr('art');
    $('input[name=comment]').val("Артикул: "+art);
});

$(document).ready(function () {

    date = Date.today().addDays(-7);
    date_2 = Date.today();

    date = date.toString('dd.MM.yyyy');
    date_2 = date_2.toString('dd.MM.yyyy');


    $('.date_1').html(date);
    $('.date_2').html(date_2);
});