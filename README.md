# Program 7 — Express.js REST API Server

## Objective
- Install Express and set up a basic server
- Respond with "Hello, World!" at GET /
- Create a REST API for a Product resource with:
  - GET /products — Returns all products
  - GET /products/:id — Returns a specific product
  - POST /addproducts — Adds a new product
  - PUT /updateproducts/:id — Updates an existing product
  - DELETE /deleteproducts/:id — Deletes a product
- Add middleware to log all incoming requests
- Use express.json() to parse incoming JSON payloads

## Prerequisites
- Node.js >= 18.x
- npm >= 9.x

## Setup & Run

1. Navigate to this folder:
   ```
   cd prog7
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the server:
   ```
   npm start
   ```
   Or with auto-reload using nodemon:
   ```
   npm run server
   ```

4. Server runs at: http://localhost:3000

## Testing the API

Use Postman, Thunder Client, or curl:

| Method | URL | Body (JSON) | Description |
|--------|-----|-------------|-------------|
| GET | http://localhost:3000/ | — | Hello World |
| GET | http://localhost:3000/products | — | Get all products |
| GET | http://localhost:3000/products/1 | — | Get product with id=1 |
| POST | http://localhost:3000/addproducts | `{"id": 4, "name": "samsung"}` | Add new product |
| PUT | http://localhost:3000/updateproducts/1 | `{"name": "xiaomi"}` | Update product id=1 |
| DELETE | http://localhost:3000/deleteproducts/2 | — | Delete product id=2 |

## Key Concepts
- Express.js REST API
- Express middleware (logging, JSON parsing)
- CRUD operations (Create, Read, Update, Delete)
- ES Modules (import/export) in Node.js
- Route parameters (req.params)
- Request body parsing (req.body)
