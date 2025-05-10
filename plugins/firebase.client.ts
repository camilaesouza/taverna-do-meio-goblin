import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

export default defineNuxtPlugin(() => {
    const firebaseConfig = {
        apiKey: "AIzaSyC2hWccVKMQ9cWnZZPABqEfwiHccKl8KxI",
        authDomain: "taverna-do-meio-goblin.firebaseapp.com",
        projectId: "taverna-do-meio-goblin",
        storageBucket: "taverna-do-meio-goblin.firebasestorage.app",
        messagingSenderId: "72789302641",
        appId: "1:72789302641:web:8244a894eddcf4b520aad0"
    }

    const app = initializeApp(firebaseConfig)
    const db = getFirestore(app)

    return {
        provide: {
            firestore: db,
        },
    }
})
