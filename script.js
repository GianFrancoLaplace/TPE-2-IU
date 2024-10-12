window.addEventListener('load', function(){

    new Glider(document.querySelector('.carousel-fila-xxl'),{
        slidesToShow: 2,
        slidesToScroll: 2,
        dots: '.carousel-indicador',
        arrows: {
          prev: '.carousel-btn-anterior-xxl',
          next: '.carousel-btn-siguiente-xxl'
        },
        responsive: [
            {
              // ventanas >= 800px
              breakpoint: 800,
              settings: {
                slidesToShow: '3',
                slidesToScroll: '3',
              }
            },{
              // ventanas >= 1024px
              breakpoint: 1024,
              settings: {
                slidesToShow: 6,
                slidesToScroll: 6,
              }
            }
        ]
    });
    //normal-1
    new Glider(document.querySelector('.carousel-fila-n1'),{
        slidesToShow: 2,
        slidesToScroll: 2,
        dots: '.carousel-indicador-n1',
        arrows: {
          prev: '.carousel-btn-anterior-n1',
          next: '.carousel-btn-siguiente-n1'
        },
        responsive: [
            {
              // ventanas >= 800px
              breakpoint: 800,
              settings: {
                slidesToShow: '4',
                slidesToScroll: '4',
              }
            },{
              // ventanas >= 1024px
              breakpoint: 1024,
              settings: {
                slidesToShow: 8,
                slidesToScroll: 8,
              }
            }
        ]
    });
    //normal-2
    new Glider(document.querySelector('.carousel-fila-n2'),{
        slidesToShow: 2,
        slidesToScroll: 2,
        dots: '.carousel-indicador-n2',
        arrows: {
          prev: '.carousel-btn-anterior-n2',
          next: '.carousel-btn-siguiente-n2'
        },
        responsive: [
            {
              // ventanas >= 800px
              breakpoint: 800,
              settings: {
                slidesToShow: '4',
                slidesToScroll: '4',
              }
            },{
              // ventanas >= 1024px
              breakpoint: 1024,
              settings: {
                slidesToShow: 8,
                slidesToScroll: 8,
              }
            }
        ]
    });

    //xl
    new Glider(document.querySelector('.carousel-fila-xl'),{
        slidesToShow: 2,
        slidesToScroll: 2,
        dots: '.carousel-indicador-xl',
        arrows: {
          prev: '.carousel-btn-anterior-xl',
          next: '.carousel-btn-siguiente-xl'
        },
        responsive: [
            {
              // ventanas >= 800px
              breakpoint: 800,
              settings: {
                slidesToShow: '5',
                slidesToScroll: '5',
              }
            },{
              // ventanas >= 1024px
              breakpoint: 1024,
              settings: {
                slidesToShow: 7,
                slidesToScroll: 7,
              }
            }
        ]
    });

})
