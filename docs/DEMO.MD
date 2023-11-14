# Demo

## Set up

To run the demo showcasing the Circuit Breaker Pattern in a Node.js application, follow these steps:

1. Clone the repository:

```bash
git clone [repository_url]
```

2. Navigate to the project repository

```bash
cd CircuiteBreakerDiplomadoG6/
```

3. Install the dependencies

```bash
npm install
```

4. Run the App

```bash
npm start
```

## Testing Scenarios

Explore the capabilities of the Circuit Breaker by testing various scenarios. The demo includes two endpoints:

### `/posts`

This endpoint retrieves a list of posts. Use the following curl command to make a request:

```bash
curl http://localhost:3000/posts
```

#### Expected Response

```json
[
  {
    "id": 1,
    "title": "Sample Post 1",
    "content": "This is the content of the first post."
  },
  {
    "id": 2,
    "title": "Sample Post 2",
    "content": "This is the content of the second post."
  }
]
```

### `/posts/:id`

This endpoint retrieves a specific post by ID. Replace :id with the desired post ID in the URL. For example:

```bash
curl http://localhost:3000/posts/1
```

#### Expected Response

```json
{
  "id": 1,
  "title": "Sample Post 1",
  "content": "This is the content of the first post."
}
```