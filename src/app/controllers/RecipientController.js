import Recipient from '../models/Recipient';

class RecipientController {
  async store(req, res) {
    const recipientExist = await Recipient.findOne({
      where: { name: req.body.name },
    });

    if (recipientExist) {
      return res.status(400).json({ error: 'Recipient already exists' });
    }

    const {
      id,
      name,
      street,
      complement,
      state,
      city,
      zip_code,
    } = await Recipient.create(req.body);

    return res.json({ id, name, street, complement, state, city, zip_code });
  }
}

export default new RecipientController();
