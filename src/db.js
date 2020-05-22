import firebase from "firebase/app"
import "firebase/firestore"

const config={
    projectId:"web1week-like",
    
}

export const db=firebase.initializeApp(config).firestore()

// const { Timestamp, GeoPoint } = firebase.firestore
// export { Timestamp, GeoPoint }