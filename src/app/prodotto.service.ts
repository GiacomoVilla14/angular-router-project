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
        if (count > 5) {
          subscriber.complete()
        }
        if (count > 3) {
          subscriber.error(new Error("Errore"))
        }
      }, 1000)
    })
  }
}
