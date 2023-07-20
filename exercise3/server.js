const express = require("express");
const app = express();
const connector = require('./DBConnect.js')
require("dotenv").config();
app.use(express.json());
app.use('/posts',require('./Routes/PostsRoutes'))
app.use('/likes',require('./Routes/LikesRoutes'))
app.use('/comments',require('./Routes/CommentsRoutes'))
app.use('/users',require('./Routes/UsersRoutes'))
const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});