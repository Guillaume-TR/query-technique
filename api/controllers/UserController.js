import AuthService from '../services/AuthService';

class UserController {

  async connection(request, response) {
    try
    {
      const email = request.body.email.trim();
      const password = request.body.password.trim();

      if (email && password) {
        const logged = await AuthService.login(email, password);

        if (!logged.error) {
          response.status(200).send(logged);
        } else response.status(401).send("Unauthorized")
      } else response.status(400).send("Bad request")
    }
    catch
    {
      response.status(500).send("Internal server error");
    }
  }
}

export default new UserController();
