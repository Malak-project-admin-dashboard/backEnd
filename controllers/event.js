const Event = require('../models/event')

exports.addEvent = (req, res, next) => {
   const data = req.body;

  const myNewEvent = new Event({
    eventTitle: data.eventTitle,
    eventDesc: data.eventDesc,
    eventDate: data.eventDate
  });

  myNewEvent
    .save()
    .catch((err) => console.log(err));
   res.json("create a new event successfully");
};


exports.getAllEvents = (req, res, next) => {
  Event.find({})
  .then((events) => {
      res.status(200).json(events);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: err });
    });
};


exports.getEvents = (req, res, next) => {
  const EventsId = req.params.id;

  Event.findById(EventsId)
    .then((Event) => {
      if (!Event) {
        return res.status(404).json({ message: 'Event not found' });
      }
      res.status(200).json(Event);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: err });
    });
};

exports.deleteEvent = (req, res, next) => {
  const EventId = req.params.id;
  Event.findByIdAndDelete({ _id: EventId })
   .then(() => {
    res.status(200).json({ message: "Event deleted successfully" });
  })
  .catch((err) => {
    console.log(err);
    res.status(500).json({ error: err });
  });
};
