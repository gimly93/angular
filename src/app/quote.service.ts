import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import 'rxjs/Rx';
import {Observable} from "rxjs/Observable";
@Injectable()
export class  QuoteService{
constructor(private http: Http) {}
getQuotes(): Observable<any>{
    return this.http.get('http://homestead.app/api/quotes').map(
        (response: Response) => {
            return response.json().quotes;
        }
    );
}
}