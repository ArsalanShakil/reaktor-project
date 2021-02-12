const fetchBeaniesData = async () => {

    await fetch('https://bad-api-assignment.reaktor.com/v2/products/beanies')
        .then(response => {
            //console.log(response)
            if (!response.ok) {
                throw Error("Error");
            }
            return response.json();
        })
        .then(data => {
            //console.log(data);
            let manufacturerArray = [];
            let manufacturersData = {}

            let productIdArray =[]
            const html = data.map(product => {
                if (!manufacturerArray.includes(product.manufacturer)){
                    manufacturerArray.push(product.manufacturer);
                    productIdArray.push(product.id);
                }

                if (!manufacturersData.hasOwnProperty(product.manufacturer)) {
                    manufacturersData[product.manufacturer] = [product.id];
                } else {
                    manufacturersData[product.manufacturer].push(product.id);
                }

                return '<div class="table-row" ><div class="table-cell first-cell"><p>'+product.name+'</p></div> <div class="table-cell"><img src="https://img.icons8.com/plasticine/20/000000/company.png" alt="company"/><p>'+product.manufacturer+'</p></div><div class="table-cell"><p class="test-code" id="'+product.manufacturer + '-' + product.id+'">loading</p></div><div class="table-cell"><p>'+product.color+'</p></div><div class="table-cell last-cell"><p>'+product.id+'</p></div></div>'

            }).join('');
            fetchAvailabilityData(manufacturersData);
            document.querySelector('#beanies-data').insertAdjacentHTML('afterbegin', html);
        })
        .catch(error => {
            console.log("LOL",error);
            //location.reload();

        });
}

fetchBeaniesData();


const fetchAvailabilityData = async (manufacturersData) => {

/*
    try {
        for (let i = 0; i<manufacturerData.length; i++) {
            const res = await fetch('https://cors-anywhere.herokuapp.com/https://bad-api-assignment.reaktor.com/v2/availability/' + manufacturerData[i]);
            const json = await res.json();
           console.log(json.response);
        }

    } catch (e) {
        console.log("not working",e);
    }
   */
    //console.log(JSON.stringify(manufacturersData,null,2));
    for (manufacturer in manufacturersData) {
        const currentManufacturer = manufacturer;
        fetch('https://bad-api-assignment.reaktor.com/v2/availability/' + currentManufacturer)
            .then(response => {
                if (!response.ok) {
                    throw Error("Error");
                    console.log('error');
                }
                return response.json();
            }).then(data => {
            const checkData = (data.response);
         //   console.log("DATA RESPONSE", JSON.stringify(checkData,null,2));

            console.log('line 75 log',currentManufacturer);
           // console.log("DATAPAYLOAD", checkData[0].DATAPAYLOAD);

     //       console.log(manufacturersData[manufacturer]);
            if(checkData.length > 0){
                console.log(checkData.length);
                checkData.forEach(function (product, index){
                    console.log("index " + index + "checkData " + checkData.length);

                    // console.log('manu ' + manufacturer + ' product ID ' + manufacturersData[manufacturer][productID]);
                    //sconsole.log("line 80",manufacturersData[manufacturer][productID]);
                    console.log(currentManufacturer + '-' + product.id.toLowerCase());
                    let element = document.getElementById(currentManufacturer + '-' + product.id.toLowerCase())
                    let dataPayLoad = product.DATAPAYLOAD.toString()


                    let strippedString = dataPayLoad.replace(/(<([^>]+)>)/gi, "");





                    if(element){
                        document.getElementById(currentManufacturer + '-' + product.id.toLowerCase()).innerHTML = strippedString.slice(6);
                    }
                    /*if (strippedString === "  200\n"+"  OUTOFSTOCK") {
                           if(element){
                               document.getElementById(currentManufacturer + '-' + product.id.toLowerCase()).innerHTML = 'OUTOFSTOCK';
                           }
                    } else if (strippedString === "  200\n"+"  INSTOCK") {
                        if(element){
                            document.getElementById(currentManufacturer + '-' + product.id.toLowerCase()).innerHTML = 'INSTOCK';
                        }
                    }*/
                });

            } else{
                console.log("all unavailable");
            }


            /*manufacturersData[manufacturer].forEach(function(productID, index) {
                console.log(document.getElementById(productID));
            })
*/
            // document.getElementById(productID);
        }).catch(error => {
            console.log("LOOOOOL",error);
            //location.reload();
        });
        //console.log(manufacturer)
    }

        /*fetch('https://cors-anywhere.herokuapp.com/https://bad-api-assignment.reaktor.com/v2/availability/' + manufacturersData[index])
            .then(response => {
                if (!response.ok) {
                    throw Error("Error");
                }
                return response.json();
            }).then(data => {
            console.log(data.response);

            // document.getElementById(productID);
        }).catch(error => {
            console.log(error);
        });
*/



    /*
        for (let i = 0; i<manufacturerData.length; i++) {

            console.log(i);

            await fetch('https://cors-anywhere.herokuapp.com/https://bad-api-assignment.reaktor.com/v2/availability/' + manufacturerData[i])
                .then(response =>  {
                    if (!response.ok) {
                        throw Error("Error");
                    }
                    return response.json();
                }).then(data =>{
                    console.log(data.response);

                    document.getElementsByClassName("test-code").innerHTML = "hellooooooo"
                }).catch(error => {
                    console.log(error);
                });

        }
    */
}

