
//764e937aaeb5d7f09638460c8977409e
// $(function () {
//     $('.request-kurs').click(function () {

//         //VALIDE
//         $.get('http://data.fixer.io/api/latest' , 
//             {'access_key': '764e937aaeb5d7f09638460c8977409e' & 'from': 'RUB' },
//             function (response) {
//                 console.log(response);
//                 // $('.iputforvalute').text(response);
//             });

//     });
// });

// $(document).ready(function () {
//     function scrollon() {

//     }
//     $('.scr')
// });

// $(function() {
//     $('.request-kurs').click(function () {
//         $.get('http://data.fixer.io/api/latest?access_key=764e937aaeb5d7f09638460c8977409e', 
//         function(data){
//             $('.iputforvalute1').html('usd:'+data.base.RUB,data.rates.USD);
//         })
//     })
// })

$(function () {
    $('.request-kurs').click(function () {
        $.get('http://data.fixer.io/api/latest', {
                'access_key': '764e937aaeb5d7f09638460c8977409e'
            },
            function (data) {

                let kurseur = data.rates.RUB
                    kursusd = data.rates.RUB / data.rates.USD

                $('.iputforvalute1').append(kursusd)
                $('.iputforvalute2').append(kurseur)

            }, 'json');
    })
})