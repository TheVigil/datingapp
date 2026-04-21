import { HttpClient } from '@angular/common/http';
import { Component, inject, Inject, OnInit, signal } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { lastValueFrom, throwError } from 'rxjs';
import { Nav } from "../layout/nav/nav";
import { AccountService } from '../core/services/account-service';
import { User } from '../types/user';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Nav],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App implements OnInit{
  private http = inject(HttpClient);
  private accountService = inject(AccountService);
  protected readonly title = "Dating App";
  protected members = signal<User[]>([]);
  protected router = inject(Router)

  async ngOnInit() {
    this.members.set(await this.getMembers());
    this.setCurrentUser(); 
  }

  setCurrentUser(){
    const userString = localStorage.getItem('user');
    if(!userString) return;
    const user = JSON.parse(userString);
    this.accountService.currentUser.set(user);
    this.accountService.isAuthReady.set(true);
  }

  async getMembers(){
    try {
      return lastValueFrom(this.http.get<User[]>('https://localhost:5001/api/members'))
    } catch (error) {
      console.log(error) 
      throw error
    }
  }
}
