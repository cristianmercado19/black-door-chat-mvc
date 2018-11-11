import {CreateRoomController} from './create-room.controller';
import { expect } from "chai";
import { it } from 'mocha';
import { CreateRoomServiceMock } from '../service/create-room.service.mock';
import { CreateRoomViewMock } from '../view/create-room.view.mock';
import { CreateRoomRouterMock } from '../router/create-room.router.mock';
import { TestNamingHelper } from '../../utils/utils';

function initializeDependencies() {
  const service = new CreateRoomServiceMock();
  const router = new CreateRoomRouterMock();
  const controller = new CreateRoomController(service, router);
  const view = new CreateRoomViewMock();

  return { controller, view, service, router };
}

////////////////////
// TEST
describe(TestNamingHelper.artifactName("CreateRoomController"), () => {
  describe(
    TestNamingHelper.scenarioName("On init"), () => {
    onInitScenario();
  })

  describe(
    TestNamingHelper.scenarioName("An offer is Loaded"), () => {
    anOfferIsLoadedScenario();
  })

  describe(
    TestNamingHelper.scenarioName("Offer is shared"), () => {
    anOfferIsSharedScenario();
  })

  describe(
    TestNamingHelper.scenarioName("Second key is entered"), () => {
    secondKeyIsEnteredScenario();
  })

  describe(
    TestNamingHelper.scenarioName("Offer can not be created"), () => {
    offerCanNotBeCreatedScenario();
  })
  
  describe(
    TestNamingHelper.scenarioName("Second key is empty"), () => {
    secondKeyIsEmptyScenario();
  })

  describe(
    TestNamingHelper.scenarioName("Second key is not valid"), () => {
    secondKeyIsNotValidScenario();
  })

  describe(
    TestNamingHelper.scenarioName("Hide opening room when the second key is invalid"), () => {
    hideOpeningRoomWhenSecondKeyIsNotValidScenario()
  })

  describe(
    TestNamingHelper.scenarioName("Hide messages when Second Key is entered"), () => {
    hideMessagesWhenSecondKeyIsEnteredScenario()
  })

})

function onInitScenario() {
  const { controller, view, service } = initializeDependencies();
  
  const offerToReturn = 'TEST-1234';
  service.offerToReturn = offerToReturn;

  describe("When", () => {
    it('controller > initialized', async () => {
      await controller.init(view)
    });    
  })

  describe("Then", () => {
    
    it("view > showCreatingRoom HasBeenCalled", () => {
      expect(view.showCreatingRoomHasBeenCalled).true;
    });

    it('service> creatNewOffer HasBeenCalled', () => {
      expect(service.creatNewOfferHasBeenCalled).true;      
    });
    
    it('view> showFirstKey HasBeenCalled', () => {
      expect(view.showFirstKeyHasBeenCalled).true;      
      expect(view.showFirstKey_firstKeyParam).equals(offerToReturn);            
    });

    it('view> hideCreatingRoom HasBeenCalled', () => {
      expect(view.hideCreatingRoomHasBeenCalled).true;      
    });
  })
}

function anOfferIsLoadedScenario() {
  const { controller, view } = initializeDependencies();

  describe("Given", () => {
    it('controller > init', async () => {
      await controller.init(view)
    });    
  })

  describe("When", () => {
    it('controller > shareFirstKey', () => {    
      controller.shareFirstKey();
    });    
  })

  describe("Then", () => {
    it('view> shareKeyByEmail HasBeenCalled', () => {
      expect(view.shareKeyByEmailHasBeenCalled).true;      
    });  
  })
}

function anOfferIsSharedScenario() {
  const { controller, view} = initializeDependencies();

  describe("Given", () => {
    it('controller > init', async () => {
      await controller.init(view)
    });    
  })

  describe("When", () => {
    it('controller > firstKeyHasBeenShared', () => {    
      controller.firstKeyHasBeenShared();
    });  
  })

  describe("Then", () => {
    it('view > hideFirstKey HasBeenCalled', () => {    
      expect(view.hideFirstKeyHasBeenCalled).true;      
    }); 

    it('view > showSecondKey HasBeenCalled', () => {    
      expect(view.showSecondKeyHasBeenCalled).true;      
    }); 
  })
}

