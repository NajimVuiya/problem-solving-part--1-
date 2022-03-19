'use strict';


// problem number one [93,423,46,12]; // get average number

// 1.compare all number then add
// 2. avg (total number ) count of
// 3. parcentage total value / 100

function getAvgPercentage(arr)
{
	let totalValue = 0;
	for(let i = 0; i <arr.length; i++)
	{
		totalValue += arr[i];
	}
	let avg = totalValue / arr.length;
	
	let parcentage =  avg / 100;
	console.log(parcentage);
}
getAvgPercentage([93,423,46,12]);

// get avegerage number start here
// 1.get compare number one 
// 2.get add arr1 
// 2. get avg
// 3. get avg add
// 4. get a
function getAvgParcentageNumber(arr1,arr2)
{
	let totalNumber = 0;
	for(let num of arr1)
	{
		totalNumber += num ;
	}
	const avg = totalNumber /  arr1.length;
	const parcentage = avg / 100;
	
	console.log('-------');

	let arr2TotalNum = 0;
	for(let num2 of arr2)
	{
		arr2TotalNum += num2;
	}
	const avg2 = arr2TotalNum / arr2.length;
	const parcentage22 = avg2 / 100;
	
	const compare = parcentage / parcentage22;
	console.log(compare);
}
getAvgParcentageNumber([10,90,84,33,43],[38,49,44,90,80]);


// get maximum number 
function getMaxNum(array)
{
	let max = array[0];
	for(let num1 of array)
	{
		if(max < num1)
		{
			max = num1;
		}
	}
	console.log(max);
}
getMaxNum([90,372,84,99,3,97]);

// git minimum number 
function getMin(arr)
{
	let min = arr[0];
	for(let minNum of arr)
	{
		if(min > minNum)
		{
			min = minNum;
		}
	}
	console.log(min);
}
getMin([12,44,64,9,90,34]);

// example of object resive fun
function getObjInFun(obj)
{
	let property = Object.keys(obj);
	console.log(property);

	let objValue = Object.values(obj);
	console.log(objValue);

	let max = objValue[0];
	for(let num of objValue)
	{
		if(max < num)
		{
			max = num;
		}
	}
	console.log(max);

	// minimum value start here
	let min = objValue[0];
	for(let num2 of objValue)
	{
		if (min > num2) 
		{
			min = num2;
		}
	}
	console.log(min);

	// compaire 2 number 
	const compaireMin_Max = max / min;
	console.log(compaireMin_Max);
}

getObjInFun({'num1' : 10,'num2' : 60,'num3' : 90,'num4' : 80,'num5' : 40,'num6' : 20, 'num7' : 7 });


// math function start here
const max = Math.max(1,2,34,53,90,333,82,80);
const min = Math.min(1,2,34,53,90,333,82,80);

console.log(max);
console.log(min);
console.log(Math.ceil(Math.random() * 5));
function getObjectToGenerateRandomNum(renerateRanObject)
{
	const objValue = Object.values(renerateRanObject);
	for(let num of objValue)
	{
		console.log(Math.ceil(Math.random() * num));
	}

	const [num1,num2,num3,num4,num5,num6,num7,num8] = objValue;
	console.log(Math.ceil(Math.random() * num1));

}
getObjectToGenerateRandomNum({'number1' : 90,'number2' : 20,'number3' : 80,'number4' : 30,'number5' : 50,'number6' : 10,'number7' : 60,'number8' : 90 });

// another example of math.max
function getArray(arr)
{
	console.log(Math.max(...arr));
	console.log(Math.min(...arr));
	console.log(Math.max.apply(null,arr));
}
getArray([80,97,78,38,88,34]);

// deffirence between max number and min number
function maxMinDifference(array) 
{
	let maximumNumber = array[0];
	for(let num1 of array)
	{
		if(maximumNumber < num1)
		{
			maximumNumber = num1;
		}
	}
	// console.log(maximumNumber);

	let minimumNumber = array[0];
	for(let num2 of array)
	{
		if (minimumNumber > num2) 
		{
			minimumNumber = num2;
		}
	}
	// console.log(minimumNumber);
	const difference = maximumNumber - minimumNumber;
	console.log(difference)
}
maxMinDifference([90,92,48,55,82,48]);

// finding element for array
// 1. comparing every element
// 2. metch
function findinngElm(array,search)
{
	let defaults = false;
	for(let num of array)
	{
		if(search === num)
		{
			defaults = true
		}
	}
	console.log(defaults);
}
findinngElm([20,79,66,49,8],66);

// another way with user input  finding element 
console.log('--------');


const getUserEmailAddress = null ;//prompt('Email Address : ');
const getUserPhone = null ;//prompt('Enter Your Phone Number : '); 

function getUserInputFindEmail(listOfEmail,searchEmail)
{
	let byDefaultEmail = false;
	for(let email = 0; email < listOfEmail.length; email++)
	{
		if(listOfEmail[email] === searchEmail)
		{
			byDefaultEmail = true;
		}
	}
	return byDefaultEmail;
	metch(phon,search);
}

// finding phone number
function getUserInputFindPhone(listOfPhone,searchPhone)
{
	let defaultPhone = false;
	for(let phone = 0; phone < listOfPhone.length; phone++)
	{
		if(listOfPhone[phone] === searchPhone)
		{
			defaultPhone = true;
		}
	}
	return(defaultPhone);
 	
}
const emailResult = getUserInputFindEmail(['jaynal@gmail.com','kamal@gmail.com','najim@yeahow.com','tajin@yeahow.com','khadija@gmail.com'],getUserEmailAddress);
console.log(emailResult);

const phoneResult =	getUserInputFindPhone(['01310010347','01905060508','01905060509','01799529341','01489309872','0159382726'],getUserPhone);
console.log(phoneResult);


// Nested loop start here
let number1 = 5;
let number2 = 3;
for(let num1 = 1; num1 <= number1; num1++)
{
	console.log('This is nested loop : '+num1);
	for(let num2 = 1; num2 <= number2; num2++)
	{
		console.log(num2);
	}
}
// JavaScript array include() method
console.log([12,43,55].includes(55));
console.log([43,22,55,42,'kamal'].includes('kamal'));


