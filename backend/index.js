  import express from "express"
  import cors from "cors"
  import path from "path"
  import { fileURLToPath } from 'url';
  import { dirname } from 'path';
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);

  const PORT = process.env.PORT || 3001;

  const app = express();
  app.use(cors())


  app.use(express.static(path.resolve(__dirname, '../src/components')));


  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../index.html', 'index.html'));
  });

 

  app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
  });

