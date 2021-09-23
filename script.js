let a = prompt("Введите число a от 1 до 100");
let i = 1;
let j = 0;
document.write(a+"=");
while ( i <a) {
   
      if (a%2==0){
         a=a/2;
        
         if (j>=1){
            document.write("*"+2)
         }else{
            document.write(2)
         }
         }
         else if (a%3==0){
         a=a/3;
         if (j>=1){
            document.write("*"+3)
         }else{
            document.write(3)
         }
         }
         else if (a%5==0){
         a=a/5;
         if (j>=1){
            document.write("*"+5)
         }else{
            document.write(5)
         }
         }
         else if (a%7==0){
         a=a/7;
         if (j>=1){
            document.write("*"+7)
         }else{
            document.write(7)
         }
         }
        
         j++;
         i++;
}
