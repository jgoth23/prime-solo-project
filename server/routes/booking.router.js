const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();


router.get('/', (req, res) => {
  const queryText = `SELECT * FROM booking WHERE booking.user_id = $1`
  pool.query(queryText, [req.user.id])
    .then((result) => {
      res.send(result.rows)
    })
    .catch((err) => {
      console.log('get error', err);
      res.sendStatus(500);
    })
});

router.post('/', (req, res) => {
  const newSession = req.body;
  console.log('req.user', req.user);
  console.log('new session', newSession);
  const queryText = `INSERT INTO booking (lessons, date, time, notes, feedback, user_id) 
                    VALUES ($1, $2, $3, $4, $5, $6)`;
  const queryValues = [
    newSession.lessons, 
    newSession.date,
    newSession.time, 
    newSession.notes,
    newSession.feedback,
    req.user.id
  ];
  pool.query(queryText, queryValues)
    .then(() => {res.sendStatus(201); 
    })
    .catch((err) => {
      console.log('error in booking', err);
      res.sendStatus(500);
    });
  
});

module.exports = router;