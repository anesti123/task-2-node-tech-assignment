# Task 2 - Node Tech Assignment

A Node.js API with TypeScript that handles greetings and name filtering.

## Table of Contents

1. Features
2. Project Structure
3. Installation
4. Usage
5. Testing
6. Troubleshooting

## Features

### GET /greet
**Description**:  
Greets the user. If a `name` is provided in the query, it returns `"Hello, {name}!"`. If no `name` is provided, it returns `"Hello, World!"`.

------------------------------------------
**Example (with name)**:  
`GET /greet?name=John`

**Response**:  
```json
{
  "message": "Hello, John!",
  "filteredNames": ["John", "Emily"]
}
```
------------------------------------------
**Example (with No Name)**:  
`GET /greet`

**Response**:  
```json
{
  "message": "Hello, World!",
}
```

## Project Structure

```plaintext
task-2-node-tech-assignment/
├── src/
│   ├── app.ts                       # Express application setup
│   ├── config/
│   │   └── constants.ts             # Configuration constants
│   ├── features/
│   │   └── greet/
│   │       ├── greet.controller.ts  # Route handlers
│   │       ├── greet.route.ts       # Route handlers
│   │       ├── greet.service.ts     # Business logic
│   │       └── greet.types.ts       # Type definitions
│   └── index.ts                     # Server entry point
├── tests/
│   └── greet.test.ts         # API test suite
├── .env                      # Environment variables
├── package.json              # Dependencies and scripts
├── tsconfig.json             # TypeScript config
└── README.md                 # Documentation
```
## Installation

### Prerequisites
- Node.js v18+
- npm (comes with Node.js)

### Steps
1. Clone the repository:
```bash
git clone https://github.com/anesti123/task-2-node-tech-assignment.git
cd ask-2-node-tech-assignment
```
2. Install dependencies:
```
npm install

```
3. Start the server:
```
npm run start
```
3. Verify it's running:
```
curl http://localhost:3000/greet
```

### Testing
```
 npm run test 
```
## Troubleshooting


Contact
For questions or feedback, please contact Anesti Andoni at anestiandoniii@gmail.com.