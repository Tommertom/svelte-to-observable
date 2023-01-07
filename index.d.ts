import type { Observable } from 'rxjs';
import type { Readable, Writable } from 'svelte/store';

/**
 * Converts a Svelte store to an Observable.
 * @param {Writable<T> | Readable<T>} svelteStore - The Svelte store to convert.
 * @returns {Observable<T>} An Observable that emits the current value of the Svelte store on subscribe, and any subsequent updates.
 */
export function toObservable<T>(svelteStore: Writable<T> | Readable<T>): Observable<T>;

/**
 * Converts a Svelte store to an Observable.
 * @param {Writable<T> | Readable<T>} svelteStore - The Svelte store to convert.
 * @returns {Observable<T>} An Observable that emits the current value of the Svelte store on subscribe, and any subsequent updates.
 */
export function fromSvelteStore<T>(svelteStore: Writable<T> | Readable<T>): Observable<T>;
