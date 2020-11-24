import { User } from '../models/User.model';
import { Subject } from 'rxjs/Subject';

export class UserService {
    private users: User[] = [
        {
            firstName: 'Léopole',
            lastName: 'Martin',
            email: 'leopole@martin.com',
            drinkPreference: 'Sprite',
            hobbies: [
                'coder',
                'la marche rapide'
            ]
        }
    ];
    userSubject = new Subject<User[]>();

    emitUsers() {
        this.userSubject.next(this.users.slice());
    }

    addUser(user: User) {
        this.users.push(user);
        this.emitUsers();
    }
}