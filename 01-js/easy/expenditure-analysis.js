/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  let categories = [];
  let spend = [];
  let spend_by_categories = [];
  for (let i = 0; i < transactions.length; i++) {
    if (!categories.includes(transactions[i].category)) {
      categories.push(transactions[i].category);
      spend.push(transactions[i].price);
    } else {
      let index = categories.indexOf(transactions[i].category);
      spend[index] += transactions[i].price;
    }
  }
  for (let i = 0; i < categories.length; i++){
	let obj = new Object();
	obj.category = categories[i];
	obj.totalSpent = spend[i];
	spend_by_categories.push(obj);
  } 

  return spend_by_categories;
}

module.exports = calculateTotalSpentByCategory;
