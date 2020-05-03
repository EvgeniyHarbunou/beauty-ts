import app from './app';

const PORT = 8080;

app.listen(PORT, () => {
    console.info('Express server listening on http://localhost:8080');
});