/**
 * Created by felix on 1/10/2017.
 */

//change button 03;
document.getElementById('btn03').onclick = function(){alert(1)};
//change img01;

window.onload = function () {
    var btn04 = document.getElementById('btn04');
    var btn05 = document.getElementById('btn05');
    var btn06 = document.getElementById('btn06');
    var img01 = document.getElementById('img01');
    var text01 = document.getElementById('text01');
    var text02 = document.getElementById('text02');
    var btn07 = document.getElementById('btn07');
    var btn08 = document.getElementById('btn08');
    var box01 = document.getElementById('box01');

    btn04.onclick = function() {
        img01.style.width = '700px';
        btn05.style.background = 'none';
        btn06.style.background = 'none';
        btn04.style.background = 'red';
    };

    btn05.onclick = function () {
        img01.style.width = '800px';
        btn04.style.background = 'none';
        btn06.style.background = 'none';
        btn05.style.background = 'red';
    };
    btn06.onclick = function () {
        img01.style.width = text01.value;
        btn04.style.background = 'none';
        btn05.style.background = 'none';
        btn06.style.background = 'red';
    };
    btn07.onclick = function () {
        if(text02.value <= 5){
            alert('less than or equal to 5')
        }else{
            alert('greater than 5')
        }
    };
    var on = 'block';
    btn08.onclick = function () {
        if(on == 'none'){
            box01.style.display='block';
            on = 'block';
        }else{
            box01.style.display='none';
            on = 'none';

        }
    };

    var text03 = document.getElementById('text03');
    var btn09 = document.getElementById('btn09');
    var box02 = document.getElementById('box02');
    btn09.onclick = function () {
        var comm = text03.value;
        
    }

};




