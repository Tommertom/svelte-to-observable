import { writable, type Writable, type Readable, type Unsubscriber } from 'svelte/store';
import { Observable, from } from 'rxjs';

export function toObservable<T>(svelteStore: Writable<T> | Readable<T>): Observable<T> {
  let unsub: Unsubscriber;
  const obs = new Observable<T>((subscriber) => {
    unsub = svelteStore.subscribe((val) => {
      subscriber.next(val);
    });

    // we return the teardown function that will unsubscribe from the svelte store
    return () => {
      unsub();
    };
  });

  return obs;
}