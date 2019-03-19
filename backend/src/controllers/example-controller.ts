import { Request, Response } from 'express';
import { Controller, HttpGet, HttpPost, HttpPut, HttpDelete } from '../decorators/rest-decorators';

@Controller('example')
export class ExampleController {
    @HttpGet()
    public get(req: Request, res: Response) {
        res.jsonp({ message: 'Hello from Get Method' });
    }

    @HttpPost()
    public post(req: Request, res: Response) {
        res.jsonp({ message: 'Hello from Post Method' });
    }
}