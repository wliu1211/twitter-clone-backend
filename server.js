const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const connectDB = require('./config/db');
const cors = require('cors');

const users = require('./routes/user');
const accounts = require('./routes/account');
const tweets = require('./routes/tweet');
const follows = require('./routes/follow');
const likedTweet = require('./routes/likedTweet');
const retweet = require('./routes/retweet');
const notification = require('./routes/notification');
const message = require('./routes/message');

dotenv.config({ path: './config/config.env'})

connectDB();

const PORT = process.env.PORT || 5000;
const app = express();

app.use(express.json());
app.use(cors());

if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

app.use('/api/v1/twitter-clone/users', users);
app.use('/api/v1/twitter-clone/users', follows);
app.use('/api/v1/twitter-clone/accounts', accounts);
app.use('/api/v1/twitter-clone/tweets', tweets);
app.use('/api/v1/twitter-clone/tweets', likedTweet);
app.use('/api/v1/twitter-clone/tweets', retweet);
app.use('/api/v1/twitter-clone/notifications', notification);
app.use('/api/v1/twitter-clone/messages', message);

// app.use('/api/v1/')

const server = app.listen(
    PORT,
    console.log(`Server is running in ${process.env.NODE_ENV} mode on port ${process.env.PORT}`)
);

process.on('unhandledRejection', (err) => {
    console.log(`Error: ${err.message}`);
    server.close(() => process.exit(1));
})
