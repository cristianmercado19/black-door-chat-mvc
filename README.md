# Black Door Chat - MVC

Where this project coming from? [Black Door Chat Project Introduction](https://github.com/cristianmercado19/black-door-chat).

## Project

In my opinion this is the *most important repository* of the project. Because it contains the **logic of the chat**. View could be changed and also future implementation of the WebRTC service could be removed without affect this key repository.

## Structure

In this project you will find this common structure

```
[dis] > distribution package
  .
  .
[lib]

    [controller-name]
       controller-name.controller.ts        > Controller implementation
       controller-name.controller.spec.ts   > BDD Tests

       [view]
            *.view.interface.ts             > interface required from the view
            *.view.mock.ts                  > mocks for testing propose

       [service]
            *.service.interface.ts          > interface required from the service
            *.service.mock.ts               > mocks for testing propose

       [???]                                > same pattern above for other artifact
 ```

Although I could use other techniques for mocks, even other frameworks... I have decided to implement my mocks as separated classes. I found it really clear and simple to understand also easy to reuse.

## Commands

1. Install dependencies `yarn install`
2. Run tests `yarn test`
3. Run tests wait for changes to run again `yarn test-watch`
4. Regenerate the distribution package (`dist` directory ) `yarn build`. It will clean and regenerate all the `*.js` and `*.d.ts` files.
5. Create a new version `yarn version`

## Key idea

As you could see, I focus on **MVC pattern** in order to make the **View independent and just simple as possible**. One effect of that is the amount of unit test allocated in this project.

Remember the key here is move all the complexity **outside** the final view implementation, which could be *Angular / React / Backbone js or simply Vanilla JS*</br>
Whatever JS implementation will work with this model due to the fact that *the logic is in the controller* as an **independent** component in the MVC pattern.
