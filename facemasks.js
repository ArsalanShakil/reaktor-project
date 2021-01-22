const fetchMasksData = async () => {

    await fetch('https://cors-anywhere.herokuapp.com/https://bad-api-assignment.reaktor.com/v2/products/facemasks')
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
                    <p><span>Product:</span> ${product.name}</p>
                    <p><span>Type:</span> ${product.type}</p>
                    <p><span>Manufacturer:</span> ${product.manufacturer}</p>
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

fetchMasksData();