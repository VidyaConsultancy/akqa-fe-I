// XHR => XMLHttpRequest
// Ajax => Async javascript and XML (JSON)

const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://fakestoreapi.com/products');
xhr.onreadystatechange = (e) => {
  if (e.target.readyState === 4 && e.target.status === 200) {
    const response = e.target.response;
    const data = JSON.parse(e.target.response);
    const body = document.body;
    const products = document.createElement('div');
    products.classList.add('products');
    const title = document.createElement('h2');
    title.innerText = 'Product list';

    data.forEach(product => {
      const productCard = document.createElement('div');
      productCard.classList.add('product');
      const name = document.createElement('h3');
      name.innerText = product.title;
      const desc = document.createElement('p');
      desc.innerText = product.description;
      productCard.append(name);
      productCard.append(desc);
      products.append(productCard);
    });
    body.append(products);
  }
}
// xhr.addEventListener('readystatechange', (e) => {
//   console.log(e);
// })
xhr.send();
