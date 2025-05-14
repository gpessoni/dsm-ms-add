import app from './app';

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`MS de Soma rodando na porta ${PORT}`);
}); 