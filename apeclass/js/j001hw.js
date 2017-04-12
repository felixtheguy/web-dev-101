/*Created by FTG */

window.onload = function part01 () {
    var imgNum01 = document.getElementById('imgNum01');
    var desc01 = document.getElementById('desc01');
    var cycle = document.getElementById('cycle');
    var order = document.getElementById('order');
    var box01 = document.getElementById('box01');
    var prev = document.getElementById('prev');
    var next = document.getElementById('next');
    var n = 0;
    var imgArr = ['001','002','003','004'];
    var descArr =['dog1','dog2','dog3','dog4'];
    var stas = 0;   //0 is order 1 is cycle
    imgNum01.innerHTML= n+1 + '/' + imgArr.length;
    desc01.innerHTML= descArr[n];

    cycle.onclick = function () {
        stas = 0;
    };
    order.onclick = function () {
        stas = 1;
    };

    prev.onclick = function () {
        //change to the previous image
        n --;

        if(n == -1 ){
            if(stas == 1){
                n = 0;
                alert('first image')
            }else{
                n = imgArr.length-1;
            }
        }
        imgNum01.innerHTML= n+1 + '/' + imgArr.length;
        desc01.innerHTML= descArr[n];
        box01.style.background = 'url(../img/jsimg' + imgArr[n] + '.jpg)';
        console.log(n);
    };

    next.onclick = function () {
        //change to the next image
        n++;

        if (n == imgArr.length){
            if (stas == 1){
                n = imgArr.length-1;
                alert('last image')
            }else{
                n= 0;
            }
        }
        imgNum01.innerHTML = n + 1 + '/' + imgArr.length;
        desc01.innerHTML = descArr[n];
        box01.style.background = 'url(../img/jsimg' + imgArr[n] + '.jpg)';
        console.log(n);
    };



    var prevGroup = document.getElementById('prevGroup');
    var nextGroup = document.getElementById('nextGroup');
    var dogPics = document.getElementById('dogPics');
    var catPics = document.getElementById('catPics');
    var desc02 = document.getElementById('desc02');
    var imgNum02 = document.getElementById('imgNum02');
    var desc03 = document.getElementById('desc03');
    var imgNum03 = document.getElementById('imgNum03');
    var dogsArr = ['001','002','003','004'];
    var dogsDescArr = ['dog1','dog2','dog3','dog4'];
    var catsArr = ['005','006','007','008'];
    var catsDescArr = ['cat1','cat2','cat3','cat4'];
    var d = 0;  //dog
    var c = 0;  //cat

    desc02.innerHTML = dogsDescArr[d];
    desc03.innerHTML = catsDescArr[c];
    imgNum02.innerHTML = d+1 + '/' + dogsArr.length;
    imgNum03.innerHTML = c+1 + '/' + catsArr.length;


    prevGroup.onclick = function () {
        d --;
        c --;
        if(d == -1){
            d = dogsArr.length-1;
        }
        if (c == -1){
            c = catsArr.length-1;
        }
        desc02.innerHTML = dogsDescArr[d];
        desc03.innerHTML = catsDescArr[c];
        imgNum02.innerHTML = d+1 + '/' + dogsArr.length;
        imgNum03.innerHTML = c+1 + '/' + catsArr.length;
        dogPics.src = "../img/jsimg" + dogsArr[d] + ".jpg";
        catPics.src = "../img/jsimg" + catsArr[c] + ".jpg";
    };
    nextGroup.onclick = function () {
        d ++;
        c ++;
        if (d == dogsArr.length){
            d = 0;
        }
        if (c == catsArr.length){
            c = 0;
        }
        desc02.innerHTML = dogsDescArr[d];
        desc03.innerHTML = catsDescArr[c];
        imgNum02.innerHTML = d+1 + '/' + dogsArr.length;
        imgNum03.innerHTML = c+1 + '/' + catsArr.length;
        dogPics.src = "../img/jsimg" + dogsArr[d] + ".jpg";
        catPics.src = "../img/jsimg" + catsArr[c] + ".jpg";

    };
    dogPics.onclick = function () {
        d ++;
        if (d == dogsArr.length){
            d = 0;
        }
        desc02.innerHTML = dogsDescArr[d];
        imgNum02.innerHTML = d+1 + '/' + dogsArr.length;
        dogPics.src = "../img/jsimg" + dogsArr[d] + ".jpg";
    };
    catPics.onclick = function () {
        c ++;
        if (c == catsArr.length){
            c = 0;
        }
        desc03.innerHTML = catsDescArr[c];
        imgNum03.innerHTML = c+1 + '/' + catsArr.length;
        catPics.src = "../img/jsimg" + catsArr[c] + ".jpg";
    };



};