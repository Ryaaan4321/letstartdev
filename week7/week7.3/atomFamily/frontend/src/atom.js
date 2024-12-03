import { atom, atomFamily } from 'recoil'
import { TODOS } from './todos.js'

export const todoAtomFamily = atomFamily({
    key: "todoAtomFamily",
    default: id => {
        return TODOS.find(x => x.id === id);
    }

})