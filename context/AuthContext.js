import React, { useContext, useEfect, useRef, useState} from 'react'
import { auth, db} from '../firebase'
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, onAuthStateChange} from 'firebase/auth'
import { doc, getDoc} from firebase/firestore  