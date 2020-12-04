//1
document.querySelector('.n1tugma').addEventListener('click',function(){    
    let n1x=document.querySelector('.n1x');
    let n1javob=document.querySelector('.n1javob');
    n1javob.value=parseInt(n1x.value)*parseInt(n1x.value)*parseInt(n1x.value);
})
//2
document.querySelector('.n2tugma').addEventListener('click',function(){
    let n2r1=document.querySelector('.n2r1');
    let n2r2=document.querySelector('.n2r2');
    let n2r3=document.querySelector('.n2r3');
    let n2javob1=document.querySelector('.n2javob1');
    let n2javob2=document.querySelector('.n2javob2');
    let n2javob3=document.querySelector('.n2javob3');
    n2javob1.value=parseInt(n2r1.value)*parseInt(n2r1.value)*3.141592;
    n2javob2.value=parseInt(n2r2.value)*parseInt(n2r2.value)*3.141592;
    n2javob3.value=parseInt(n2r3.value)*parseInt(n2r3.value)*3.141592;
})
//3
document.querySelector('.n3tugma').addEventListener('click',function(){
    let n3s=document.querySelector('.n3s');
    let n3h=document.querySelector('.n3h');
    let n3javob=document.querySelector('.n3javob');
    n3javob.value=parseInt(n3s.value)*2/parseInt(n3h.value);
})
//4
document.querySelector('.n4tugma').addEventListener('click',function(){
    let n4r=document.querySelector('.n4r');
     let n4javob=document.querySelector('.n4javob');
    n4javob.value=parseInt(n4r.value)*parseInt(n4r.value)*3.141592*4;
})
//5
document.querySelector('.n5tugma').addEventListener('click',function(){
    let n5a=document.querySelector('.n5a');
    let n5b=document.querySelector('.n5b');
    let n5c=document.querySelector('.n5c');
    let n5javob=document.querySelector('.n5javob');
    n5javob.value=(parseInt(n5a.value)+parseInt(n5b.value)+parseInt(n5c.value))/2;
})
//7
document.querySelector('.n7tugma').addEventListener('click',function(){
    let n7h=document.querySelector('.n7h');
    let n7r=document.querySelector('.n7r');
    let n7javob=document.querySelector('.n7javob');
    n7javob.value=parseInt(n7r.value)*parseInt(n7r.value)*parseInt(n7h.value)*0.33333333333*3.141592;
})
//8
document.querySelector('.n8tugma').addEventListener('click',function(){
    let n8v=document.querySelector('.n8v');
    let n8s=document.querySelector('.n8s');
    let n8javob=document.querySelector('.n8javob');
    n8javob.value=parseInt(n8s.value)/parseInt(n8v.value);
})
//9
document.querySelector('.n9tugma').addEventListener('click',function(){
    let n9h=document.querySelector('.n9h');
    let n9javob=document.querySelector('.n9javob');
    let x=parseInt(n9h.value)*2/9.8;
    n9javob.value=Math.sqrt((x));
})
//10
document.querySelector('.n10tugma').addEventListener('click',function(){
    let n10x=document.querySelector('.n10x');
    let n10javob=document.querySelector('.n10javob');
    n10javob.value=parseInt(n10x.value)*365*24*3600/1000;
})
//11
document.querySelector('.n11tugma').addEventListener('click',function(){
    let n11x=document.querySelector('.n11x');
    let n11javob=document.querySelector('.n11javob');
    let s=0;
    for(var i=1;i<=(parseInt(n11x.value));i++) {
        s=s+i;
    }
    n11javob.value=s;
})
//12
document.querySelector('.n12tugma').addEventListener('click',function(){
    let n12m=document.querySelector('.n12m');
    let n12javob=document.querySelector('.n12javob');
    n12javob.value=parseInt(n12m.value)*9.8;
})
//13
document.querySelector('.n13tugma').addEventListener('click',function(){
    let n13m=document.querySelector('.n13m');
    let n13a=document.querySelector('.n13a');
    let n13javob=document.querySelector('.n13javob');
    n13javob.value=parseInt(n13m.value)*parseInt(n13a.value);
})
//14
document.querySelector('.n14tugma').addEventListener('click',function(){
    let n14u=document.querySelector('.n14u');
    let n14r=document.querySelector('.n14r');
    let n14javob=document.querySelector('.n14javob');
    n14javob.value=parseInt(n14u.value)/parseInt(n14r.value);
})
//15
document.querySelector('.n15tugma').addEventListener('click',function(){
    let n15r1=document.querySelector('.n15r1');
    let n15r2=document.querySelector('.n15r2');
    let n15r3=document.querySelector('.n15r3');
    let n15javob=document.querySelector('.n15javob');
    n15javob.value=1/((1/parseInt(n15r1.value))+(1/parseInt(n15r2.value))+(1/parseInt(n15r3.value)));
})
//16
document.querySelector('.n16tugma').addEventListener('click',function(){
    let n16x=document.querySelector('.n16x');
    let n16y=document.querySelector('.n16y');
    let n16javob=document.querySelector('.n16javob');
    let x16=parseFloat(n16x.value);
    let y16=parseFloat(n16y.value);
    n16javob.value=(x16+y16)*(y16*y16+Math.abs((y16*y16+2)/(x16+((x16*x16*x16)/5))))+Math.pow(Math.E,y16+2);
})
//17
document.querySelector('.n17tugma').addEventListener('click',function(){
    let n17x=document.querySelector('.n17x');
    let n17y=document.querySelector('.n17y');
    let n17javob=document.querySelector('.n17javob');
    let x17=parseFloat(n17x.value);
    let y17=parseFloat(n17y.value);
    n17javob.value=(2*((Math.sin(x17+Math.PI/6)/Math.cos(x17+Math.PI/6))))/(1/3+Math.pow(Math.cos(y17+x17*x17),2))+Math.log2(x17*x17+2);
})
//18
document.querySelector('.n18tugma').addEventListener('click',function(){
    let n18x=document.querySelector('.n18x');
    let n18y=document.querySelector('.n18y');
    let n18javob=document.querySelector('.n18javob');
    let x18=parseFloat(n18x.value);
    let y18=parseFloat(n18y.value);
    n18javob.value=((1/(x18+(2/(x18*x18))+(3/(x18*x18*x18)))+Math.pow(Math.E,x18*x18+3*x18))/(Math.atan(x18+y18)+Math.abs(5+x18)*Math.abs(5+x18)))-Math.cos(y18*y18+(x18*x18)/2)*Math.cos(y18*y18+(x18*x18)/2);
})
//19
document.querySelector('.n19tugma').addEventListener('click',function(){
    let n19x=document.querySelector('.n19x');
    let n19y=document.querySelector('.n19y');
    let n19javob=document.querySelector('.n19javob');
    let x19=parseFloat(n19x.value);
    let y19=parseFloat(n19y.value);
    n19javob.value=Math.log10(Math.abs((x19+y19)*(x19+y19)+Math.sqrt(Math.abs(y19)+2)-(x19-((x19*y19)/((x19*x19)/2-5)))))+(Math.cos(x19+y19)*Math.cos(x19+y19))/(Math.pow(x19+y19,1/3));
})
//20
document.querySelector('.n20tugma').addEventListener('click',function(){
    let n20x=document.querySelector('.n20x');
    let n20y=document.querySelector('.n20y');
    let n20javob=document.querySelector('.n20javob');
    let x20=parseFloat(n20x.value);
    let y20=parseFloat(n20y.value);
    n20javob.value=(x20*x20+1)/(x20*x20+(y20*x20+y20*y20)/(y20*y20+((y20+x20*y20)/(Math.abs(x20*y20)+5))))+(1/(1+Math.cos(x20)+(1/Math.sin(Math.abs(x20)))));
})
//21
document.querySelector('.n21tugma').addEventListener('click',function(){
    let n21a=document.querySelector('.n21a');
    let n21b=document.querySelector('.n21b');
    let n21javob=document.querySelector('.n21javob');
    let a21=parseFloat(n21a.value);
    let b21=parseFloat(n21b.value);
    n21javob.value=Math.pow(a21,1/5)+Math.pow((b21*((a21+b21)/(2*b21+a21*b21))),1/4)*(a21*a21+b21*b21+2);
})
//22
document.querySelector('.n22tugma').addEventListener('click',function(){
    let n22x1=document.querySelector('.n22x1');
    let n22x2=document.querySelector('.n22x2');
    let n22c=document.querySelector('.n22c');
    let n22d=document.querySelector('.n22d');
    let n22javob=document.querySelector('.n22javob');
    let x122=parseFloat(n22x1.value);
    let x222=parseFloat(n22x2.value);
    let c22=parseFloat(n22c.value);
    let d22=parseFloat(n22d.value);
    n22javob.value=Math.abs(Math.pow(Math.sin(Math.abs(c22*x222*x222*x222+d22*x122*x122*x122-c22*d22)),2)/(Math.sqrt(c22*x122*x122+d22*x222*x222+7)))+(Math.sin(x122*x222*x222+d22*d22*d22)/Math.cos(x122*x222*x222+d22*d22*d22));
})
//23
document.querySelector('.n23tugma').addEventListener('click',function(){
    let n23a=document.querySelector('.n23a');
    let n23b=document.querySelector('.n23b');
    let n23c=document.querySelector('.n23c');
    let n23d=document.querySelector('.n23d');
    let n23x=document.querySelector('.n23x');
    let n23javob=document.querySelector('.n23javob');
    let a23=parseFloat(n23a.value);
    let b23=parseFloat(n23b.value);
    let c23=parseFloat(n23c.value);
    let d23=parseFloat(n23d.value);
    let x23=parseFloat(n23x.value);
    n23javob.value=((a23*x23*x23+b23*x23+c23)/(x23*a23*a23*a23+a23*a23+Math.pow(a23,b23-c23)))+Math.cos(Math.abs((a23*x23+b23)/(c23*x23+d23+Math.pow(2,c23))));
})
//24
document.querySelector('.n24tugma').addEventListener('click',function(){
    let n24a=document.querySelector('.n24a');
    let n24b=document.querySelector('.n24b');
    let n24c=document.querySelector('.n24c');
    let n24x=document.querySelector('.n24x');
    let n24javob=document.querySelector('.n24javob');
    let a24=parseFloat(n24a.value);
    let b24=parseFloat(n24b.value);
    let c24=parseFloat(n24c.value);
    let x24=parseFloat(n24x.value);
    n24javob.value=0.75+(8.2*x24*x24+Math.sqrt(Math.abs(x24*x24*x24+3*x24)+Math.cos(x24-2)))/(a24/4+b24/3+c24/2+1);
})
//25
document.querySelector('.n25tugma').addEventListener('click',function(){
    let n25a=document.querySelector('.n25a');
    let n25x=document.querySelector('.n25x');
    let n25javob=document.querySelector('.n25javob');
    let a25=parseFloat(n25a.value);
    let x25=parseFloat(n25x.value);
    n25javob.value=(Math.sqrt(x25-1)+Math.sqrt(x25+2)+Math.log10(Math.sqrt(a25*x25*x25)+2))/(Math.sqrt(Math.sqrt(x25+2)+Math.sqrt(x25+24)+Math.pow(x25,5)));
})
//26
document.querySelector('.n26tugma').addEventListener('click',function(){
    let n26a=document.querySelector('.n26a');
    let n26x=document.querySelector('.n26x');
    let n26y=document.querySelector('.n26y');
    let n26javob=document.querySelector('.n26javob');
    let a26=parseFloat(n26a.value);
    let x26=parseFloat(n26x.value);
    let y26=parseFloat(n26y.value);
    n26javob.value=Math.sqrt(Math.pow(Math.E,x26*y26)+x26*Math.sin(a26*x26)-(x26*x26+2)/(Math.abs(x26)+5))+Math.sqrt(Math.log10(x26*x26+2)+5);
})
//27
document.querySelector('.n27tugma').addEventListener('click',function(){    
    let n27x=document.querySelector('.n27x');
    let n27javob=document.querySelector('.n27javob');
    let x27=parseFloat(n27x.value);
    n27javob.value=Math.sqrt((2*Math.atan(x27+2)-Math.cos(x27+Math.pow(2,x27)))/(1+Math.pow(Math.cos(x27+2),2)))+(Math.sin(x27*x27))/(x27*x27+3);
})
//28
document.querySelector('.n28tugma').addEventListener('click',function(){
    let n28a=document.querySelector('.n28a');
    let n28x=document.querySelector('.n28x');
    let n28javob=document.querySelector('.n28javob');
    let a28=parseFloat(n28a.value);
    let x28=parseFloat(n28x.value);
    n28javob.value=x28*Math.sin(x28/2+x28/3+x28/4)+(Math.log(x28*x28-2)+Math.pow(3,a28))/(Math.cos(x28+3)*Math.sin(x28+3)+8);
})
//29
document.querySelector('.n29tugma').addEventListener('click',function(){
    let n29a=document.querySelector('.n29a');
    let n29x=document.querySelector('.n29x');
    let n29y=document.querySelector('.n29y');
    let n29javob=document.querySelector('.n29javob');
    let a29=parseFloat(n29a.value);
    let x29=parseFloat(n29x.value);
    let y29=parseFloat(n29y.value);
    n29javob.value=Math.sqrt(y29*y29+Math.pow(Math.E,x29)+Math.sqrt(Math.pow(Math.E,x29)+(a29/(x29*x29+2)))+Math.pow(Math.cos(x29),2)/Math.sin(x29*x29))+Math.pow(Math.cos(x29),3);
})
//30
document.querySelector('.n30tugma').addEventListener('click',function(){
    let n30x=document.querySelector('.n30x');
    let n30y=document.querySelector('.n30y');
    let n30z=document.querySelector('.n30z');
    let n30javob=document.querySelector('.n30javob');
    let x30=parseFloat(n30x.value);
    let y30=parseFloat(n30y.value);
    let z30=parseFloat(n30z.value);
    n30javob.value=Math.pow(2,-x30)*Math.sqrt(x30+Math.pow(Math.abs(y30)+2,1/4))*Math.pow((Math.pow(Math.E,x30-1))/Math.sin(z30+2)+2);
})
