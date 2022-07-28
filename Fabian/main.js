btnSumar= document.querySelector("#sumar");
btnRestar= document.querySelector("#restar");
btnDividir= document.querySelector("#Dividir");
btnMultiplicar= document.querySelector("#Multiplicar");

input1= document.querySelector("#num1");
input2= document.querySelector("#num2");

resultado=0;
input1=parseInt(input1.value);
input2=parseInt(input2.value);


btnSumar.addEventListener("click", () =>{
    
    resultado=input1+input2;
    alert(resultado);
});

btnRestar.addEventListener("click", () =>{
    
    resultado=input1-input2;
    alert(resultado);
});
btnMultiplicar.addEventListener("click", () =>{
    
    resultado=input1*input2;
    alert(resultado);
   
});
btnDividir.addEventListener("click", () =>{
    
    resultado=input1/input2;
    alert(resultado);
});


