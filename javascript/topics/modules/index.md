## Why invent commonJs and AMD

The approaches in **patterns** all have one thing in common: the use of single global variable to wrap its code in a function, thereby creating a private namespace for itself using a closure scope. But these approaches have downsides:

1. you need to know the right dependency order to load your files in.
2. they can still lead to namespace collisions

Therefore, we'd better design a way to ask for a module's interface without going through the global space

## Why invent UMD

For projects that require you to support both AMD and CommonJS features, there’s yet another format: Universal Module Definition (UMD).
UMD essentially creates a way to use either of the two, while also supporting the global variable definition. As a result, UMD modules are capable of working on both client and server.

* [Javascript Modules: A Beginner's Guide](https://medium.freecodecamp.com/javascript-modules-a-beginner-s-guide-783f7d7a5fcc#.p3cs6bre5)
