import {Store} from 'redux';

export function middlewareA(store: Store<{ age: number; }>) {
    return (next: any) => (action: any) => {
        console.log(`A before store : ${JSON.stringify(store.getState())}`); // before

        const returnValue = next(action); // 다음 미들웨어 호출, 없으면 실제 dispatch

        console.log(`A after : ${JSON.stringify(store.getState())}`); // after

        return returnValue;
    };
}

export function middlewareB(store: Store<{ age: number; }>) {
    return (next: any) => (action: any) => {
        console.log(`B before store : ${JSON.stringify(store.getState())}`); // before

        const returnValue = next(action); // 다음 미들웨어 호출, 없으면 실제 dispatch

        console.log(`B after : ${JSON.stringify(store.getState())}`); // after

        return returnValue;
    };
}