import Event from '../models/Event'
import Registration from '../models/Registration'

class EventController {
  async index(req, res) {

    const { registered } = req.query;
    const { user_email } = req.headers;

    let registrations = null;

    if (registered) {
      registrations = await Registration.findAll({
        where: {
          user_email
        }
      })
    }

    if (registrations !== null) {
      const eventIds = []

      registrations.map(item => (
        eventIds.push(item.event_id)
      ));

      console.log(eventIds);

      const events = await Event.findAll({
        where: {
          id: eventIds
        }
      });
      return res.json(events);
    }

    const events = await Event.findAll({});

    return res.json(events);
  }
}

export default new EventController();
