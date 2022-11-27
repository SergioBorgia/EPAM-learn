<script>
  //Перебор массива  c выводом в консоль каждого элемента.
  let arr = ['Шторм', 'Пожар', 'Небо',]
  for (let arrItem of arr) {
    console.log(arrItem);
  }


// Преобразить массив в строку и обратно в массив.
  let arr = ['Volvo', 'Mini', 'Toyota',];
  let str = arr.join(';');
  content.log (str);

  let arr = str.split(',');
  console.log(arr);

//Добавить к каждому элементу массива слово.
   let arr = ['John', 'Noah','Abby',];
   arr.forEach(function (item, index, array){
    console.log('Hello, '+ item);
    });
    
//Преобразовать числовой массив в Boolean
    let arr = [0,10,20,30,40,];
    let transNumbers = arr.map(funcion (item, index, arrey){
      return item;
      });    
      console.log (Bollean(transNumbers));
      

    let transfernumbers = arr.map(item=> Boolean(item));

//Отсортировать массив по убыванию.
    let arrNum = [1,6,7,8,3,4,5,6,];  
    console.log (arrNum.sort((a, b) => b - a));
//отфильтровать массив по значению - больше 3.
    let arrNum = [1,6,7,8,3,4,5,6,]
    let resultOne = arr.filter(function (item,index,arrey); {
      return item > 3;
    })
    console.log (resultOne);

//

    let arr =[x,y,z,v,o,];
    let resultOne = arr.findindex(index => index === a);
    let a = 3
    console.log (resultOne);


// написать функцию, которая принимает два параметра: массив и число
и выводит индекс элемента массива равный числу

  function arrayContains(arr, obj) {
   return arr.indexOf(obj) != -1;
  }

  funcion Z(item, index, array) {
  const number = x
  return index === number
  }
  const arrV[]
  console.log (arrV.findindex(Z))


  //цикл,выводящий число а, пока оно не станет меньше 10.
  let a = 20;
  while (a < 10) {
    console.log(a--);
  }

  //цикл, вывдящий в коноль простые числа.
  let n = 10;
  nextPrime:
  for (let i = 2; i <= n; i++)
  for (let j = 2; j < i; j++)if (i % j == 0) continue nextPrime;
  console.iog(i)

// цикл, выводящий в консоль нечетные числа.
let n = 10;
for( let i = 1; i <= 10; i++){
}
  if (i % 2 > 0){
    console.log (i)
  }
 
 </script>