import { MainRouter } from "../router/main.router.interface";
export declare class MainController {
    private router;
    constructor(mainRouter: MainRouter);
    createNewRoom(): void;
    joinAnExistingRoom(): any;
}
