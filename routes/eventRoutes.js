
// routes/eventRoutes.js
const express = require('express');
const router = express.Router();
const {
  getEvents,
  createEvent,
  updateEvent,
  deleteEvent,
  registerForEvent,
} = require('../controllers/eventController');
const { authenticate, authorizeOrganizer } = require('../middleware/authMiddleware');

router.get('/', authenticate, getEvents);
router.post('/', authenticate, authorizeOrganizer, createEvent);
router.put('/:id', authenticate, authorizeOrganizer, updateEvent);
router.delete('/:id', authenticate, authorizeOrganizer, deleteEvent);
router.post('/:id/register', authenticate, registerForEvent);

module.exports = router;
