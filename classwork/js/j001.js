/**
 * Created by felix on 1/10/2017.
 */

//change button 03;
document.getElementById('btn03').onclick = function(){
    alert(1)};
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
        var comm02 = '<p>' + comm + '</p>';
        box02.innerHTML =  comm02 + box02.innerHTML;

    };

    var btn10 = document.getElementById('btn10');
    var btn11 = document.getElementById('btn11');
    var img02 = document.getElementById('img02');
    var n = 0;
    var n2 = ['001','002','003','004'];


    btn10.onclick = function () {
        if (n <= 0) {
            n = 0;
            alert('first image already')
        }
        else {
            n--;
            img02.src = '../img/jsimg' + n2[n] + '.jpg';
        }
    };

    btn11.onclick = function () {
        if (n >= n2.length-1) {
            n = n2.length-1;
            alert('no more picture')
        }else {
            n++;
            img02.src = '../img/jsimg' + n2[n] + '.jpg';
        }
    };

    // btn12.onclick = function () {
    //     if (n < 0) {
    //         n = 3;
    //     }
    //     else {
    //         n--;
    //         img02.src = '../img/jsimg' + n2[n] + '.jpg';
    //     }
    // };
    //
    // btn13.onclick = function () {
    //     if (n > n2.length-1) {
    //         n = 0;
    //     }else {
    //         n++;
    //         img02.src = '../img/jsimg' + n2[n] + '.jpg';
    //     }
    // };

    // var circulate = document.getElementById('circulate');
    // var order = document.getElementById('order');
    // circulate.onclick = function () {
    //   btn10.id = btn12;
    //   btn11.id = btn13;
    // };
    //
    // order.onclick = function () {
    //   btn12.id = btn10;
    //   btn13.id = btn11;
    // };

    // get li
    var lis01 = document.getElementsByTagName('li');
    var lis02 = document.querySelectorAll('li');
    // change all li background color to red using tagname
    lis01[0].style.background = 'red';
    lis01[1].style.background = 'red';
    lis01[2].style.background = 'red';
    lis01[3].style.background = 'red';
    lis01[4].style.background = 'red';
    // console.log(lis01);

    // change all li background color to red using for repeat
    for(var i = 5;i < 10;i ++){
            lis01[i].style.background = 'green';}

    for(var x =10;x < lis01.length;x ++){
        lis01[x].onclick = function () {
            this.style.background = 'blue';
        }
    }
    var inputs01 = document.querySelectorAll('section#opt01>input');
    var divs01 = document.querySelectorAll('section#opt01>div');
    var last01 = inputs01[0];

    for(var y = 0;y < inputs01.length; y ++){
        inputs01[y].index = y;
        inputs01[y].onclick = function () {
            last01.style.background = '';
            divs01[last01.index].style.display = 'none';
            this.style.background = 'gray';
            divs01[this.index].style.display = 'block';
            last01 = this;
        }
    }

    var inputs02 = document.querySelectorAll('section#opt02>input');
    var divs02 = document.querySelectorAll('section#opt02>div');
    for(var q = 0;q <inputs02.length;q ++){
        inputs02[q].index =q;
        inputs02[q].onclick = function () {
            for(var q = 0;q < inputs02.length;q ++){
                inputs02[q].style.background = 'none';
                divs02[q].style.display = 'none';
            }
            this.style.background = 'dodgerblue';
            divs02[this.index].style.display = 'block';
        }
    }


};




