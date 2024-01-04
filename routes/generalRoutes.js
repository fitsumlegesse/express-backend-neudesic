import express from 'express'
const router = express.Router()
import { DataToMongo } from '../controllers/DataToMongo';
import { ViewSong } from '../controllers/ViewSong';


//Routes 
router.get('/', function (req, res) {
   res.send('Hello World');
})
router.post('/addSong', DataToMongo);
router.get('/viewSong', ViewSong)




module.exports = router;