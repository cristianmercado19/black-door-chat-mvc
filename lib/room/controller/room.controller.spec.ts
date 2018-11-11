import { RoomViewMock } from '../view/room.view.mock';
import { RoomController } from './room.controller';
import { RoomRouterMock } from '../router/room.router.mock';
import { RoomServiceMock } from '../service/room.service.mock';
import { expect } from "chai";
import { TestNamingHelper } from '../../utils/utils';

function initializeDependencies() {
  const service = new RoomServiceMock();
  const router = new RoomRouterMock();
  const controller = new RoomController(service, router);
  const view = new RoomViewMock();

  return { controller, view, service, router };
}

////////////////////
// TEST
describe(TestNamingHelper.artifactName("RoomController"), () => {
  describe(
    TestNamingHelper.scenarioName("Init"), () => {
      initScenario();
    })

  describe(
    TestNamingHelper.scenarioName("Send a Message"), () => {
      sendAMessageScenario();
    })

  describe(
    TestNamingHelper.scenarioName("Send an empty Message"), () => {
      sendMessageWithoutContentScenario();
    })

  describe(
    TestNamingHelper.scenarioName("A new Message has arrived"), () => {
      aNewMessageHasArrivedScenario();
    })

  describe(
    TestNamingHelper.scenarioName("A Ping Message has arrived"), () => {
      aPingMessageHasArrivedScenario();
    })

  describe(
    TestNamingHelper.scenarioName("Sending is Typing"), () => {
      sendingIsTypingScenario();
    })

  describe(
    TestNamingHelper.scenarioName("Receiving is Typing"), () => {
      receivingIsTypingScenario();
    })

  describe(
    TestNamingHelper.scenarioName("Leave the room"), () => {
      leaveTheRoomScenario();
    })

  describe(
    TestNamingHelper.scenarioName("Partner leave the room"), () => {
      partnerLeaveTheRoomScenario();
    })

  describe(
    TestNamingHelper.scenarioName("Sending go Home"), () => {
      sendingGoHomeScenario();
    })
  
})

function initScenario() {
  const { controller, view, service } = initializeDependencies();

  describe("When", () => {
    it('controller > initialized', async () => {
      await controller.init(view)
    });
  })

  describe("Then", () => {
    it('view > addMessageYouAreIn HasBeenCalled', () => {
      expect(view.addMessageYouAreInHasBeenCalled).true;
    });

    it('service > subscribeOnNewMessageArrive HasBeenCalled', () => {
      expect(service.subscribeOnNewMessageArriveHasBeenCalled).true;
    });
    
    it('service > subscribeOnPing HasBeenCalled', () => {
      expect(service.subscribeOnPingHasBeenCalled).true;
    });
    
    it('service > subscribeOnOtherIsTyping HasBeenCalled', () => {
      expect(service.subscribeOnOtherIsTypingHasBeenCalled).true;
    });

    it('service > subscribeOnDisconnect HasBeenCalled', () => {
      expect(service.subscribeOnDisconnectHasBeenCalled).true;
    });
  })
}

function sendAMessageScenario() {
  const { controller, view, service } = initializeDependencies();
  const message = 'MESSAGE-FROM-ME';
  view.getMessage_returnValue = message;

  describe("Given", () => {
    it('controller > initialized', async () => {
      await controller.init(view)
    });
  })

  describe("When", () => {
    it('controller > sendMessage', () => {
      controller.sendMessage();
    });
  })

  describe("Then", () => {
    it('view > getMessage HasBeenCalled', () => {
      expect(view.getMessageHasBeenCalled).true;
    });

    it('view > cleanInput HasBeenCalled', () => {
      expect(view.cleanInputHasBeenCalled).true;
    });

    it('view > addMessageFromYou HasBeenCalled', () => {
      expect(view.addMessageFromYouHasBeenCalled).true;
      expect(view.addMessageFromYou_messageParam).equals(message);
    });

    it('service > sendMessage HasBeenCalled', () => {
      expect(service.sendMessageHasBeenCalled).true;
      expect(service.sendMessage_messageParam).equals(message);
    });
  })

}

function aNewMessageHasArrivedScenario() {
  const { controller, view, service } = initializeDependencies();
  const newMessage = 'NEW-MESSAGE-ARRIVED';

  describe("Given", () => {
    it('controller > initialized', async () => {
      await controller.init(view)
    });
  })

  describe("When", () => {
    it('service > messageHasArrived', () => {
      service.messageHasArrived(newMessage)
    });
  })

  describe("Then", () => {
    it('view > addNewMessage HasBeenCalled', () => {
      expect(view.addNewMessageHasBeenCalled).true;
      expect(view.addNewMessage_messageParam).equals(newMessage);
    });
  })
}

