import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UsersService } from '../../services/users.service';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.page.html',
  styleUrls: ['./users.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class UsersPage implements OnInit {
  users: User[] = [];
  loading = false;

  constructor(
    private usersService: UsersService,
    private cdr: ChangeDetectorRef
  ) {}

  async ngOnInit() {
    await this.loadUsers();
  }

  async loadUsers() {
    this.loading = true;
    try {
      this.users = await this.usersService.getActiveUsers();
    } catch (error) {
      console.error('Error al cargar usuarios:', error);
    } finally {
      this.loading = false;
      this.cdr.detectChanges();
    }
  }
}