# Redux Sample

This repo contains simple implementaion of redux, **_not implemented in any framework_**

Credit to: [Codevolution's Youtube Playlist](https://www.youtube.com/playlist?list=PLC3y8-rFHvwheJHvseC3I0HuYI2f46oAK)

### Index

The following things are implemented in this repos:

- [Simple Redux Store](https://github.com/prashant1k99/redux-example/tree/singleModule) : [`singleModule`](https://github.com/prashant1k99/redux-example/tree/singleModule)
- [Double Module Redux Store](https://github.com/prashant1k99/redux-example/tree/doubleModule) : [`doubleModule`](https://github.com/prashant1k99/redux-example/tree/doubleModule)
- [Modular Redux Store](https://github.com/prashant1k99/redux-example/tree/modular-code) : [`modular-code`](https://github.com/prashant1k99/redux-example/tree/modular-code)
- [Middleware Implementation in Redux Store](https://github.com/prashant1k99/redux-example/tree/middleware) : [`middleware`](https://github.com/prashant1k99/redux-example/tree/middleware)
- [Async Implementation in redux Store](https://github.com/prashant1k99/redux-example/tree/async-actions) : [`async-actions`](https://github.com/prashant1k99/redux-example/tree/async-actions)

### **_Please checkout in the respective branch in order to see the CODE_**

### Implementaion:

#### Installation

```sh
npm install redux
```

**_Note: Redux can also be used irrespective of any framewrok or even in vanilla js_**

#### Core Concepts

| Redux       | Purpose                               |
| ----------- | ------------------------------------- |
| **Store**   | _Holds the state of yout application_ |
| **Action**  | _Describes what happened (Intent)_    |
| **Reducer** | _Ties the store and actions together_ |

#### Three Principles of Redux

1. The state of your whole application is stored in an object tree within a single store.
2. The only way to change the state is to emit an action, an object describing what happened.
3. To specify how the state tree is transformed by actions, you write pure reducers.

```js
const reducer = (previousState, action) => newState
```

#### Overview

![Overview Image of Redux from Redux Official Documentation](https://redux.js.org/assets/images/one-way-data-flow-04fe46332c1ccb3497ecb04b94e55b97.png)
