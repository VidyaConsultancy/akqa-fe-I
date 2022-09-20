# TODOAPP

## WHY
- Schedule tasks
- Remember tasks
- Organise the day
- Organise the time

## HOW
- Technology

## WHAT
**MVP - Minimal Viable Product**
- [ ] Add a todo
- [ ] Modifiy a todo
  - [ ] Toggle todo status complete/incomplete
- [ ] Read a todo
- [ ] Read todos list
- [ ] Delete a todo

**Nice to have features**
- [ ] Todo limit warning for a day
- [ ] Rewards point on task/todo completion
- [ ] Reminder/alert

## DATA MODELING
**TODO MODEL**
```json
{
  "id": 1,
  "todo": "Learn React js",
  "isCompleted": false,
  "createdAt": "2022-09-16 11:11:11Z",
  "modifiedAt": "2022-09-16 11:11:11Z",
}
```

## REACTJS CONCEPTS
**COMPONENTS**
- A component is that create a UI part.
  1. Functional Component - javascript function
  2. Class Component - javascript class


## JSON SERVER - endpoint examples
**TODOS ENDPOINTS**
- GET     http://localhost:4000/todos
- GET     http://localhost:4000/todos/:id
- POST    http://localhost:4000/todos
- PUT     http://localhost:4000/todos/:id
- PATCH   http://localhost:4000/todos/:id
- DELETE  http://localhost:4000/todos/:id

**USER ENDPOINTS**
- GET     http://localhost:4000/users
- GET     http://localhost:4000/users/:id
- POST    http://localhost:4000/users
- PUT     http://localhost:4000/users/:id
- PATCH   http://localhost:4000/users/:id
- DELETE  http://localhost:4000/users/:id
