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

- Used JavaScript instead of TypeScript because the provided file structure included `.js` files, so I assumed JS was the intended language
- Used plain React with useState/useEffect, no form libraries like react-hook-form or TanStack Query for fetching
- No component libraries like shadcn. all components are written from scratch
- CSS modules for styling instead of a framework, to keep it simple and scoped
- The endless carousel is built manually using the clone-edges technique - the first and last items are duplicated at the edges so the loop feels seamless without any jumps
- Disabled the prev/next carousel buttons while the slide animation is playing to prevent blank slides from appearing on fast clicks. I would implement lazy loading and fetch an initial batch of tasks and load more as the user approaches the end, instead of disable buttons. I didnt do this to stay aligned with the provided API definitions and avoid modifying them and lack of time.

## Time Spent

- Backend: ~1 hour
- Frontend: ~2 hours
