// Arrays and loop

const names = ['anna', 'sussy', 'bob'];
const lastName = 'shakeandbake';
  let newArray = [];

  //for loop
  for(i=0; i< names.length; i++){
    console.log(i); //dispaly only index numbers
    console.log(names[i]); // dispaly names

    // newArray.push(names[i]);
    const fullName = '${names[i]} ${lastName}';
    newArray.push(fullName);
  }
  console.log(names);
  console.log(newArray);
  
  