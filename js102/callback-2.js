document.addEventListener('DOMContentLoaded', () => {
  const searchForm = document.getElementById('searchForm');
  searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
  })
  const keywordSearch = document.getElementById('keywordSearch');
  keywordSearch.addEventListener('change', (e) => {
    const value = e.target.value.trim();
    if (value.length >= 3) {
      const xhr = new XMLHttpRequest();
      xhr.open('GET', 'https://fakestoreapi.com/in/products');
      xhr.send();
      xhr.onreadystatechange = (e) => {
        console.log(e.target.readyState, e.target.status);
        if (e.target.readyState === 4 && e.target.status === 200) {
          const response = e.target.response;
          const data = JSON.parse(response);
          const filteredData = data.filter(product => product.title.toLowerCase().includes(value.toLowerCase()));

          const body = document.body;
          const products = document.createElement('div');
          products.classList.add('products');
          const title = document.createElement('h2');
          title.innerText = 'Product list';

          filteredData.forEach(product => {
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
        } else {

        }
      }
    }
  })
})
