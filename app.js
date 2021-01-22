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
            const color = product.color;
                return `<div class="table-row" >
        <div class="table-cell first-cell">
            <p>${product.name}</p>
        </div>
        <div class="table-cell">
            <img src="https://img.icons8.com/plasticine/30/000000/beanie.png" alt="type"/><p>${product.type}</p>
        </div>
        <div class="table-cell">
            <img src="https://img.icons8.com/plasticine/20/000000/company.png" alt="company"/><p>${product.manufacturer}</p>
        </div>
        <div class="table-cell">
            <p>${product.color}</p>
            <hr class="online-sign"/>
        </div>
        <div class="table-cell last-cell">
            <p>${product.id}</p>
        </div>
        </div>`

            }).join('');
            console.log(html);
            document.querySelector('#beanie-data').insertAdjacentHTML('afterbegin', html);
        })
        .catch(error => {
            console.log(error);
        });
}

fetchBeaniesData();


/*
const fetchAvailabilityData = async (manufacturerData, productId) => {
*/

/*  .then(response => {
      if (!response.ok) {
          throw Error("Error");
      }
      return response.json();
  })
  .then(data => {
      console.log("something fishy",data);
      const html = data.map(manufacturerInfo => {
           console.log("MANU DATA", manufacturerInfo.id);
      }).join('');
      console.log(html);
      document.querySelector('#testing-api').insertAdjacentHTML('afterbegin', html);
  })
  .catch(error => {
      console.log("something really fishy",error);
  });*/
/* try {
     const res = await fetch('https://cors-anywhere.herokuapp.com/https://bad-api-assignment.reaktor.com/v2/availability/' + manufacturerData);
     const json = await res.json();
     console.log("FETCH: ", res.body);


 } catch (e) {
     console.log("not working",e);
 }
}*/





