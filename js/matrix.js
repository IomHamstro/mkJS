//Тег <canvas> предоставляет ограниченную область для рисования в ней.
//    В нашем примере мы будем рисовать 2D объекты.
//    При инициализации тег пуст и для рисования нам необходимо получить доступ к обрабатываемому контексту.
var c = document.getElementById("c"); // получаем наш элемент канвас
var ctx = c.getContext("2d");

//делаем на весь экран
c.height = window.innerHeight;
c.width = window.innerWidth;

var symbols = "10 10 011 010 101010 1001 010 10 1010 10 10 10 1010  10 1010 10 ";
//конвертируем строку в массив
symbols = symbols.split("");

var font_size = 10; // здесь мы задаем размер наших символов
var columns = c.width/font_size; //количество колонок для дождя

var drops = []; //массив капель. по одному на каждую колонку
//x below is the x coordinate
//1 = y координата капли(то же самое для каждой капли изначально)
for(var x = 0; x < columns; x++)
drops[x] = 0;

//изображаем символы
function draw()
    {
        //черный background для канвас
        ctx.fillStyle = "rgba(0, 0, 0, 0.05)"; // Определяет цвет заливки.
        ctx.fillRect(0, 0, c.width, c.height); //Заливает прямоугольную область цветом, определенный свойством fillStyle.

        ctx.fillStyle = "#0F0"; //зеленый текст
        ctx.font = font_size + "px arial";
        //цикл для каплей
        for(var i = 0; i < drops.length; i++)
        {
        //рандомный символ на печать
        var text = symbols[Math.floor(Math.random()*symbols.length)];
//        x = i*font_size, y = value of drops[i]*font_size
        ctx.fillText(text, i*font_size, drops[i]*font_size); //Рисуем текст залитый цветом, определенным fillStyle.

        //sending the drop back to the top randomly after it has crossed the screen
        //adding a randomness to the reset to make the drops scattered on the Y axis
        //отправка капли наверх случайно после того, как она пересекла экран
        if(drops[i]*font_size > c.height && Math.random() > 0.975)
        drops[i] = 0;

        //incrementing Y coordinate
        drops[i]++;
        }
        }

setInterval(draw, 50); //функция для отложенного запуска кода постоянно с заданной периодичностью
