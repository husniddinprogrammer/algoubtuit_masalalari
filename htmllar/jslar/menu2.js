
//31
document.querySelector('.n31tugma').addEventListener('click', function () {
    let n31x = document.querySelector('.n31x');
    let n31y = document.querySelector('.n31y');
    let n31javob1 = document.querySelector('.n31javob1');
    let n31javob2 = document.querySelector('.n31javob2');
    let x31 = parseFloat(n31x.value);
    let y31 = parseFloat(n31y.value);
    let max31 = 0;
    let min31 = 0;
    if (x31 > y31) {
        max31 = x31;
        min31 = y31;
    }
    else {
        max31 = y31;
        min31 = x31;
    }
    n31javob1.value = max31;
    n31javob2.value = min31;
})
//32
document.querySelector('.n32tugma').addEventListener('click', function () {
    let n32x = document.querySelector('.n32x');
    let n32y = document.querySelector('.n32y');
    let n32z = document.querySelector('.n32z');
    let n32javob1 = document.querySelector('.n32javob1');
    let n32javob2 = document.querySelector('.n32javob2');
    let x32 = parseFloat(n32x.value);
    let y32 = parseFloat(n32y.value);
    let z32 = parseFloat(n32z.value);
    let max32 = 0;
    let min32 = 0;
    if (x32 > y32) {
        max32 = x32;
        min32 = y32;
    }
    else {
        max32 = y32;
        min32 = x32;
    }
    if (max32 < z32) {
        max32 = z32;
    }
    if (min32 > z32) {
        min32 = z32;
    }
    n32javob1.value = max32;
    n32javob2.value = min32;
})
//33
document.querySelector('.n33tugma').addEventListener('click', function () {
    let n33x = document.querySelector('.n33x');
    let n33y = document.querySelector('.n33y');
    let n33z = document.querySelector('.n33z');
    let n33javob1 = document.querySelector('.n33javob1');
    let n33javob2 = document.querySelector('.n33javob2');
    let x33 = parseFloat(n33x.value);
    let y33 = parseFloat(n33y.value);
    let z33 = parseFloat(n33z.value);
    let max33 = 0;
    let min33 = 0;
    if (x33 > y33) {
        max33 = x33;
        min33 = y33;
    }
    else {
        max33 = y33;
        min33 = x33;
    }
    if (max33 < z33) {
        max33 = z33;
    }
    if (min33 > z33) {
        min33 = z33;
    }
    if (max33 < x33 + y33 + z33) {
        max33 = x33 + y33 + z33;
    }
    if (min33 > (x33 + y33) / 2) {
        min33 = (x33 + y33) / 2;
    }
    n33javob1.value = max33;
    n33javob2.value = min33;
})
//34
document.querySelector('.n34tugma').addEventListener('click', function () {
    let n34a = document.querySelector('.n34a');
    let n34b = document.querySelector('.n34b');
    let n34c = document.querySelector('.n34c');
    let n34javob = document.querySelector('.n34javob');
    let a34 = parseFloat(n34a.value);
    let b34 = parseFloat(n34b.value);
    let c34 = parseFloat(n34c.value);
    let j34;
    if ((a34 < b34) && (b34 < c34)) {
        j34 = 'Yes';
    }
    else {
        j34 = 'No'
    }
    n34javob.value = j34;
})
//35
document.querySelector('.n35tugma').addEventListener('click', function () {
    let n35a = document.querySelector('.n35a');
    let n35b = document.querySelector('.n35b');
    let n35c = document.querySelector('.n35c');
    let n35javob1 = document.querySelector('.n35javob1');
    let n35javob2 = document.querySelector('.n35javob2');
    let n35javob3 = document.querySelector('.n35javob3');
    let a35 = parseFloat(n35a.value);
    let b35 = parseFloat(n35b.value);
    let c35 = parseFloat(n35c.value);
    if ((a35 >= b35) && (b35 >= c35)) {
        a35 = a35 * 2; b35 = b35 * 2; c35 = c35 * 2;
    }
    else {
        a35 = Math.abs(a35);
        b35 = Math.abs(b35);
        c35 = Math.abs(c35);
    }
    n35javob1.value = a35;
    n35javob2.value = b35;
    n35javob3.value = c35;

})
//36
document.querySelector('.n36tugma').addEventListener('click', function () {
    let n36a = document.querySelector('.n36a');
    let n36b = document.querySelector('.n36b');
    let n36javob1 = document.querySelector('.n36javob1');
    let n36javob2 = document.querySelector('.n36javob2');
    let a36 = parseFloat(n36a.value);
    let b36 = parseFloat(n36b.value);

    if (a36 > b36) {
        a36 = a36; b36 = b36;
    }
    else {
        a36 = a36; b36 = '';
    }
    n36javob1.value = a36;
    n36javob2.value = b36;

})
//37
document.querySelector('.n37tugma').addEventListener('click', function () {
    let n37a = document.querySelector('.n37a');
    let n37b = document.querySelector('.n37b');
    let n37javob1 = document.querySelector('.n37javob1');
    let n37javob2 = document.querySelector('.n37javob2');
    let a37 = parseFloat(n37a.value);
    let b37 = parseFloat(n37b.value);

    if (a37 < b37) {
        a37 = 0; b36 = b37;
    }
    else {
        a37 = a37; b37 = b37;
    }
    n37javob1.value = a37;
    n37javob2.value = b37;

})
//38
document.querySelector('.n38tugma').addEventListener('click', function () {
    let n38x = document.querySelector('.n38x');
    let n38y = document.querySelector('.n38y');
    let n38z = document.querySelector('.n38z');
    let n38javob1 = document.querySelector('.n38javob1');
    let n38javob2 = document.querySelector('.n38javob2');
    let n38javob3 = document.querySelector('.n38javob3');
    let x38 = parseFloat(n38x.value);
    let y38 = parseFloat(n38y.value);
    let z38 = parseFloat(n38z.value);
    if ((1 <= x38) && (x38 <= 3)) {
        x38 = x38;
    }
    else {
        x38 = ' ';
    }
    if ((1 <= y38) && (y38 <= 3)) {
        y38 = y38;
    }
    else {
        y38 = ' ';
    }
    if ((1 <= y38) && (y38 <= 3)) {
        y38 = y38;
    }
    else {
        y38 = ' ';
    }

    n38javob1.value = x38;
    n38javob2.value = y38;
    n38javob3.value = z38;
})
//39
document.querySelector('.n39tugma').addEventListener('click', function () {
    let n39x = document.querySelector('.n39x');
    let n39y = document.querySelector('.n39y');
    let n39javob1 = document.querySelector('.n39javob1');
    let n39javob2 = document.querySelector('.n39javob2');
    let x39 = parseFloat(n39x.value);
    let y39 = parseFloat(n39y.value);
    let x39x;
    let y39y;
    if (x39 > y39) {
        x39x = 2 * x39 * 2 * y39; y39y = (x39 + y39) / 2;
    }
    else {
        x39x = 2 * x39 * 2 * y39; y39y = (x39 + y39) / 2;
    }
    n39javob1.value = x39x;
    n39javob2.value = y39y;
})
//40
document.querySelector('.n40tugma').addEventListener('click', function () {
    let n40x = document.querySelector('.n40x');
    let n40y = document.querySelector('.n40y');
    let n40z = document.querySelector('.n40z');
    let n40javob1 = document.querySelector('.n40javob1');
    let n40javob2 = document.querySelector('.n40javob2');
    let n40javob3 = document.querySelector('.n40javob3');
    let x40 = parseFloat(n40x.value);
    let y40 = parseFloat(n40y.value);
    let z40 = parseFloat(n40z.value);
    if (x40 > 0) {
        x40 = x40 * x40;
    }
    if (y40 > 0) {
        y40 = y40 * y40;
    }
    if (z40 > 0) {
        z40 = z40 * z40;
    }
    n40javob1.value = x40;
    n40javob2.value = y40;
    n40javob3.value = z40;
})
//41
document.querySelector('.n41tugma').addEventListener('click', function () {
    let n41x = document.querySelector('.n41x');
    let n41y = document.querySelector('.n41y');
    let n41z = document.querySelector('.n41z');
    let n41javob1 = document.querySelector('.n41javob1');
    let n41javob2 = document.querySelector('.n41javob2');
    let n41javob3 = document.querySelector('.n41javob3');
    let x41 = parseFloat(n41x.value);
    let y41 = parseFloat(n41y.value);
    let z41 = parseFloat(n41z.value);
    let min41;
    let max41;
    let k41;
    if ((x41 < 1) || (y41 < 1) || (z41 < 1)) {
        min41 = x41; k41 = 1;
        max41 = x41;
    } {
        if (max41 < y41) {
            max41 = y41;
        }
        else { min41 = y41; k41 = 2; }
        if (max41 < z41) {
            max41 = z41;
        }
        else { min41 = z41; k41 = 3; }
    }
    if (k41 = 1) {
        x41 = (min41 + max41) / 2;
    }
    if (k41 = 2) {
        y41 = (min41 + max41) / 2;
    }
    if (k = 3) {
        z41 = (min41 + max41) / 2;
    }

    n41javob1.value = x41;
    n41javob2.value = y41;
    n41javob3.value = z41;
})
//42
document.querySelector('.n42tugma').addEventListener('click', function () {
    let n42a = document.querySelector('.n42a');
    let n42b = document.querySelector('.n42b');
    let n42c = document.querySelector('.n42c');
    let n42d = document.querySelector('.n42d');
    let n42javob1 = document.querySelector('.n42javob1');
    let n42javob2 = document.querySelector('.n42javob2');
    let n42javob3 = document.querySelector('.n42javob3');
    let n42javob4 = document.querySelector('.n42javob4');
    let a42 = parseFloat(n42a.value);
    let b42 = parseFloat(n42b.value);
    let c42 = parseFloat(n42c.value);
    let d42 = parseFloat(n42d.value);
    min42 = a42;
    if (min42 > b42) { min42 = b42; }
    if (min42 > c42) { min42 = c42; }
    if (min42 > d42) { min42 = d42; }
    if ((a42 < b42) && (b42 <= c42) && (c42 <= d42)) {
        a42 = d42; b42 = d42; c42 = d42; d42 = d42;
    }
    else {
        a42 = min42; b42 = min42; c42 = min42; d42 = min42;
    }
    n42javob1.value = a42;
    n42javob2.value = b42;
    n42javob3.value = c42;
    n42javob4.value = d42;

})
//43
document.querySelector('.n43tugma').addEventListener('click', function () {
    let n43x = document.querySelector('.n43x');
    let n43y = document.querySelector('.n43y');
    let n43javob1 = document.querySelector('.n43javob1');
    let n43javob2 = document.querySelector('.n43javob2');
    let x43 = parseFloat(n43x.value);
    let y43 = parseFloat(n43y.value);
    if ((x43 < 0) || (y43 < 0)) {
        x43 = x43 + 0.5; y43 = y43 + 0.5;
    }
    n43javob1.value = x43;
    n43javob2.value = y43;
})
//44
document.querySelector('.n44tugma').addEventListener('click', function () {
    let n44x = document.querySelector('.n44x');
    let n44y = document.querySelector('.n44y');
    let n44z = document.querySelector('.n44z');
    let n44javob = document.querySelector('.n44javob');
    let x44 = parseFloat(n44x.value);
    let y44 = parseFloat(n44y.value);
    let z44 = parseFloat(n44z.value);
    let j44;
    if (((x44 + y44) > z44) && ((x44 + z44) > y44) && ((y44 + z44) > x44)) {
        j44 = 'yes';
    }
    else { j44 = 'no' }
    n44javob.value = j44;
})
//45
document.querySelector('.n45tugma').addEventListener('click', function () {
    let n45a = document.querySelector('.n45a');
    let n45b = document.querySelector('.n45b');
    let n45c = document.querySelector('.n45c');
    let n45javob1 = document.querySelector('.n45javob1');
    let n45javob2 = document.querySelector('.n45javob2');
    let a45 = parseFloat(n45a.value);
    let b45 = parseFloat(n45b.value);
    let c45 = parseFloat(n45c.value);
    let x145;
    let x245;
    let d45; x245 = '';
    d45 = b45 * b45 - 4 * a45 * c45;
    if (d45 > 0) {
        x145 = (-b45 + Math.sqrt(d45)) / (2 * a45);
        x245 = (-b45 - Math.sqrt(d45)) / (2 * a45);
    }
    if (d45 == 0) {
        x145 = (-b45) / (2 * a45);
    }
    if (d45 < 0) {
        x145 = 'no';
    }
    n45javob1.value = x145;
    n45javob2.value = x245;

})
//46
document.querySelector('.n46tugma').addEventListener('click', function () {
    let n46a = document.querySelector('.n46a');
    let n46javob = document.querySelector('.n46javob');
    let a46 = parseFloat(n46a.value);
    let y46;
    if (a46 < -1) {
        y46 = (1 / (a46 * a46));
    }
    if ((a46 > -1) && (a46 < 2)) {
        y46 = a46 * a46;
    }
    if (a46 > 2) {
        y46 = 4;
    }
    n46javob.value = y46;
})
//47
document.querySelector('.n47tugma').addEventListener('click', function () {
    let n47a = document.querySelector('.n47a');
    let n47javob = document.querySelector('.n47javob');
    let a47 = parseFloat(n47a.value);
    let y47;
    if (a47 < 1) {
        y47 = Math.abs(a47);
    }
    if ((a47 > 1) && (a47 < 2)) {
        y47 = 1;
    }
    if (a47 > 2) {
        y47 = 2 * a47 + 5;
    }
    n47javob.value = y47;
})
//48
document.querySelector('.n48tugma').addEventListener('click', function () {
    let n48a = document.querySelector('.n48a');
    let n48javob = document.querySelector('.n48javob');
    let a48 = parseFloat(n48a.value);
    let y48;
    if (a48 < 0) {
        y48 = -a48;
    }
    else {
        y48 = -a48 * a48;
    }
    n48javob.value = y48;
})
//49
document.querySelector('.n49tugma').addEventListener('click', function () {
    let n49a = document.querySelector('.n49a');
    let n49javob = document.querySelector('.n49javob');
    let a49 = parseFloat(n49a.value);
    let y49;
    if (a49 < -1) {
        y49 = Math.abs(a49 - 1);
    }
    if ((a49 > -1) && (a49 < 1)) {
        y49 = Math.abs(Math.abs(a49) - 1);
    }
    if (a49 > 1) {
        y49 = Math.abs(a49) + 1;
    }
    n49javob.value = y49;
})
//50
document.querySelector('.n50tugma').addEventListener('click', function () {
    let n50x = document.querySelector('.n50x');
    let n50y = document.querySelector('.n50y');
    let n50javob = document.querySelector('.n50javob');
    let x50 = parseFloat(n50x.value);
    let y50 = parseFloat(n50y.value);
    if ((Math.abs(x50)<=1) && (y50<=(3-3*Math.abs(x50))-1) && y50>=-2) {
        j50='yes';
    }
    else {
        j50='no';
    }
    n50javob.value =j50;
})

