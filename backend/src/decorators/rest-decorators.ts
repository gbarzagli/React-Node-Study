export function Controller(path: string) {
    return function<T extends {new (...args: any[]): {}}>(constructor: T) {
        return class extends constructor {
            public basePath = '/' + path;
        }
    }
}

export function HttpGet(path?: string) {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        descriptor.value.routeProperties = {
            httpMethod: 'get',
            path: path? `/${path}` : ''
        }
    }
}

export function HttpPost(path?: string) {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        descriptor.value.routeProperties = {
            httpMethod: 'post',
            path: path? `/${path}` : ''
        }
    }
}

export function HttpPut(path?: string) {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        descriptor.value.routeProperties = {
            httpMethod: 'put',
            path: path? `/${path}` : ''
        }
    }
}

export function HttpDelete(path?: string) {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        descriptor.value.routeProperties = {
            httpMethod: 'delete',
            path: path? `/${path}` : ''
        }
    }
}