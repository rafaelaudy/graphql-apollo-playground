# graphql-apollo-playground

# GraphQL server implementation demo

Hi!
I am playing with some GraphQL server implementation using the followinh excelent tutorials:

https://www.howtographql.com/graphql-js/

The UI is on this repo:

https://github.com/rafaelaudy/graphql-apollo-react

# How to start:

You will first need to generate and deploy the database with:

```
prisma deploy
```

Then you can start the server with:

```
yarn live
```

## Playground queries examples:

### Signup

```
mutation
{
  signup (email: "r@a", name: "Rafa", password: "r@a")
  {
    token
  }
}
```

### Post

Needs token in the Http Headers:

```
{
  "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJjanR2M3NpcHc3eHV2MGI2MHljMmswd2JqIiwiaWF0IjoxNTUzOTI2NjI2fQ.UCpuHTxiYTTBuKtF9ZWhSMQ8tqNi4PAOpkUHmUMGtQ0"
}

```

```
mutation
{
  post(
    url: "www.graphqlweekly.com"
    description: "New one 2"
  ) {
    id,
    url,
    description
  }
}
```

### Subscription

```
subscription
{
  newLink
  {
      id
      url
      description
      postedBy
      {
        id
        name
        email
      }
  }
}
```
