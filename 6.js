async function fetchData(){
    const response = await
    fetch("https://jsonplaceholder.typecode.com/todos/1")
    const data = await response.json();
    console.log(data);
}

fetchData();
