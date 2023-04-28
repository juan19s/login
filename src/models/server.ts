import express, { Application } from 'express';
import routesProduct from '../routes/product';

class Server {
    private app: Application;
    private port: string;

    constructor(){
        this.app = express();
        this.port = process.env.PORT || '3001';
        this.listen();
        this.routes();
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log(`Server running on port ${this.port}`);
        });
    }

    routes(){
        this.app.use('/api/products', routesProduct);
    }
}

export default Server;