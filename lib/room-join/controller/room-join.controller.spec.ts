import { expect } from "chai";
import { it } from 'mocha';

import { RoomJoinController } from './room-join.controller';
import { RoomJoinServiceMock } from "../service/room-join.service.mock";
import { RoomJoinRouterMock } from "../router/room-join.router.mock";
import { RoomJoinViewMock } from "../view/room-join.view.mock";
import { TestNamingHelper } from "../../utils/utils";

function initializeDependencies() {
  const service = new RoomJoinServiceMock();
  const router = new RoomJoinRouterMock();
  const controller = new RoomJoinController(service, router);
  const view = new RoomJoinViewMock();

  return { controller, view, service, router };
}

////////////////////
// TEST
describe(TestNamingHelper.artifactName("RoomJoinController"), () => {
  describe(
    TestNamingHelper.scenarioName("On init"), () => {
    onInitScenario();
  })

  describe(
    TestNamingHelper.scenarioName("On first key has been entered"), () => {
    onFirstKeyHasBeenEnteredScenario();
  })

  describe(
    TestNamingHelper.scenarioName("On channel is opened"), () => {
    onChannelIsOpenedScenario();
  })
  
  describe(
    TestNamingHelper.scenarioName("On first key has been entered throw an exception"), () => {
    onFirstKeyHasBeenEnteredThrowAnExceptionScenario();
  })

})

function onInitScenario() {
  const { controller, view, service } = initializeDependencies();

  describe("Assert", () => {
    it('controller > initialized', () => {
      controller.init(view)
    });

    it('service > subscribeOnChannelIsOpened HasBeenCalled', () => {
      expect(service.subscribeOnChannelIsOpenedHasBeenCalled).true;
    });

  })
}

function onFirstKeyHasBeenEnteredScenario() {
  const { controller, view, service } = initializeDependencies();

  const firstKeyToReturn = '1234';
  const secondKeyToReturn = '4567';

  describe("Given", () => {
    it('controller > initialized', () => {
      controller.init(view)
    });

    it(`view > firstKeyToReturn is '${firstKeyToReturn}'`, () => {
      view.firstKeyToReturn = firstKeyToReturn;
    });

    it(`service > secondKeyToReturn is '${secondKeyToReturn}'`, () => {
      service.secondKeyToReturn = secondKeyToReturn;
    });
  })

  describe("When", () => {
    it('controller > firstKey HasBeenEntered', () => {
      controller.firstKeyHasBeenEntered()
    });
  })

  describe("Then", () => {
    it('view > hideErrorMessages HasBeenCalled', () => {
      expect(view.hideErrorMessagesHasBeenCalled).true;
    });

    it('view > hideWarningMessages HasBeenCalled', () => {
      expect(view.hideWarningMessagesHasBeenCalled).true;
    });

    it('view > hideFirstKey HasBeenCalled', () => {
      expect(view.hideFirstKeyHasBeenCalled).true;
    });

    it('view > showCreatingSecondKey HasBeenCalled', () => {
      expect(view.showCreatingSecondKeyHasBeenCalled).true;
    });

    it('view > getFirstKey HasBeenCalled', () => {
      expect(view.getFirstKeyHasBeenCalled).true;
    });

    it('service > createAnAnswerHas HasBeenCalled', () => {
      expect(service.createAnAnswerHasBeenCalled).true;
    });

    it(`service > createAnAnswer remoteOffer Param is '${firstKeyToReturn}'`, () => {
      expect(service.createAnAnswer_remoteOfferParam).eq(firstKeyToReturn);
    });

    it('view > setSecondKey HasBeenCalled', () => {
      expect(view.setSecondKeyHasBeenCalled).true;
    });

    it(`view > setSecondKey key Param is '${secondKeyToReturn}'`, () => {
      expect(view.setSecondKey_keyParam).eq(secondKeyToReturn);
    });

    it('view > hideCreatingSecondKey HasBeenCalled', () => {
      expect(view.hideCreatingSecondKeyHasBeenCalled).true;
    });

    it('view > showInstructions HasBeenCalled', () => {
      expect(view.showInstructionsHasBeenCalled).true;
    });

  })
}

function onChannelIsOpenedScenario() {
  const { controller, view, router, service } = initializeDependencies();

  describe("Given", () => {
    it('controller > initialized', () => {
      controller.init(view)
    });
  })

  describe("When", () => {
    it('service > notify Channel Is Open', () => {
      service.notifyChannelIsOpen();
    });
  })

  describe("Then", () => {
    it('router > redirectToChatRoom HasBeenCalled', () => {
      expect(router.redirectToChatRoomHasBeenCalled).true;
    });
  })
}

function onFirstKeyHasBeenEnteredThrowAnExceptionScenario() {
  const { controller, view, service } = initializeDependencies();
  const firstKeyToReturn = '1234';

  describe("Given", () => {
    it('controller > initialized', () => {
      controller.init(view)
    });

    it(`view > firstKeyToReturn is '${firstKeyToReturn}'`, () => {
      view.firstKeyToReturn = firstKeyToReturn;
    });

    it(`service > createAnAnswer will throw an exception'`, () => {
      service.createAnAnswerWillThrowAnException = true;
    });
  })

  describe("When", () => {
    it('controller > firstKey HasBeenEntered', () => {
      controller.firstKeyHasBeenEntered()
    });
  })

  describe("Then", () => {
    it('view > showErrorMessageAnswerHasNotBeenCreated HasBeenCalled', () => {
      expect(view.showErrorMessageAnswerHasNotBeenCreatedHasBeenCalled).true;
    });

    it('view > showFirstKey HasBeenCalled', () => {
      expect(view.showFirstKeyHasBeenCalled).true;
    });

    it('view > hideCreatingSecondKey HasBeenCalled', () => {
      expect(view.hideCreatingSecondKeyHasBeenCalled).true;
    });
  })
}