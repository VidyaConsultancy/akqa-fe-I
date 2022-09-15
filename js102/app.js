// Fetch API
fetch('https://fakestoreapi.com/products')
  .then(res => res.json())
  .then(data => {
    console.log(data)
  }).catch(error => {
    console.log('error', error);
  })

const fetchProductList = async () => {
  try {
    const res = await fetch('https://fakestoreapi.com/products')
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(`Error!`, error);
  }
}

class NotFoundError extends Error {
  constructor(message, code = 404) {
    super(message);
    this.code = code;

  }
}

const createAProduct = async (product) => {
  try {
    const res = await fetch('https://fakestoreapi.com/products', {
      method: 'POST',
      body: JSON.stringify(product),
      headers: {
        authorization: `Bearer token`,
        'x-api-key': 'asecurerandomstring'
      }
    });
    console.log(res);
    if(res.status !== 200) {
      throw new NotFoundError(res.statusText, res.status)
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(`Error!`, error);
  }
}

createAProduct({ title: 'A product name', description: 'A product description', price: 9.99, category: `Men's apparel`});
