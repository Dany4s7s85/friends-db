const mongoose = require('mongoose');
const app = require('./app.js');

const port = process.env.PORT || 5000;

const DB = 'mongodb+srv://huxxnainali:Mh10015mh@cluster0.z85io.mongodb.net/natours?retryWrites=true&w=majority'
mongoose
  .connect(DB, {
  })
  .then(() => {
    console.log("connection is successfull");
  })
  .catch((err) => {
    console.log(err);
  });


const server = app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});

  process.on('unhandledRejection', err => {
    console.log('UNHANDLED REJECTION! :boom: Shutting down...');
    console.log(err.name, err.message);
    server.close(() => {
      process.exit(1);
    });
  });