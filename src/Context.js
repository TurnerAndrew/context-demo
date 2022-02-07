import { createContext} from "react";

const context = {
    name: null,
    age: null,
    location: null
}

export const Context = createContext(context)