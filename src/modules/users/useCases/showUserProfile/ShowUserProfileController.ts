import { Request, Response } from "express";

import { ShowUserProfileUseCase } from "./ShowUserProfileUseCase";

class ShowUserProfileController {
  constructor(private showUserProfileUseCase: ShowUserProfileUseCase) {}

  handle(request: Request, response: Response): Response {
    try {
      const { user_id } = request.params;

      const profile = this.showUserProfileUseCase.execute({ user_id });

      return response.status(200).json(profile);
    } catch (error) {
      return response
        .status(404)
        .json({ error: error.message || error.toString() });
    }
  }
}

export { ShowUserProfileController };
