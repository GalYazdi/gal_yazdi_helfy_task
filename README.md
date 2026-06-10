## Setup and Installation

### Setup

- Node.js
- npm

### Install instructions

**Backend:**

`- cd Helfy-Ex-Server`

`- npm install`

**Frontend:**

`- cd Helfy-Ex`

`- npm install`

## How to run both frontend and backend

**Backend:**

`- cd Helfy-Ex-Server`

`- npm run dev`

**Frontend:**

`- cd Helfy-Ex`

`- npm run dev`

## API Documentation

Base URL: `http://localhost:4000/api/tasks`

**GET** `/` - returns all tasks

**POST** `/` - creates a new task, body: `{ title, description, priority }`

**PUT** `/:id` - updates a task by id, body: `{ title, description, priority }`

**DELETE** `/:id` - deletes a task by id

**PATCH** `/:id/toggle` - toggles the completed field of a task

## Assumptions & Design Decisions

- Used plain React with useState/useEffect, no form libraries like react-hook-form
- No component libraries like shadcn. all components are written from scratch
- CSS modules for styling instead of a framework, to keep it simple and scoped
- The endless carousel is built manually using the clone-edges technique - the first and last items are duplicated at the edges so the loop feels seamless without any jumps
- Disabled the prev/next carousel buttons while the slide animation is playing to prevent blank slides from appearing on fast clicks

## Time Spent

- Backend: ~1 hour
- Frontend: ~2 hours


