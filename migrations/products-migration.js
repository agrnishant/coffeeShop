const dotenv = require('dotenv');
const mongoose = require('mongoose');
const Product = require('../models/product');

dotenv.config();

mongoose
.connect(process.env.MONGO_DB_URL, {
  useUnifiedTopology: true,
  useNewUrlParser: true
})
.then(() => console.log(`Connected to MongoDB to create products...`))
.catch((err) => console.error(err));


const products = [
    new Product({
        imagePath: 'https://unsplash.com/photos/j3FidswVdQk',
        title: 'Coffee',
        description: "\n" +
            "Hot Espressso",
        price: 25
    }),
    new Product({
        imagePath: 'https://unsplash.com/photos/hmLY7GiNFyE',
        title: 'Milk coffee',
        description: "High content of Milk in Coffee",
        price: 35
    }),
];

let done = 0;

for (let i = 0; i < products.length; i++) {
    products[i].save(function(err, result) {
        done++;
        if(done === products.length)
            exit();
    });
}
function exit() {
    mongoose.disconnect();
}
