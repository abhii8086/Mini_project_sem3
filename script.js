
    var x= document.getElementById("login");
    var y= document.getElementById("register");
    var a= document.getElementById("admin");
    var z= document.getElementById("btn");
    function register(){
        x.style.left = "-400px";
        y.style.left = "50px";
        a.style.left = "700px"
        z.style.left = "110px";
        
    }
    function login(){
        x.style.left = "50px";
        y.style.left = "450px";
        a.style.left = "700px"
        z.style.left = "0";
        
    }
    function admin(){
        a.style.left = "50px";
        y.style.left = "-350px";
        z.style.left = "230px";
        x.style.left = "-500px"
    }