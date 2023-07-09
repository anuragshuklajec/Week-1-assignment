/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {
  
  let result = {}

  for (const transaction of transactions){
    
    if (transaction['category'] in result){
      
      result[transaction['category']] += transaction['price']
    }else{
      
      result[transaction['category']] = transaction['price']
    
      
    }
    
  };

  return result
  
  }


var result = calculateTotalSpentByCategory([
  { itemName : "bedsheet" , category : "room" , price : 3000, timestamp  : 1000 },
{ itemName : "pillow" , category : "room" , price : 2000, timestamp  : 1000 },
{ itemName : "basin" , category : "washroom" , price : 30000, timestamp  : 1000 },
{ itemName : "sheet" , category : "room" , price : 20000, timestamp  : 1000 },
{ itemName : "sofa" , category : "living" , price : 60000, timestamp  : 1000 }])

console.log(result);

// console.log(result);
module.exports = calculateTotalSpentByCategory;
