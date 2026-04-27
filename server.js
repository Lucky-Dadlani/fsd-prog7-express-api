import express, { json } from 'express';

const app = express();
app.use(json()); // This is required to parse JSON data

// Middleware to log requests to the console
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});

const products = [
  {
    id: 1,
    name: "mi"
  },
  {
    id: 2,
    name: "iphone"
  },
  {
    id: 3,
    name: "oppo"
  }
]

// GET all products
app.get('/products', (req, res) => {
  res.send(products);
});

// GET product by id
app.get('/products/:id', (req, res) => {
  const newData = products.filter(item => item.id.toString() === req.params.id)
  res.send(newData);
});

// POST add a new product
app.post('/addproducts', (req, res) => {
  const { id, name } = req.body;
  const newProduct = { id, name };
  products.push(newProduct);
  res.send(newProduct);
});

// PUT update an existing product
app.put('/updateproducts/:id', (req, res) => {
  const product = products.find(item => item.id.toString() === req.params.id);
  Object.assign(product, req.body);
  res.send(product);
});

// DELETE a product
app.delete('/deleteproducts/:id', (req, res) => {
  const index = products.findIndex(item => item.id.toString() === req.params.id);
  const deletedProduct = products.splice(index, 1);
  res.send(deletedProduct);
});
