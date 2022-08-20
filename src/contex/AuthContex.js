import React from 'react'

import { auth } from '../firebase'

const AuthContex=React.createContext()
export function AuthProvider(){


    function signup(email,password){
        return auth.createUserWithEmailAndPassword(email,password)
    }
    function login(email,password){
        return auth.signInWithEmailAndPassword(email,password)
    }

    function logout(){
        return auth.signOut()
    }

}