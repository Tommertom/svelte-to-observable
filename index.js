import { writable, unsubscriber } from 'svelte/store';
import { Observable, from } from 'rxjs';

/**
 * Converts a Svelte store to an Observable.
 * @param {import('svelte/store').Writable<T> | import('svelte/store').Readable<T>} svelteStore - The Svelte store to convert.
 * @returns {Observable<T>} An Observable that emits the current value of the Svelte store on subscribe, and any subsequent updates.
 */
function toObservable(svelteStore) {
    let unsub;
    const obs = new Observable((subscriber) => {
        unsub = svelteStore.subscribe((val) => {
            subscriber.next(val);
        });

        /**
         * Unsubscribes from the Svelte store.
         * @returns {void}
         */
        return () => {
            unsub();
        };
    });

    return obs;
}
