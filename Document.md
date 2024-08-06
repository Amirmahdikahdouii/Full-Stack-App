# Documentation

For Interaction between Front-End and Back-End, there is a document here that will help you understand logic


### Sign-Up:

**Request:**

```json
{
    "phone_number": "09121234567",
    "password": "*********"
}
```

**Responses:**

- Success:

```json
{
    "message": "success"
}
```

- Errors:

1. Exist Phone Number:

```json
{
    "message": "Phone Number already exists"
}
```

2. Simple Password:

```json
{
    "message": "Password is too similar"
}
```
