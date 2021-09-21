let a = prompt("Введите число a от 1 до 100");
let i = 1;
while ( i <a) {
  
      if (a%2==0){
         a=a/2;
         document.write(2+"</br>")
         }
         else if (a%3==0){
         a=a/3;
         document.write(3+"</br>") 
         }
         else if (a%5==0){
         a=a/5;
         document.write(5+"</br>")
         }
         else if (a%7==0){
         a=a/7;
         document.write(7+"</br>")
         }
        
   
  i++;
}