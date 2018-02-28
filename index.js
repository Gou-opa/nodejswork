var r = {
    p: (a,b) => (2*(a+b)),
    s: (a,b) => (a*b)
};

function giai(a,b){
    console.log("Giai HCN a = " + a + ", b = " + b );
    if( a <=0 || b<=0){
        console.log("Canh p lon hon 0");

    }
    else {
        console.log("dien tich "+r.s(a,b) +", chu vi "+r.p(a,b));
    }
}

giai(1,2);
giai(0,5);
giai(-3,2);