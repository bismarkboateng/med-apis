# Consultations API

This is the documentation for the Med API, which allows you to create, retrieve, and search for patient consultations. The base route for all endpoints is `/api/consultations/`.

## Installation

To install the necessary dependencies, run:

```bash
npm install or yarn
```

## Endpoints

### 1. Create a Consultation

**Endpoint:** `/api/consultations/create`

**Method:** `POST`

**Description:** Creates a new consultation.

**Request Body:**
```json
{
    "patientId": "string",
    "doctorId": "string",
    "consultationDate": "string",
    "...."
}
```

**Response:**
- `201 Created` if the consultation is successfully created.
- `400 Bad Request` if the request body is invalid.

### 2. Get All Consultations

**Endpoint:** `/api/consultations/all`

**Method:** `GET`

**Description:** Retrieves all consultations.

**Response:**
- `200 OK` with a JSON array of consultations.
- `500 Internal Server Error` if there is an issue retrieving consultations.

### 3. Get a Consultation by Patient ID

**Endpoint:** `/api/consultations/:id/patient`

**Method:** `GET`

**Description:** Retrieves a specific consultation by patient ID.

**Path Parameters:**
- `id`: The ID of the patient whose consultation you want to retrieve.

**Response:**
- `200 OK` with the consultation details.
- `404 Not Found` if the consultation is not found.
- `500 Internal Server Error` if there is an issue retrieving the consultation.

### 4. Search Consultations

**Endpoint:** `/api/consultations/search`

**Method:** `GET`

**Description:** Searches for consultations based on query parameters.

**Query Parameters:**
- `patientId` (optional): The ID of the patient to filter consultations by.
- `doctorId` (optional): The ID of the doctor to filter consultations by.
- `date` (optional): The date of the consultation to filter by.

**Response:**
- `200 OK` with a JSON array of consultations matching the search criteria.
- `400 Bad Request` if the query parameters are invalid.
- `500 Internal Server Error` if there is an issue performing the search.

### 5. Patient Search

**Endpoint:** `/api/consultations/patient/search`

**Method:** `GET`

**Description:** Searches for patients.

**Query Parameters:**
- `name` (optional): The name of the patient to filter by.
- `email` (optional): The email of the patient to filter by.

**Response:**
- `200 OK` with a JSON array of patients matching the search criteria.
- `400 Bad Request` if the query parameters are invalid.
- `500 Internal Server Error` if there is an issue performing the search.

## Example Usage

### Create a Consultation

```bash
curl -X POST -H "Content-Type: application/json" -d '{
  "patientId": "12345",
  "doctorId": "67890",
  "consultationDate": "2024-06-05T14:30:00Z",
  "notes": "Patient reports feeling well."
}' http://localhost:3000/api/consultations/create
```

### Get All Consultations

```bash
curl -X GET http://localhost:3000/api/consultations/all
```

### Get a Consultation by Patient ID

```bash
curl -X GET http://localhost:3000/api/consultations/12345/patient
```

### Search Consultations

```bash
curl -X GET "http://localhost:3000/api/consultations/search?patientId=12345&doctorId=67890&date=2024-06-05"
```

### Patient Search

```bash
curl -X GET "http://localhost:3000/api/consultations/patient/search?name=John Doe&email=johndoe@example.com"
```

## Running the Server

To start the server, run:

```bash
yarn start:dev
```

The server will start on `http://localhost:3000`.