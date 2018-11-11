import { MainRouter } from "../router/main.router.interface";

export class MainController {
  
  private router: MainRouter;

  constructor(mainRouter: MainRouter) {
    this.router = mainRouter;
  }

  createNewRoom(): void {
    this.router.redirectToCreateNewRoom();
  }

  joinAnExistingRoom(): any {
    this.router.redirectToJoinAnExistingRoom();
  }

}