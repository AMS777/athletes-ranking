const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const keys = require('./config/keys');

require('./models/Athlete');

mongoose
  .connect(
    keys.mongoUri,
    { useNewUrlParser: true },
  )
  .then(() => console.log('MongoDB connected.'))
  .catch(error => console.log(error));

const app = express();

app.use(bodyParser.json());

require('./routes/athletesRoutes')(app);

if (process.env.NODE_ENV === 'production') {
  // set production assets folder like main.js and main.css
  app.use(express.static('../client/build'));

  // serve up the index.html file if the route is unknown
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(
      path.resolve(__dirname, '..', 'client', 'build', 'index.html'),
    );
  });
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}.`));
