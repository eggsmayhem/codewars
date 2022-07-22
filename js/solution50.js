//Two Sum
//
 function twoSum(numbers, target) {
   let answer = [];
   let counter = 0;
   while (counter < numbers.length) {
       for (let i=1; i<numbers.length;i++) {
           if (numbers[i] + numbers[counter] === target) {
               answer.push(i)
               answer.push(counter)
               return answer
           }
        }
      counter++
   }
 
}
