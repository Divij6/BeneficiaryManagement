import express from 'express'

import verifyLogin from '../controllers/verifyLogin.js'
import registerForEvent from '../controllers/eventRegister.js'
import registerStudent from '../controllers/studentRegister.js'
import create_Event  from '../controllers/createEvents.js';
import fetch_events from '../controllers/fetchEvents.js'
import update_events from '../controllers/updateEvents.js';
import delete_event from '../controllers/deleteEvent.js';
const userRouter = express.Router()

userRouter.post('/studentRegister', registerStudent)
userRouter.post('/login', verifyLogin)
userRouter.post('/eventRegister', registerForEvent)
userRouter.post('/create-event', create_Event);
userRouter.get("/fetch-event",fetch_events)
userRouter.put('/update-events/:id', update_events);
userRouter.delete('/delete-event/:id', delete_event);
export default userRouter

