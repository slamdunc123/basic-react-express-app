const path = require('path');
const express = require('express');

const PORT = process.env.PORT || 5000;

const app = express();

// have node serve the files for out built React app

app.use(express.static(path.resolve(__dirname, '../client/build')));

// api endpoint

app.get('/api', (req, res) => {
	res.json({
		message: 'Hello from server!',
	});
});

// all other GET requests not handled before will return our React app

app.get('*', (req, res) => {
	res.sendFile(path.resolve(__dirname, '..client/build', 'index.html'));
});

app.listen(PORT, () => {
	console.log(`Server listening on ${PORT}`);
});
