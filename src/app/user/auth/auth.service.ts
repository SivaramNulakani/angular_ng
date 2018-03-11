import * as firebase from 'firebase';
export class AuthService{

    signUpUser(email:string,password:string){
        return firebase.auth().createUserWithEmailAndPassword(email,password);
    }

     signInUser(email:string,password:string){
        return firebase.auth().signInWithEmailAndPassword(email,password);
    }

}