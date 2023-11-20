# HTTP Client

HTTP Client is an advanced HTTP client library designed to streamline and simplify HTTP
requests in various JavaScript environments. Leveraging the powerful Axios framework as 
its foundation, it offers a user-friendly interface and comprehensive functionality for
making HTTP requests.

```bash
npm install @vasg/http-client
```

After installation, you can simply import it from ``@vasg/http-client`` and use like this:

```typescript
import { HttpClient } from "@vasg/http-client";

const httpClient = new HttpClient({
  baseURL: "https://api.domain.com/v1",
});

httpClient.get({
  route: {
    url: "/users",
    method: "GET",
    isRequiredAuth: false,
  },
}).then(response => {
   // Handle successful response
   console.log('Response:', response.data);
 })
 .catch(error => {
   // Handle errors
   console.error('Error:', error);
 });
```

You can find more examples on ``src/examples.ts`` file