function sendMessageWithoutContentScenario() {
  const { controller, view, service } = initializeDependencies();

  describe("Given", () => {
    it('controller > initialized', async () => {
      await controller.init(view)
    });
  })

  describe("When", () => {
    it('controller > sendMessage', () => {
      controller.sendMessage()
    });
  })

  describe("Then", () => {
    it('view > getMessage', () => {
      expect(view.getMessageHasBeenCalled).true;
    });

    it('view > cleanInput NOT HasBeenCalled', () => {
      expect(view.cleanInputHasBeenCalled).false;
    });

    it('view > addMessageFromYou NOT HasBeenCalled', () => {
      expect(view.addMessageFromYouHasBeenCalled).false;
    });

    it('service > sendMessage NOT HasBeenCalled', () => {
      expect(service.sendMessageHasBeenCalled).false;
    });
  })

}

function aPingMessageHasArrivedScenario() {
  const { controller, view, service } = initializeDependencies();

  describe("Given", () => {
    it('controller > initialized', async () => {
      await controller.init(view)
    });
  })

  describe("When", () => {
    it('service > pingHasArrived', () => {
      service.pingHasArrived();
    });
  })

  describe("Then", () => {
    it('view > showPing HasBeenCalled', () => {
      expect(view.showPingHasBeenCalled).true;
    });
  })
}

function sendingIsTypingScenario() {
  const { controller, view, service } = initializeDependencies();

  describe("Given", () => {
    it('controller > initialized', async () => {
      await controller.init(view)
    });
  })

  describe("When", () => {
    it('controller > isTyping', () => {
      controller.isTyping();
    });
  })

  describe("Then", () => {
    it('service > sendIsTypingMessage HasBeenCalled', () => {
      expect(service.sendIsTypingMessageHasBeenCalled).true;
    });
  })
}

function receivingIsTypingScenario() {
  const { controller, view, service } = initializeDependencies();

  describe("Given", () => {
    it('controller > initialized', async () => {
      await controller.init(view)
    });
  })

  describe("When", () => {
    it('service > otherIsTyping', () => {
      service.otherIsTyping();
    });
  })

  describe("Then", () => {
    it('view > showIsTyping HasBeenCalled', () => {
      expect(view.showIsTypingHasBeenCalled).true;
    });
  })
}

function leaveTheRoomScenario() {
  const { controller, view, service, router } = initializeDependencies();

  describe("Given", () => {
    it('controller > initialized', async () => {
      await controller.init(view)
    });
  })

  describe("When", () => {
    it('controller > leaveTheRoom', () => {
      controller.leaveTheRoom();
    });
  })

  describe("Then", () => {
    it('server > disconnect HasBeenCalled', () => {
      expect(service.disconnectHasBeenCalled).true;
    });

    it('router > redirectToMain HasBeenCalled', async () => {
      expect(router.redirectToMainHasBeenCalled).true;
    });

  })
}

function partnerLeaveTheRoomScenario() {
  const { controller, view, service, router } = initializeDependencies();

  describe("Given", () => {
    it('controller > initialized', async () => {
      await controller.init(view)
    });
  })

  describe("When", () => {
    it('service > disconnect', () => {
      service.disconnect()
    });
  })

  describe("Then", () => {
    it('view > disableSendAction HasBeenCalled', () => {
      expect(view.disableSendActionHasBeenCalled).true;
    });

    it('view > showWarningMessagePartnerDisconnected HasBeenCalled', () => {
      expect(view.showWarningMessagePartnerDisconnectedHasBeenCalled).true;
    });

    it('view > hideLeaveTheRoomAction HasBeenCalled', () => {
      expect(view.hideLeaveTheRoomActionHasBeenCalled).true;
    });

    it('view > showGoHomeAction HasBeenCalled', () => {
      expect(view.showGoHomeActionHasBeenCalled).true;
    });

    it('service > initialize HasBeenCalled', () => {
      expect(service.initializeHasBeenCalled).true;
    })

  })
}

function sendingGoHomeScenario() {
  const { controller, view, router} = initializeDependencies();

  describe("Given", () => {
    it('controller > initialized', async () => {
      await controller.init(view)
    });
  })

  describe("When", () => {
    it('controller > goHome', () => {
      controller.goHome();
    });
  })

  describe("Then", () => {
    it('router > redirectToMain HasBeenCalled', () => {
      expect(router.redirectToMainHasBeenCalled).true;
    });
  })
}
