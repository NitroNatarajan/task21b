

const productList = document.getElementById('product-list');

fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then(data => {
        data.forEach(product => {
            const productItem = document.createElement('div');
            productItem.classList.add('product-item');

            const img = document.createElement('img');
            img.src = product.image;
            productItem.appendChild(img);

            const title = document.createElement('h3');
            title.textContent = product.title;
            productItem.appendChild(title);

            const price = document.createElement('p');
            price.textContent = `$ ${product.price}`;
            productItem.appendChild(price);

            productList.appendChild(productItem);
        });
    })
    .catch(error => console.error('Error fetching products:', error));
