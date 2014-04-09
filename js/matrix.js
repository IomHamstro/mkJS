//��� <canvas> ������������� ������������ ������� ��� ��������� � ���.
//    � ����� ������� �� ����� �������� 2D �������.
//    ��� ������������� ��� ���� � ��� ��������� ��� ���������� �������� ������ � ��������������� ���������.
var c = document.getElementById("c"); // �������� ��� ������� ������
var ctx = c.getContext("2d");

//������ �� ���� �����
c.height = window.innerHeight;
c.width = window.innerWidth;

var symbols = "10 10 011 010 101010 1001 010 10 1010 10 10 10 1010  10 1010 10 ";
//������������ ������ � ������
symbols = symbols.split("");

var font_size = 10; // ����� �� ������ ������ ����� ��������
var columns = c.width/font_size; //���������� ������� ��� �����

var drops = []; //������ ������. �� ������ �� ������ �������
//x below is the x coordinate
//1 = y ���������� �����(�� �� ����� ��� ������ ����� ����������)
for(var x = 0; x < columns; x++)
drops[x] = 0;

//���������� �������
function draw()
    {
        //������ background ��� ������
        ctx.fillStyle = "rgba(0, 0, 0, 0.05)"; // ���������� ���� �������.
        ctx.fillRect(0, 0, c.width, c.height); //�������� ������������� ������� ������, ������������ ��������� fillStyle.

        ctx.fillStyle = "#0F0"; //������� �����
        ctx.font = font_size + "px arial";
        //���� ��� ������
        for(var i = 0; i < drops.length; i++)
        {
        //��������� ������ �� ������
        var text = symbols[Math.floor(Math.random()*symbols.length)];
//        x = i*font_size, y = value of drops[i]*font_size
        ctx.fillText(text, i*font_size, drops[i]*font_size); //������ ����� ������� ������, ������������ fillStyle.

        //sending the drop back to the top randomly after it has crossed the screen
        //adding a randomness to the reset to make the drops scattered on the Y axis
        //�������� ����� ������ �������� ����� ����, ��� ��� ��������� �����
        if(drops[i]*font_size > c.height && Math.random() > 0.975)
        drops[i] = 0;

        //incrementing Y coordinate
        drops[i]++;
        }
        }

setInterval(draw, 50); //������� ��� ����������� ������� ���� ��������� � �������� ��������������
