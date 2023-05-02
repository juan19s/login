import express, { Application } from 'express';
import routesProduct from '../routes/product';
import routesUser from '../routes/user';
import { Product } from './product';
import { User } from './user';

class Server {
    private app: Application;
    private port: string;

    constructor(){
        this.app = express();
        this.port = process.env.PORT || '3001';
        this.listen();
        this.middlewares();
        this.routes();
        this.dbConnection();
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log(`Server running on port ${this.port}`);
        });
    }

    routes(){
        this.app.use('/api/products', routesProduct);
        this.app.use('/api/users', routesUser);
    }

    middlewares(){
        this.app.use(express.json());
    }

    async dbConnection(){
        try {
            await Product.sync();
            await User.sync();
        } catch (error) {
            console.log('Pablo joto', error);
        }
    }
}

export default Server;