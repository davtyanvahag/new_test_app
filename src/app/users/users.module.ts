import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { AddUserComponent } from './add-user/add-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { UsersService } from '../services/users.service';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [UsersComponent, AddUserComponent, EditUserComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    ReactiveFormsModule
  ],
  providers: [UsersService]
})
export class UsersModule { }
