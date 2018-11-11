import './index.scss';

export const hello = () => 'Hello world!'; 

(<any>window).hello = hello;