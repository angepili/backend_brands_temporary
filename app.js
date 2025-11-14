const express = require('express');
const path = require('path');
const cors = require('cors')
const { PREFIX_ENDPOINT } = require('./src/services/homeData')
const PORT = 3000;


const app = express();

app.use(cors())
app.use( express.json() );
app.use( express.static( path.join( __dirname, 'public' )));

const homeRoutes = require('./src/routes/homeRouter');
const brandsRoutes = require('./src/routes/brandRouter');
const promoRoutes = require('./src/routes/promoRouter')
const flyersRoutes = require('./src/routes/flyersRouter')

app.use(`/${PREFIX_ENDPOINT}/`, homeRoutes );
app.use(`/${PREFIX_ENDPOINT}/brand`, brandsRoutes );
app.use(`/${PREFIX_ENDPOINT}/brand`, promoRoutes );
app.use(`/${PREFIX_ENDPOINT}/promo`, flyersRoutes );

app.listen( PORT , () => {
    console.log(`App is running on port ${PORT}`)
}); 