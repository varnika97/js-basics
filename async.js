const url = "https://dummyjson.com/posts";

async function greet(){
    try {
    const resp = await fetch(url);
    const data = await resp.json();   //get
    console.log('GET:' + data);
}catch (error){
    console.log(error);
}
}
greet();
