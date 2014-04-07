(function($) {
    //Начать написание своего плагина нужно с объявления jQuery.fn объекта,
    $.fn.bestplugin = function(options) {

        var options = $.extend({  //Объявление настроек по умолчанию, которые можно переопределить в вызове плагина
                timeOut: 2000,
                animateTime: 1000,
                opacity: 0.5
    },
    options);
    return $(this).each(function() { //return is used to continue a chain of calls of the given object
        //Этот участок кода отвечает за определение параметров плагина,
        //    заданные здесь настройки будут задействованы по умолчанию,
        //    если только они не переопределены в функции вызова плагина.
        var container = $(this),
        slides = $(this).children(),
        id,
        slidesLength = slides.length;
        container.css('position', 'relative');
        slides.each(function() {
            $(this).hide().css({
                    'opacity': options.opacity,
            'position': 'absolute',
            'left': 0,
            'top': 0
        });
    });
      //  Тут описана сама функция показа слайдшоу, с применением функции анимации,
      //      когда изображение будет пропадать и появляться. После каждого показа картинки id увеличивается на 1,
      // с тем чтобы осуществлялся переход на показ следующего слайда. Также идет проверка:
      // if (id == slidesLength) { id = 0 }; Если мы добрались до последнего слайда,
      // то чтобы не обрывать показ, а цикл возобновлялся начиная с первого слайда, переменной id присваивается значение 0.
    var Show = function() {
            id = id || 0;
            var currentSlide = slides.eq(id);
            console.log(currentSlide);
            currentSlide.show().animate({
                    opacity: '1'
        },
    options.animateTime,
    function() {
        setTimeout(function() {
                currentSlide.animate({
                        opacity: options.opacity
            },
        options.animateTime,
        function() {
            currentSlide.hide();
            id++;
            if (id == slidesLength) {
                id = 0
            }
            Show();
        });
    },
    options.timeOut);
});
}
Show();
});
};
})(jQuery);/**
 * Created by Ольга on 07.04.2014.
 */
