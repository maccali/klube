import app from './app';

const PORT = 3333;
const HOST = '0.0.0.0';

console.log(`Rodando em modo  -->> ${process.env.NODE_ENV}`);
console.log(`Rodando no endereço http://${process.env.HOST}:${process.env.PORT}`);

app.listen(PORT, HOST);

// app.listen(3333);
