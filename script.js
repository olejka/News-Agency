$(function () {

    $('.offscroll').click(function () {
        $('body').css('overflow', 'hidden');
        $('body').children().css('overflow', 'auto');
    })
    $('.onscroll').click(function () {
        $('body').css('overflow', 'scroll');
        $('body').children().css('overflow', 'scroll');
    })

    $('.request-kurs').click(function () {
        $.get('http://data.fixer.io/api/latest', {
                'access_key': '764e937aaeb5d7f09638460c8977409e'
            },
            function (data) {

                let kurseur = data.rates.RUB
                kursusd = data.rates.RUB / data.rates.USD

                $('.iputforvalute1').append(kursusd.toFixed(2))
                $('.iputforvalute2').append(kurseur.toFixed(2))

            }, 'json');
    })
})



