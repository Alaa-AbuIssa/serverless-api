# serverless-api



## PULL Req: https://github.com/Alaa-AbuIssa/serverless-api/pull/1

## What is the root URL to your API?
https://1of8i1862l.execute-api.us-east-1.amazonaws.com/

## What are the routes?
/people : for get all records, and add by post.
/people/{id} : for get, update, and delete one record.
 POST method : add one record


### Routes
/people
- get

```
  [
     {
      "id": "819aef6-ceee-4252-bfae-6de4a24a3c1a",
      "name": "any",
      "age": any number
     }
  ]
  ```

/people/${id}
- get
    ```
     {
      "id": "819aef6-ceee-4252-bfae-6de4a24a3c1a",
      "name": "any",
      "age": any number
     }

  ```


/people
- post

send in the body {"name": "any" , "age":any number}

     {
      "id": "819aef6-ceee-4252-bfae-6de4a24a3c1a",
      "name": "any",
      "age": any number
     }

people/${id}
- put
send in the body {"name": "any" , "age":any number}
```
  {
       {
      "id": "819aef6-ceee-4252-bfae-6de4a24a3c1a",
      "name": "any",
      "age": any number
     }
  }
```
people/${id}
- delete
{}



## UML
<img src="./Blank diagram.png">