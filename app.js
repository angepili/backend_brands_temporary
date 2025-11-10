const express = require('express');
const path = require('path');
const PORT = 3000;

const app = express();

app.use( express.json() );

app.use( express.static( path.join( __dirname, 'public' )));

const flyersRoutes = require('./src/routes/flyerRoutes');
// const videotRoutes = require('./src/routes/videoRoutes');


app.use('/api/flyers', flyersRoutes );
// app.use('/api/videos', videotRoutes );

app.listen( PORT , () => {
    console.log(`App is running on port ${PORT}`)
}); 