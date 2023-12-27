import express from 'express'

import {viewSong, SendMessageToServiceBus } from '../controllers/sendMessageServiceBus';

const router = express.Router()


//Routes 
router.get('/', function (req, res) {
   res.send('Hello World');
})
router.post("/sendmsgsvb", SendMessageToServiceBus)
router.get("/viewSong", viewSong)



module.exports = router;