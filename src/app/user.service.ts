import { Injectable } from '@angular/core';
import { Observable,Subscribable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';


export interface user{
    username:string
    uid:string
    
}

@Injectable({providedIn: 'root'})
export class UserService{
    private user:user;
    private todos: Observable<user[]>;
    //private todos: Subscribable<user[]>;
    private todosCollection: AngularFirestoreCollection<user>;

    constructor(db: AngularFirestore){
        this.todosCollection = db.collection<user>('todos');

        this.todos = this.todosCollection.snapshotChanges().pipe(
            map(actions => {
              return actions.map(a => {
                const username = a.payload.doc.data();
                const uid = a.payload.doc.id;
                return { uid, ...username };
              });
            })
          );

    }

    setUser(user:user){
        this.user=user;
    }
    getUsers() {
        return this.todos;
    }
    getUID(){
        return this.user.uid;
    }
    updateTodo(message: user, id: string) {
        return this.todosCollection.doc(id).update(message);
      }
      removeTodo(id) {
        return this.todosCollection.doc(id).delete();
      }
      addTodo(todo: user) {
        return this.todosCollection.add(todo);
      }
    getUser(id) {
        return this.todosCollection.doc<user>(id).valueChanges();
      }
}