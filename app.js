const express = require('express');
const path = require('path');
const PORT = 3000;

const app = express();

app.use( express.json() );

app.use( express.static( path.join( __dirname, 'public' )));

const brandsRoutes = require('./src/routes/brandRoutes');
const flyersRoutes = require('./src/routes/flyersRouter')


app.use('/api/brand', brandsRoutes );
app.use('/api/brand', flyersRoutes );

app.listen( PORT , () => {
    console.log(`App is running on port ${PORT}`)
}); 