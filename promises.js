const url = "https://jsonplaceholder.typicode.com/users";
// const url = "https://dummyjson.com/posts";

async function updateData(){
    try {
        const resp = await fetch(`${url}/2`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email: 'praveen@gmail.com'})
        });
        const data = await resp.json();   //get
        console.log(data);
    }catch (error) {
    console.log(error);
    }
}

 async function getData(){
    try{
        const resp = await fetch(url);
        const data = await resp.json();
        console.log(data);
    }catch(error){
        console.log("error in getting data")
    }   
 }
 async function deleteData(){
    try{
        const resp =await fetch(`${url}/3`,{
            method: 'delete',
        })
        const data = await resp.json();
        console.log(data);  
    }catch(err) {
        console.log(err);
        
    }
 }

updateData();
getData();
deleteData();


// fetch(url)
//  .then(res => res.json()
//  )
//  .then(data => console.log(data)
//  )


