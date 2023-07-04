//Q1 find if hari is in allUsers array or not/
//expected output is : 
//true
const name= 'hari'
const allUsers = ['shyam','thakur','hari']
// Answer
const value =allUsers.includes(name)
console.log(value)


//Q2 find number of duplicates
//expected output is : 2
//true
const user= 'hari'
const userArr = ['hari','shyam','hari','thakur']

// Answer
let count =0;
userArr.map((item) => {
  if (item == user) {
    count++;
  }
});
console.log('Number of duplicates:', count);