function secondKeyIsEnteredScenario(){
  const { controller, view, service, router} = initializeDependencies();

  const secondKeyToReturn = 'Second-Key-1234'
  view.secondKeyToReturn = secondKeyToReturn;

  describe("Given", () => {
    it('controller > init', async () => {
      await controller.init(view)
    });    
  })

  describe("When", () => {
    it('controller > secondKeyIsEntered', () => {    
      controller.secondKeyIsEntered();
    });  
  })

  describe("Then", () => {
    it('view > showOpeningRoom HasBeenCalled', () => {    
      expect(view.showOpeningRoomHasBeenCalled).true;      
    }); 
    it('view > getSecondKey HasBeenCalled', () => {    
      expect(view.getSecondKeyHasBeenCalled).true;      
    }); 
    it('service > setupAnswer HasBeenCalled', () => {
      expect(service.setupAnswerHasBeenCalled).true;      
      expect(service.setupAnswer_answerParam).equals(secondKeyToReturn);      
    });
    it('router > redirectToChatRoom HasBeenCalled', () => {
      expect(router.redirectToChatRoomHasBeenCalled).true;      
    });
  })
}

function offerCanNotBeCreatedScenario(){
  const { controller, view, service} = initializeDependencies();
  service.creatNewOfferWillThrowAnException = true;

  describe("When", async() => {
    it('controller > init', async () => {
      await controller.init(view)
    });
  })

  describe("Then", () => {
    it('service > creatNewOffer HasBeenCalled', () => {
      expect(service.creatNewOfferHasBeenCalled).true;
    });

    it('view > showErrorMessageFirstKeyCanNotBeCreated HasBeenCalled', () => {    
      expect(view.showErrorMessageFirstKeyCanNotBeCreatedHasBeenCalled).true;      
    });
  })
}

function secondKeyIsEmptyScenario(){
  const { controller, view, service} = initializeDependencies();
  view.secondKeyToReturn = '';

  describe("Given", () => {
    it('controller > init', async () => {
      await controller.init(view)
    });
  })

  describe("When", () => {
    it('controller > creatNewOffer HasBeenCalled', () => {
      controller.secondKeyIsEntered();
    });
  })

  describe("Then", () => {
    it('service > setupAnswer Not HasBeenCalled', () => {
      expect(service.setupAnswerHasBeenCalled).false;
    });

    it('view > showWarningMessageSecondKeyShouldNotBeEmpty HasBeenCalled', () => {
      expect(view.showWarningMessageSecondKeyShouldNotBeEmptyHasBeenCalled).true;
    });
  })
}

function secondKeyIsNotValidScenario(){
  const { controller, view, service} = initializeDependencies();
  view.secondKeyToReturn = 'abc123';
  service.setupAnswerWillThrowAnException = true;

  describe("Given", () => {
    it('controller > init', async () => {
      await controller.init(view)
    });
  })

  describe("When", () => {
    it('controller > secondKeyIsEntered', async () => {
      await controller.secondKeyIsEntered();
    });
  })

  describe("Then", () => {
    it('service > setupAnswer HasBeenCalled', () => {
      expect(service.setupAnswerHasBeenCalled).true;
    });

    it('view > showErrorMessageInvalidSecondKeyForThisRoom HasBeenCalled', () => {
      expect(view.showErrorMessageInvalidSecondKeyForThisRoomHasBeenCalled).true;
    });
  })
}

function hideOpeningRoomWhenSecondKeyIsNotValidScenario(){
  const { controller, view, service} = initializeDependencies();
  view.secondKeyToReturn = 'abc123';
  service.setupAnswerWillThrowAnException = true;

  describe("Given", () => {
    it('controller > init', async () => {
      await controller.init(view)
    });
  })

  describe("When", () => {
    it('controller > secondKeyIsEntered', async () => {
      await controller.secondKeyIsEntered();
    });
  })

  describe("Then", () => {

    it('view > hideOpeningRoom HasBeenCalled', () => {
      expect(view.hideOpeningRoomHasBeenCalled).true;
    });
  })
}

function hideMessagesWhenSecondKeyIsEnteredScenario(){
  const { controller, view, service} = initializeDependencies();

  describe("Given", () => {
    it('controller > init', async () => {
      await controller.init(view)
    });
  })

  describe("When", () => {
    it('controller > secondKeyIsEntered', async () => {
      await controller.secondKeyIsEntered();
    });
  })

  describe("Then", () => {

    it('view > hideWarningMessages HasBeenCalled', () => {
      expect(view.hideWarningMessagesHasBeenCalled).true;
    });

    it('view > hideErrorMessages HasBeenCalled', () => {
      expect(view.hideErrorMessagesHasBeenCalled).true;
    });
  })
}