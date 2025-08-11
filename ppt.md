
## POST -> create

```js
const newMovie = {
  name: "Inception",
  rating: 9.0,
  summary: "A mind-bending thriller",
  poster: "https://image.url/inception.jpg",
};

const response = await fetch(
  "https://68959014039a1a2b288f7c48.mockapi.io/movies",
  {
    method: "POST",
    body: JSON.stringify(newMovie), 
    headers: {
      "Content-Type": "application/json",
    },
  }
);

const data = await response.json();
console.log("Created Movie:", data);
```

<details>
<summary>Notes</summary>


Key points to explain in your PPT
method: "POST" → tells the server we’re creating something.

body: data we want to send (must be in JSON format).

headers: says the data is "application/json".

response.json() → converts server reply into usable JavaScript object.
</details>



<details>
<summary>working flow</summary>
 ➡️ JS Object → JSON.stringify → JSON String → sent in HTTP body → server parses JSON string.
</details>

# GET -> Read

```js
async function getMovies() {
    const response = await fetch(
      "https://68959014039a1a2b288f7c48.mockapi.io/movies/101"
    );
    const data = await response.json();
   
  } 
```



# PUT -> UpDate 

```js
async function updateItem(id, updatedData) {
  const response = await fetch(`https://api.example.com/items/${id}`, {
    method: "PUT",
      body: JSON.stringify(updatedData),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  console.log("Updated item:", data);
}

updateItem("123", { name: "New name", price: 99.99 });


  ```

# Delete -> Delete

```js
async function deleteItem(id) {
  try {
    const response = await fetch(`https://api.example.com/items/${id}`, {
      method: "DELETE",
    });
    const data = await response.json();
    console.log("Deleted item:", data);
    
  } catch (error) {
    console.error("Error deleting item:", error);
  }
}
```


