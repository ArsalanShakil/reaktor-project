function fetchBeaniesData() {

    fetch('https://cors-anywhere.herokuapp.com/https://bad-api-assignment.reaktor.com/v2/products/beanies')
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
                console.log(manufacturerData);

                return `
                    <div>
                    <p>Product: ${product.name}</p>
                    <p>Type: ${product.type}</p>
                    <p>Manufacturer: ${product.manufacturer}</p>
                    </div>`
            }).join('');
            console.log(html);
            document.querySelector('#testing-api').insertAdjacentHTML('afterbegin', html);
        })
        .catch(error => {
            console.log(error);
        });
}

fetchBeaniesData();
/*function fetchBeaniesData() {

    fetch('')
        .then(response => {
            console.log(response)
            if (!response.ok) {
                throw Error("Error");
            }
            return response.json();
        })
        .then(data => {
            console.log(data);
            console.log(html);
            document.querySelector('#testing-api').insertAdjacentHTML('afterbegin', html);
        })
        .catch(error => {
            console.log(error);
        });
}

fetchBeaniesData();*/

