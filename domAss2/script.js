const card = document.getElementById('card');
const follow = document.getElementById('follow');
const url = 'https://jsonplaceholder.typicode.com/users/1'
var times = 0;

follow.onclick = () => {
    follow.style.backgroundColor = `rgba(255,0,245)`;
    follow.innerText = `Clicked`
    event.stopPropagation();
}

card.onclick = async () => {
    const fetchedData = document.getElementById('fetched');
    fetchedData.innerHTML = "<B>Loading...</B>";

    fetch(url)
    .then((response) => response.json())
    .then((userObj) => fetchedData.innerHTML = renderData(userObj))
    .catch(() => {
        const error = new Error("Data can't be fetched right now");
        return fetchedData.innerHTML = `<b>Error Occured:\t</b>${error}`;
    })
}

const renderData = (user) => {
    return `
        <div id = 'detail'>
        Name: ${user.name}<br>
        User Name: ${user.username}<br>
        Email: ${user.email}<br>
        </div>
    `;
}