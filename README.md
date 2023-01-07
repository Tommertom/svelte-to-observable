# Svelte Store to Observables
A simple function that takes a svelte store and converts it into an RXJS observable, so the developer can apply RXJS operators to it. As Svelte subscription mechanism already works very nicely with Observables, it could be a real addition to the ecosystem.

This library exports the `toObservable` function and the `fromSvelteStore` function which takes your Svelte Store (Readable, Writabel, Derived) and gives you an Observable back. 

Then you can add RXJS operators on them to do easy data transformations

# API for people coming from Svelte 
Typescript: `function toObservable<T>(svelteStore: Writable<T> | Readable<T>): Observable<T>`

Javscript: `function toObservable(svelteStore)`

# API for people coming from RxJS 
Typescript: `function fromSvelteStore<T>(svelteStore: Writable<T> | Readable<T>): Observable<T>`

Javscript: `function fromSvelteStore(svelteStore)`

# What is the difference?
Nothing - they are the same functions, just two diferent names.

# Example
Example svelte `+page.svelte` to show how to apply this function with a simple rxjs operator:
```
<script lang="ts">
	import { writable } from 'svelte/store';
	import { toObservable } from 'svelte-to-observable';
	import { map } from 'rxjs/operators';

	const w = writable<number>(0);
	const stuff = toObservable<number>(w).pipe(map((x) => x + 10));
	setTimeout(() => {
		w.set(2);
	}, 3000);
</script>

<h1>The count is {$stuff} or {$w}</h1>
<a href="/other">Go to other page so we can see unsubscribe run</a>

``` 
# Other
Also posted as issue for the Svelte ecosystem - hoping this/such function becomes part of the larger ecosystem https://github.com/sveltejs/svelte/issues/8173

