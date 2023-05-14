const express = require('express');
const cors = require('cors');
const categories = require('./categories.json');
const allCategories = require('./All_Categories.json');
const allNews = require('./All_News.json');
const app = express();
const port = 3000;

app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello');
})

app.get('/categories', (req, res) => {
    res.send(categories);
})

app.get('/category/:id', (req, res) => {
    const id = req.params.id;
    const data = allCategories.all_categories.find(item => item.category_id == id);
    res.send(data);
    
})
app.get('/news/:id', (req, res) => {
    const id = req.params.id;
    const news = allNews.news.find((item) => item._id == id);
    res.send(news);
})


app.listen(port);