import { createContext } from "react";


const UserContext = createContext({
    name:{
        first:'',
        last:''
    },
    subscriptionType:'Anime Conoseur'
})

export default UserContext