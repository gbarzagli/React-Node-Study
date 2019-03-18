import { Request, Response } from 'express';
import { Controller, HttpGet, HttpPost, HttpPut, HttpDelete } from '../decorators/rest-decorators';

@Controller('example')
export class ExampleController {
    @HttpGet()
    public get(req: Request, res: Response) {
        res.send('Hello from server.home')
    }

    @HttpPost()
    public post(req: Request, res: Response) {
        res.send('Server post method!')
    }
}