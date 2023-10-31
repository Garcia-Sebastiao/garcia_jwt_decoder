garcia-jwt-decoder
==================

`garcia-jwt-decoder` decodes a JWT into an object.

## Instalation

`npm install garcia-jwt-decoder`

## Usage

```js
import decodeJwt from "./garcia-jwt-decode";

const token = decodeJwt(
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
);
console.log(token); // returns {"sub": "1234567890", "name": "John Doe", "iat": 1516239022};
```

## Tests
`npm run test` for simple test