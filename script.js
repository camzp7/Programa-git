alert ("En este software debe ingresar 10 numeros y el cual le Ordenara en una lista Ascendente y Descendente"); 
Lista_De_Numeros_1 =[]; 
Lista_De_Numeros_2 =[]; 
 
Lista_De_Numeros_1 [0]= parseInt(prompt("N1: ")); 
Lista_De_Numeros_1 [1]= parseInt(prompt("N2: ")); 
Lista_De_Numeros_1 [2]= parseInt(prompt("N3: ")); 
Lista_De_Numeros_1 [3]= parseInt(prompt("N4: ")); 
Lista_De_Numeros_1 [4]= parseInt(prompt("N5: "));

Lista_De_Numeros_2 [0]= parseInt(prompt("N6: ")); 
Lista_De_Numeros_2 [1]= parseInt(prompt("N7: ")); 
Lista_De_Numeros_2 [2]= parseInt(prompt("N8: ")); 
Lista_De_Numeros_2 [3]= parseInt(prompt("N9: ")); 
Lista_De_Numeros_2 [4]= parseInt(prompt("N10: ")); 
 
Lista_De_Numeros_1 = Lista_De_Numeros_1.concat (Lista_De_Numeros_1); 
 
Lista_De_Numeros_1.sort((a,b)=>{ 
    if(a==b) { 
        return 0; 
    } 
 
     if(a==b) { 
        return -1; 
    } 
    return 1; 
}) 
console.log("Lista Ordenada Ascendente vector 1: " + Lista_De_Numeros_1, "Lista Ordenada Ascendente vector 1:" ,Lista_De_Numeros_2) 
console.log("Lista Ordenada Descendente vector 1: " + Lista_De_Numeros_1.reverse() ,"Lista Ordenada Descendente vector 1:", Lista_De_Numeros_2.reverse()) 