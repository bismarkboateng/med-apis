# Sleek API documentation

## Customers 
## Base URL
`http://localhost:300/api/customers`

## Endpoints

| Method | Endpoint                | Description                      | Request Body                      | Response                      |
|--------|--------------------------|----------------------------------|-----------------------------------|-------------------------------|
| GET    | `/`                      | Get all customers                | N/A                               | JSON array of customer objects|
| POST   | `/`                      | Create a new customer            | JSON object with customer details | JSON object of the new customer|
| PATCH  | `/:id/update`            | Update an existing customer      | JSON object with updated details  | JSON object of the updated customer|
| DELETE | `/:id/delete`            | Delete a customer                | N/A                               | JSON object with delete status |

## Detailed Endpoints

### Get All Customers

- **Endpoint:** `GET /`
- **Description:** Retrieves a list of all customers.
- **Request Body:** N/A
- **Response:** A JSON array containing customer objects.
  ```json
  [
    {
      "id": 1,
      "name": "John Doe",
      "email": "john.doe@example.com"
    },
    ...
  ]

### Create New Customer

- **Endpoint:** `POST /`
- **Description:** Creates a new customer.
- **Request Body:** A JSON object containing the details of the customer to be created.
  ```json
  [
    {
      "name": "John Doe",
      "email": "john.doe@example.com"
      ...
    },
    ...
  ]
- **Response:** A JSON array containing customer objects.
  ```json
  [
    {
      "id": 1,
      "name": "John Doe",
      "email": "john.doe@example.com"
      ...
    },
    ...
  ]


### Update an Existing Customer

- **Endpoint:** `PATCH /:id/update`
- **Description:** Updates an existing customer's details.
- **Request Body:**  A JSON object containing the updated details of the customer.
  ```json
  [
    {
      "name": "John Doe",
      ...
    },
    ...
  ]
- **Response:** A JSON object of the updated customer.
  ```json
  [
    {
      "id": 2,
      "name": "John Doe",
      "email": "john.doe@example.com"
      ...
    },
    ...
  ]


### Delete a Customer

- **Endpoint:** `DELETE /:id/delete`
- **Description:** Deletes a customer by ID.
- **Request Body:**  N/A
- **Response:** A JSON object of the updated customer.
  ```json
    {
     "message": "Customer deleted successfully."
    },

## NB: Products endpoints follow the same pattern

## Example Request

## get all customers
`curl -X GET http://localhost:300/`

## create a new customer
`curl -X POST http://localhost:300/ -H "Content-Type: application/json" -d '{
  "name": "Jane Doe",
  "email": "jane.doe@example.com"
 }' `

## Update an Existing Customer
`curl -X PATCH http://localhost:300/1/update -H "Content-Type: application/json" -d '{
  "name": "Jane Smith"
}'`

## delete a customer
`curl -X DELETE http://localhost:300/1/delete`