import { Injectable } from '@angular/core';
import { Message } from './message';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  messages: Message[] = [];

  add(message: string) {
     this.messages.unshift({'content': message, 'timestamp': new Date().toLocaleString()} as Message);   
  }

  clear() {
    this.messages = [];
  }
}