import {Injectable} from '@angular/core';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProdottoService {
  public observable?: Observable<number>

  constructor() {
    this.observable = new Observable<number>(subscriber => {
      let count = 0
      setInterval(() => {
        subscriber.next(count)
        count++
      }, 1000)
    })
  }
}
