# Documentation

For Interaction between Front-End and Back-End, there is a document here that will help you understand logic


### Sign-Up:

Example of Json that will send from Front-End:

```json
{
    "phone_number": "09121234567",
    "password": "*********"
}
```

Responses:

**Success:**

```json
{
    "status_code": "200",
    "message": "success"
}
```

**Errors:**

1. Exist Phone Number:

```json
{
    "status_code": "409",
    "message": "Phone Number already exists"
}
```

2. Simple Password:

```json
{
    "status_code": "400",
    "message": "Password is too similar"
}
```
