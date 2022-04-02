let custanswer = document.getElementById("in1");
let attanswer =  document.getElementById("in2");
let prodanswer = document.getElementById("in3");
let curranswer = document.getElementById("in4");
let discanswer = document.getElementById("in5");
let totalanswer = document.getElementById("in6");
let howpro = document.getElementById("innew1");
let tp = document.getElementById("innew2");

let calculate = document.getElementById("btn1");
calculate.addEventListener('click', function(){
    let custname = document.getElementById("customer").value;
    let attname = document.getElementById("attend").value;
    let prodname = document.getElementById("product").value;
    let currprice = document.getElementById("current").value;
    let how = document.getElementById("howprods").value;
    let disc = document.getElementById("discount").value;

    totalPrice = (how*currprice);
     discount = (disc/100)*totalPrice;
     saleprice = totalPrice-discount;

    document.getElementById("in1").value = custname;
    document.getElementById("in2").value = attname;
    document.getElementById("in3").value = prodname;
    document.getElementById("in4").value = currprice;
    document.getElementById("in5").value = discount;
    document.getElementById("innew1").value = how;
    document.getElementById("innew2").value = totalPrice;
    document.getElementById("in6").value = saleprice;

});

let reset = document.getElementById("btn2");
reset.addEventListener('click', function(){
    let custname = document.getElementById("customer").value="";
    let attname = document.getElementById("attend").value = "";
    let prodname = document.getElementById("product").value = "";
    let currprice = document.getElementById("current").value = "";
    let disc = document.getElementById("discount").value = "";
    let how = document.getElementById("howprods").value = "";

});

let records = document.getElementById("btn3");
records.addEventListener('click', function(){
    document.getElementById("in1").value = "";
    document.getElementById("in2").value = "";
    document.getElementById("in3").value = "";
    document.getElementById("in4").value = "";
    document.getElementById("in5").value = "";
    document.getElementById("in6").value = "";
    document.getElementById("innew1").value = "";
    document.getElementById("innew2").value = "";

});

let slip = document.getElementById("btn4");
slip.addEventListener('click',function(){
   window.print();
});