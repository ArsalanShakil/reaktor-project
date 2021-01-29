const fetchGlovesData = async () => {

    await fetch('https://cors-anywhere.herokuapp.com/https://bad-api-assignment.reaktor.com/v2/products/gloves')
        .then(response => {
            console.log(response)
            if (!response.ok) {
                throw Error("Error");
            }
            return response.json();
        })
        .then(data => {
            console.log(data);
            const array = [];
            const html = data.map(product => {
                if (!array.includes(product.manufacturer)){
                    array.push(product.manufacturer);

                }
                console.log(array.length);

                return `<div class="table-row" >
        <div class="table-cell first-cell">
            <p>${product.name}</p>
        </div>
        <div class="table-cell">
            <img src="https://img.icons8.com/ultraviolet/24/000000/christmas-mitten.png"/><p>${product.type}</p>
        </div>
        <div class="table-cell">
            <img src="https://img.icons8.com/plasticine/20/000000/company.png" alt="company"/><p>${product.manufacturer}</p>
        </div>
        <div class="table-cell">
            <p>${product.color}</p>
        </div>
        <div class="table-cell last-cell">
            <p>${product.id}</p>
        </div>
        </div>`
            }).join('');
            document.querySelector('#gloves-data').insertAdjacentHTML('afterbegin', html);
        })
        .catch(error => {
            console.log(error);
        });
}

fetchGlovesData();