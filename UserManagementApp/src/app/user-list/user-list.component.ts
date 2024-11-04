import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service'; // Importa o serviço que você criou
import { User } from '../user.model'; // Importe seu modelo de usuário

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: User[] = []; // Armazena a lista de usuários
  errorMessage: string = '';

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers() {
    this.userService.getUsers().subscribe(
      (data: User[]) => {
        this.users = data;
      },
      (error) => {
        this.errorMessage = 'Erro ao carregar os usuários: ' + error.message;
      }
    );
  }
}
