async function gitCombineddata(){
    const [data1, data2]= await Promise.all([
        fetch("https://jsonplaceholder.typicode.com/todso/1").then((response) => response.json()
    ),
    fetch("https://jsonplaceholder.typicode.com/todso/1").then((response) => response.json()
)
    ])
    const combinedData = {
        todo: data1,
        post: data2,
    };
    return combinedData;
}

getComputedData().then((data)=> console.log(data));