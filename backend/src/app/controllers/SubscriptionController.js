import Registration from '../models/Registration';

class SubscriptionController {
  async store(req, res) {

    const { user_email } = req.headers
    const { event_id } = req.body

    const registration = await Registration.create({
      presence: false,
      user_email,
      event_id
    })

    return res.json(registration);
  }

  async delete(req, res) {
    const { user_email } = req.headers
    const { event_id } = req.body

    const registration = await Registration.destroy({
      where: {
        event_id,
        user_email
      }
    })

    return res.json(registration);
  }
}

export default new SubscriptionController();
