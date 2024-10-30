import express from "express"
import {resolve} from "path"
import subTodoRoutes from "./routes/subTodoRoutes.js";
import mongoose from "mongoose";

const app = express();
const port = 3010;
app.use(express.json()); // This line is essential for parsing JSON payloads

app.use(express.static('static'));

mongoose.connect('mongodb://localhost:27017/todos')
.then(() => {
  console.log('Connected to MongoDB');
})
.catch((error) => {
  console.error('MongoDB connection error:', error);
});

app.get('/', (req, res) => {
  res.sendFile(resolve(__dirname, 'pages/index.html'));
});

app.use('/api', subTodoRoutes)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});