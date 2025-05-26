## Nuxt useAsyncData

Hi!

I would like to point out what - I believe - are some "missing" from the docs regarding `useAsyncData`

- is it necessary to use `await` with `useAsyncData` ?
- how to handle multiple `useAsyncData` concurrently in a composable ?

### is it necessary to use `await` with `useAsyncData`

Nearly all examples in the [docs](https://nuxt.com/docs/api/composables/use-async-data) use `await` in front of `useAsyncData` (and `useFetch` alike). The only occurrence I found where `await` is not used is [here](https://nuxt.com/docs/api/composables/use-async-data#shared-state-and-option-consistency).

From what I found:

- `await` is _not necessary_ for Nuxt to wait for the call **server-side**. As long as you pass `server: true` (or nothing, it's the default), Nuxt waits for the completion of that call server-side.
- However, `await` is _necessary_ to wait for the call **client-side** (alongside `lazy: false` or nothing as it's the default).

Here are a few examples to clarify what I mean:

```
// blocks server-side + client-side navigation
const { data } = await useAsyncData( ... );

// blocks server-side. doesn't block client-side navigation (no 'await')
const { data } = useAsyncData( ... );

//  like 1st example: blocks server-side + client-side navigation
const { data } = await useAsyncData ( ..., { lazy: false });

//  blocks server-side. Doesn't block client-side navigation
// because no 'await'
const { data } =  useAsyncData ( ..., { lazy: false });

// blocks client-side navigation. Doesn't block server-side
const { data } =  await useAsyncData ( ..., { server:false, lazy: false });
```

The conclusion that I make from this is the following: **we always have to use `await` with `useAsyncData`**. If we don't use `await`, some options (e.g. `lazy`) don't work as per the docs.

Do you confirm this ? If yes, it would be great to explicit the fact that `await` is indeed mandatory and have some explanations on why.

### How to handle multiple `useAsyncData` concurrently in a composable ?

A very common pattern is having a component making concurrent calls to various endpoints. We may want to wrap these calls inside a composable, to be reused by multiple components.

So, if `await` is mandatory for `useAsyncData`, how do we handle multiple `useAsyncData` in a composable.

The following doesn't work:

##### A naive solution: client-side navigation is not blocked

```
// useFoo.ts
export function useFoo() {
    const { data: data1 } = useAsyncData( .. )
    const { data: data2 } = useAsyncData (... )

    return { data1, data2 }
}

// Foo.vue

// this doesn't block client-side navigation
const { data1, data2} = await useFoo()
```

##### Awaiting each useAsyncData: we lose the Nuxt context

We could also try this

```
// useFoo.ts
export async function useFoo() {
    const { data: data1 } = await useAsyncData( .. )
    const { data: data2 } = await useAsyncData (... )

    return { data1, data2 }
}
```

After the first await, we lose the we lose the Nuxt context and bump into the infamous error `A composable that requires access to the Nuxt instance was called outside of a plugin, Nuxt hook, Nuxt middleware, or Vue setup function`

##### A first solution: `Promise.all`

A work around is to wrap all `useAsyncData` calls in a Promise.all.

```
export  function useFoo() {
    return Promise.all([ useAsyncData (... ), useAsyncData (... )])
}
```

##### Another solution: awaiting the promises in the Nuxt component

Another pattern we found is to separate the promise with its "data". This works. However, it doesn't seem like a standard pattern so we're not sure what to think of it?

```
// useFoo.ts
export function useFoo() {
    const promise1 = useAsyncData( .. )
    const promise2 = useAsyncData (... )
    const { data: data1 } = promise1
    const { data: data2 } : promise2

    return { promise1, promise2, data1, data2 }
}

// Foo.vue
const { data1, data2, promise1, promise2 } = useFoo()
// thanks to these 'await', it now blocks client-side navigation
await promise1
await promise2

```

Conclusion: what do you make of this ? What is the recommended approach to make multiple `useAsyncData` calls inside a composable ? It also seems that the docs are lacking with regards to this.

I've added a bunch of examples in this [repo](https://github.com/timhn-bm/nuxt-use-async-data-tests)

Thanks a lot for the answers. I'm open to contributing to the docs if others share the same interrogations regarding `useAsyncData`.
