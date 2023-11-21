import { HttpClient } from "@lib";

const httpClient = new HttpClient({
  baseURL: "https://jsonplaceholder.typicode.com"
});

async function getUsers() {
  return httpClient.get({
    route: {
      url: "/users",
      method: "GET",
      isRequiredAuth: false
    }
  });
}

async function getPostsByUserId(userId: number) {
  return httpClient.get({
    route: {
      url: "users/:userId/posts",
      method: "GET",
      isRequiredAuth: false
    },
    replacements: {
      userId: userId
    }
  });
}

async function updateUser(userId: number) {
  return httpClient.put({
    route: {
      url: "users/:userId",
      method: "PUT",
      isRequiredAuth: false
    },
    replacements: {
      userId: userId
    }
  });
}

getUsers();
getPostsByUserId(1);

