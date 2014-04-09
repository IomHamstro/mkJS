
var max=0;
function textlist() {
    max=textlist.arguments.length;
    for (i=0; i<max; i++)
    this[i]=textlist.arguments[i];
    }
tl = new textlist(
"hello, Neo...",
"Матрица опять поимела тебя..."
);
var x = 0; pos = 0;
var l = tl[0].length;
function textticker() {
    document.tickform.tickfield.value = tl[x].substring(0, pos) + "_";
    console.log( document.tickform.tickfield.value);
    if(pos++ == l) {
    pos = 0;
    <!-- web-mastery.info  -->
    setTimeout("textticker()", 3000);
    if(++x == max) x = 0;
    l = tl[x].length;
    } else
    setTimeout("textticker()", 150);}
