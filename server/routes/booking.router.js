const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

// GET users event
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
// POST users new event
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

// DELETE a users event
router.delete('/:id', (req, res) => {
  pool.query('DELETE FROM "booking" WHERE id=$1', [req.params.id])
  .then((result) => {
    res.sendStatus(200); 
  })
  .catch((error) => {
    console.log('Error deleting', error);
    res.sendStatus(500);
  })
});

router.put('/', (req, res) => {
  pool.query(`UPDATE booking SET feedback = $1 WHERE id=$2`, [req.body.feedback, req.body.id])
  .then((result) => {
    res.sendStatus(200);
  })
  .catch((err) => {
    console.log('error', err);
    res.sendStatus(500);
  })
});

module.exports = router;