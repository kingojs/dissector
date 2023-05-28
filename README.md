# Dissector

Dissector is a NodeJS module that allows a developer to work with Postman Collections. Using this module a developer can keep track of the code written for a collection to avoid using Postman UI and keep everything running from the terminal using CLI Runtimes (such as Newman).

Notice that Dissector cannot work with any kind of Postman Collection, it needs to be specificly as shown in the next example.

```
.
└── source_collection/
    ├── api_01/
    │   ├── test_case_01/
    │   │   ├── api_call_01
    │   │   └── api_call_02
    │   └── test_case_02/
    │       ├── api_call_01
    │       ├── api_call_02
    │       └── api_call_03
    └── api_02/
        ├── test_case_01/
        │   ├── api_call_01
        └── test_case_02/
            ├── api_call_01
            ├── api_call_02
            └── api_call_03
```

Prerequest and test scripts would be separated in different folders so now they can be easily tracked in a versioning manager (such as Git), the result would be something like this.

```
.
└── src/
    ├── api_01/
    │   ├── test_case_01/
    │   │   ├── api_call_01/
    │   │   │   ├── prerequest.js
    │   │   │   └── test.js
    │   │   ├── api_call_02/
    │   │   │   ├── prerequest.js
    │   │   │   └── test.js
    │   └── test_case_02/
    │       ├── api_call_01/
    │       │   ├── prerequest.js
    │       │   └── test.js
    │       ├── api_call_02/
    │       │   ├── prerequest.js
    │       │   └── test.js
    │       └── api_call_03/
    │           ├── prerequest.js
    │           └── test.js
    └── api_02/
        ├── test_case_01/
        │   ├── api_call_01/
        │   │   ├── prerequest.js
        │   │   └── test.js
        └── test_case_02/
            ├── api_call_01/
            │   ├── prerequest.js
            │   └── test.js
            ├── api_call_02/
            │   ├── prerequest.js
            │   └── test.js
            └── api_call_03/
                ├── prerequest.js
                └── test.js
```

Dissector also has the capability of inserting new code into the collection, which is one of the advantages of code dissecting.

## Dissector in action

In this example snippet we will get started by loading a collection from a file and generating the JavaScript code.

```javascript
var dissector = require('@kingo/dissector');

dissector.dissect('./my/sample/collection.json');
```

In this example snippet we will put the source code generated during the dissection into the original Postman Collection.

```js
var dissector = require('@kingo/dissector');

dissector.undissect('./my/sample/source/folder', './my/sample/collection.json');
```