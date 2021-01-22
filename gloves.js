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
            const html = data.map(product => {
                const manufacturerData = product.manufacturer;

                return `
                    <div>
                    <p>Product: ${product.name}</p>
                    <p>Type: ${product.type}</p>
                    <p>Manufacturer: ${product.manufacturer}</p>
                    <br>
                    <br>
                    </div>`
            }).join('');
            console.log(html);
            document.querySelector('#testing-api').insertAdjacentHTML('afterbegin', html);
        })
        .catch(error => {
            console.log(error);
        });
}

fetchGlovesData();