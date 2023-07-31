import { Injectable } from '@nestjs/common';
import { CreateUser } from 'src/utils/type';

@Injectable()
export class UsersService {
  private users = [
    { id: 1, username: 'voroor', password: '1254fhh', email: 'ggoo@gmail.com' },
    { id: 2, username: 'winner', password: '1254fhh', email: 'ggoo@gmail.com' },
    { id: 3, username: 'dodo', password: '1254fhh', email: 'ggoo@gmail.com' },
    { id: 4, username: 'koffi', password: '1254fhh', email: 'ggoo@gmail.com' },
    { id: 5, username: 'fafa', password: '1254fhh', email: 'ggoo@gmail.com' },
  ];

  getUsers() {
    return this.users;
  }

  getUserById(id: number) {
    return this.users.find((user) => user.id == id);
  }
}
