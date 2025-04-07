let events = [];

exports.createEvent = (req, res) => {
  const { title, date, time, description } = req.body;
  const newEvent = { id: events.length + 1, title, date, time, description, participants: [] };
  events.push(newEvent);
  res.status(201).json(newEvent);
};

exports.updateEvent = (req, res) => {
  const { id } = req.params;
  const { title, date, time, description } = req.body;
  const event = events.find(event => event.id === parseInt(id));
  if (!event) {
    return res.status(404).json({ message: 'Event not found' });
  }
  event.title = title || event.title;
  event.date = date || event.date;
  event.time = time || event.time;
  event.description = description || event.description;
  res.json(event);
};

exports.deleteEvent = (req, res) => {
  const { id } = req.params;
  events = events.filter(event => event.id !== parseInt(id));
  res.json({ message: 'Event deleted' });
};

exports.registerForEvent = (req, res)
