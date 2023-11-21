# HTTP Client

HTTP Client is an advanced HTTP client library designed to streamline and simplify HTTP
requests in various JavaScript environments. Leveraging the powerful Axios framework as 
its foundation, it offers a user-friendly interface and comprehensive functionality for
making HTTP requests.

```bash
npm install @vasg/http-client
```

Create new instance of HTTP client. You can create multiple instances with different configuration

```typescript
import { HttpClient } from "@vasg/http-client";

const httpClient = new HttpClient({
  baseURL: "https://YOUR_API_DOMAIN.com",
}); 
```

You can make GET request like this:

```typescript
async function getUsers() {
  const response = await httpClient.get({
    route: {
      url: "users",
      method: "GET",
      isRequiredAuth: true,
    },
  });
}
```

Code beloved shows how you can du GET request with dynamic paths. 
URL will be parsed uses replacements object values 
```typescript
async function getPostsByUserId(userId: number) {
  return httpClient.get({
    route: {
      url: "users/:userId/posts",
      method: "GET",
      isRequiredAuth: true
    },
    replacements: {
      userId: userId
    }
  });
}
```

```typescript
async function updateUser(userId: number) {
  return httpClient.put({
    route: {
      url: "users/:userId",
      method: "PUT",
      isRequiredAuth: true
    },
    replacements: {
      userId: userId
    }
  });
}
```

You can find examples on ``src/examples.ts`` file

