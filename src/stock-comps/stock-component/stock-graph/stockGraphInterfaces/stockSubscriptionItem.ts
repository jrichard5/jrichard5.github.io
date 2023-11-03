import { Observable, Subscription } from "rxjs";

export interface stockSubscriptionItem{
    urlString : string;
    sub : Observable<any>
}