import express, {Request, Response, Router, NextFunction} from 'express';

export interface Server {
    controllers: Array<any>;
    prototype: any;
}

export function ServerBoot(constructor: Server) {
    const server = express();
    constructor.prototype.server = server;
    for (const controller of constructor.controllers) {
        const routes = Router();
        for (const method in controller) {
            const route = controller[method];
            if (route && route.routeProperties) {
                const { httpMethod, path } = route.routeProperties;
                const callback = (req: Request, res: Response, next: NextFunction) => {
                    return (controller[method](req, res, next));
                }
                routes[httpMethod](path, callback);
            }
        }
        server.use(controller.basePath, routes);
    }
    constructor.prototype.server.listen(3000, () => {
        console.log('[SERVER] Running at http://localhost:3000');
    });
}