# Bullet Points

* avoiding global namespace pollution
* making our dependencies explicit
* Another thing to note is that CommonJS takes a server-first approach and synchronously loads modules. This matters because if we have three other modules we need to require, it’ll load them one by one. that works great on the server but, unfortunately, makes it harder to use when writing JavaScript for the browser. Suffice it to say that reading a module from the web takes a lot longer than reading from disk. For as long as the script to load a module is running, it blocks the browser from running anything else until it finishes loading. It behaves this way because the JavaScript thread stops until the code has been loaded.
* imports (require) are copies of exports and consequently not alive. see **non-live-views**
