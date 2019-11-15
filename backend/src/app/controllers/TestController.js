
class TestController {
  async index(req, res) {

    return res.json({ message: "oi" });
  }
}

export default new TestController();
