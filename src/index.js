/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

const url = "https://platzi-avo.vercel.app/api/avo";
const imgUrl = "https://platzi-avo.vercel.app/";
const app = document.querySelector('#app');

const formatPrice = (price) =>{
    const newPrice = new window.Intl.NumberFormat("en-EN",{
        style: "currency",
        currency: "USD"
    }).format(price)
    return newPrice;
}

//Web api
//Conectar al server
    async function fetchData(){
        const response = await fetch(url),
        responseJson = await response.json(),
        avocados = [];

        responseJson.data.forEach(item => {
            //crear imagen
            const img = document.createElement('img');
            img.src = imgUrl + item.image;

            //crear titulo
            const title = document.createElement('h2');
            title.textContent = item.name;
            title.className = "text-2xl text-red-600";

            //crear precio
            const price = document.createElement('div');
            price.textContent = formatPrice(item.price);

            //creando un contenedor para almacener los aguacates
            const container = document.createElement('div');

            container.append(img, title, price);

            avocados.push(container);
        });
        app.append(...avocados)
    }
    fetchData();
//Procesar la respuesta y convertirla en JSON
//JSON -> DATA -> renderizar info en el browser
