const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');

const app = express();
const filePath = fs.readFileSync(path.resolve(__dirname, "sampledata.json"));
const file  = JSON.parse(filePath);

app.use(cors())
app.use(express.json())
app.use(express.static("build"))

app.get('/products', (req, res) => {
 
  res.json(file.products)

});

app.get('/users', (req,res)=>{
  res.json(file.users)
})

app.post('/orders' , (req,res)=>{
  const order = req.body
  const orderid = Math.floor(Math.random() * 101);
  order.id = orderid
  file.orders.push(order)
  res.json(order)
})
 
  
  const PORT = process.env.PORT || 3001;

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
  