import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log(__dirname);

const app = express();
const port = 3001;

app.get('/',(req,res)=>{
    res.sendFile(__dirname + '/index.html')
});

app.listen(port,()=>{
    console.log('서버 실행');
})