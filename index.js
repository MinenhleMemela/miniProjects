const app= require('./app');
const port = 3006;
app.listen(port, ()=>{
console.log('Server is running on http://localhost:%d', port);
});

/*app.get("/", (req, res) => {
    res.send("<h1>byte blossoms api</h1>");
});*/



// Default route
app.get('/', (req, res) => {
    res.send('Welcome to the API!');
});


// Handle POST request to create a new resource
app.post('/', (req, res) => {
    const newData = req.body; // Assuming you send data in the request body
    // Logic to save newData to the database or perform some action
    res.status(201).send(`Resource created: ${JSON.stringify(newData)}`);
});

// Handle PUT request to update an existing resource
app.put('/:id', (req, res) => {
    const id = req.params.id; // Get the ID from the URL
    const updatedData = req.body; // Get the updated data from the request body
    // Logic to update the resource with the specified ID
    res.send(`Resource ${id} updated with data: ${JSON.stringify(updatedData)}`);
});
