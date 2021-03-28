import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {UsersService} from '../../services/users.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  form: FormGroup;
  constructor(private usersService: UsersService,
              private router: Router) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      firstname: new FormControl('', [ Validators.required ]),
      lastname: new FormControl('', [ Validators.required ]),
      email: new FormControl('', [ Validators.required ]),
      company: new FormControl('', [ Validators.required ]),
      address: new FormControl('', [ Validators.required ]),
      city: new FormControl('', [ Validators.required ]),
      state: new FormControl('', [ Validators.required ]),
      zip: new FormControl(null, [ Validators.required ]),
      country: new FormControl('', [ Validators.required ]),
      phone: new FormControl('', [ Validators.required ]),
      title: new FormControl('', [ Validators.required ]),
      contactname: new FormControl('', [ Validators.required ]),
    });
  }

  submit(): any {
    this.form.markAllAsTouched();
    if (this.form.valid) {
      this.usersService.create(this.form.value).subscribe(res => {
        this.router.navigate(['/users']);
      });
    }
  }

  get firstname() { return this.form.get('firstname'); }
  get lastname() { return this.form.get('lastname'); }
  get email() { return this.form.get('email'); }
  get company() { return this.form.get('company'); }
  get address() { return this.form.get('address'); }
  get city() { return this.form.get('city'); }
  get state() { return this.form.get('state'); }
  get zip() { return this.form.get('zip'); }
  get country() { return this.form.get('country'); }
  get phone() { return this.form.get('phone'); }
  get title() { return this.form.get('title'); }
  get contactname() { return this.form.get('contactname'); }

}
