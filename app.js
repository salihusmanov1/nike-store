const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');




const app = express();


app.set('view engine', 'ejs');
app.set('views', 'views');


const shopRoutes = require('./routes/shop');


app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/images', express.static(path.join(__dirname, 'images')));



app.use(shopRoutes);
app.listen(3000, () => {
  console.log('server is running on port 3000')
});


