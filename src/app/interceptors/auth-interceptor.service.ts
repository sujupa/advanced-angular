import { HttpInterceptor, HttpRequest, HttpHandler, HttpEventType } from '@angular/common/http';
import { tap } from 'rxjs/operators';

export class AuthInterceptorService implements HttpInterceptor {

    intercept(req: HttpRequest<any>, next: HttpHandler) {
        console.log('[Interceptor] : Request is on the way');
        console.log('[Interceptor] : Intercepted URL ', req.url);


        const modifiedRequest = req.clone({ headers: req.headers.append('Auth', 'xyz') });

        return next.handle(modifiedRequest).pipe(tap((event) => {
            if (event.type === HttpEventType.Response) {
                console.log('[Interceptor] : Respone arrived, body data: ');
                console.log(event.body);
            }
        }));
    }

}