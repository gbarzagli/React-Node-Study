import { ServerBoot } from './decorators/server-boot-decorator';
import { ExampleController } from './controllers/example-controller';

@ServerBoot
export class Entry {
    public static controllers: Array<any> = [
        new ExampleController()
    ];
}
