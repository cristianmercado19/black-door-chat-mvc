import { expect } from "chai";
import { MainController } from "./main.controller"
import { MainRouterMock } from "../router/main.router.mock";
import { TestNamingHelper } from "../../utils/utils";

function initializeDependencies() {
  const router = new MainRouterMock();
  const controller = new MainController(router);

  return { controller, router };
}

///////////
// TESTS
describe(TestNamingHelper.artifactName("MainController"), () => {
  describe(
    TestNamingHelper.scenarioName("Create New Room"), () => {
    createNewRoomScenario();
  })

  describe(
    TestNamingHelper.scenarioName("Join an existing Room"), () => {
    joinExistingRoomScenario();
  })
})

function createNewRoomScenario() {
  const { controller, router } = initializeDependencies();

  describe("When", () => {
    it("controller > createNewRoom", () => {
      controller.createNewRoom();
    });
  })

  describe("Then", () => {
    it("router > redirectToCreateNewRoom HasBeenCalled", () => {
      expect(router.redirectToCreateNewRoomHasBeenCalled).true;
    });

  })
}

function joinExistingRoomScenario() {
  const { controller, router } = initializeDependencies();

  describe("When", () => {
    it("controller > joinAnExistingRoom", () => {
      controller.joinAnExistingRoom();
    });
  })

  describe("Then", () => {
    it("router > redirectToJoinAnExistingRoom HasBeenCalled", () => {
      expect(router.redirectToJoinAnExistingRoomHasBeenCalled).true;
    });

  })
}

