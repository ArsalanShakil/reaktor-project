const fetchBeaniesData = async () => {

    await fetch('https://cors-anywhere.herokuapp.com/https://bad-api-assignment.reaktor.com/v2/products/beanies')
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
                setTimeout(() => {
                    console.log("World!");
                }, 3000000000);
                fetchAvailabilityData(manufacturerData);

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

const fetchAvailabilityData = async (manufacturerData) => {

    /*await fetch('https://cors-anywhere.herokuapp.com/https://bad-api-assignment.reaktor.com/v2/availability/' + manufacturerData)
        .then(response => {
            console.log(response)
            setTimeout(response.ok, 300);
            if (!response.ok) {
                throw Error("Error");
            }
            return response.json();
        })
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.log(error);
        });*/

    try {
        const res = await fetch('https://cors-anywhere.herokuapp.com/https://bad-api-assignment.reaktor.com/v2/availability/' + manufacturerData);
        const json = await res.json();
        console.log(JSON.stringify(res));
        console.log("FETCH: ", json);


    } catch (e) {
        console.log("not working",e);
    }
}




