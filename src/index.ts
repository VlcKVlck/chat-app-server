import server from './server';

const port = 3001;


server.listen(port,()=>{
    console.log(`Listening at port:${port}`)
})