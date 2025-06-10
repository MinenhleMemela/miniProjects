import app from './app.js';
const port = 3006;
app.listen(port, ()=>{
console.log('Server is running on http://localhost:%d', port);
});


app.get('/', (req, res) => {
    res.send('Welcome to the API!');
});


// Handle POST request to create a new resource
app.post('/', (req, res) => {
    const newData = req.body; 
    res.status(201).send(`Resource created: ${JSON.stringify(newData)}`);
});

// Handle PUT request to update an existing resource
app.put('/:id', (req, res) => {
    const id = req.params.id; 
    const updatedData = req.body; 
    res.send(`Resource ${id} updated with data: ${JSON.stringify(updatedData)}`);
});
