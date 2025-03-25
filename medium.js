// const url = "https://jsonplaceholder.typicode.com/todos";

// async function getData(){
//     try{
//         const resp = await fetch(url);
//         const data = await resp.json();
//         console.log(data);
//     }catch(er){
//         console.log("getting error in retriving the data");
//     }
// }
// getData();

// fetch("https://jsonplaceholder.typicode.com/todos")
// .then(response => response.json())
// .then(json => console.log(json))

fetch("https://jsonplaceholder.typicode.com/todos")
.then(response => response.json())
.then(json => console.log(json))

// specific id =5

fetch("https://jsonplaceholder.typicode.com/todos/5")
.then(response => response.json())
.then(json => console.log(json))

//Post method

// const url = "https://jsonplaceholder.typicode.com/todos";
// async function update(){
//     try{
//         const resp = await fetch(url)
//         method: "POST",
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body:
//             JSON.stringify({
//                 userId: 1,
//                 title: 'clean room',
//                 completed: false

//             });
//             const data = await resp.json()
//             console.log(data)
            
//         }
//     catch(error){
//         console.log(error)
//     }
// }
// update();


fetch('https://jsonplaceholder.typicode.com/todos',{
    method:'post',
    headers:{
        'Content-type':'application/json'
    },
    body:
        JSON.stringify({
            userId: 1,
            title:'clean room',
            completed: false

        })
    })
        .then(response => response.json())
        .then(json => console.log(json))

    // fetch('https://jsonplaceholder.typicode.com/todos',{
    //     method:'Post',
    //     headers:{
    //         'Content-Type': 'application/jscon'
    //     },
    //     body:
    //         JSON.stringify({
    //             userId:1,
    //             title:'Madhu',
    //             completed: false
    //         })
    //     })
    //     .then(response => response.json())
    //     .then(json=>console.log(json))

    // fetch('https://jsonplaceholder.typicode.com/todos/5',{
    //     method:'PUT',
    //     headers:{
    //         'Content-Type':'application/json'
    //     },
    //     body:
    //        JSON.stringify({
    //         userId:1,
    //         id:5,
    //         title:"Hello Task",
    //         completed:false
    //        })
    // })
    // .then(response=>response.json())
    // .then(json=>console.log(json))


    fetch('https://jsonplaceholder.typicode.com/todos/4',{
        method:'PUT',
        headers:{
            'Content-Type':'application/json'
        },
        body:
          JSON.stringify({
            userId:1,
            id:4,
            title:"Hello World",
            email:'jassu@gmail.com',
            completed:false
          })
    })
    .then(response=>response.json())
    .then(json=>console.log(json))
    
    fetch('https://jsonplaceholder.typicode.com/todos/3',{
        method:'Patch',
        headers:{
            'Content-type':'application/json'
        },
        body:
            JSON.stringify({
            completed:true
            })
    })
    .then(response=>response.json())
    .then(json=>console.log(json))


    fetch('https://jsonplaceholder.typicode.com/todos/2',{
        method:'delete'
    })



