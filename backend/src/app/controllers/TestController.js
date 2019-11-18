
class TestController {
  async index(req, res) {

    return res.json({ message: "oieeeeeeee!" });
  }
}

export default new TestController();
