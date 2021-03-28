import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {UsersService} from '../../services/users.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  form: FormGroup;
  userId: string
  constructor(private usersService: UsersService,
              private activatedRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(param => {
      this.userId = param.id;
      this.usersService.getOne(param.id).subscribe((res: any) => {
        this.form = new FormGroup({
          firstname: new FormControl(res.firstname, [ Validators.required ]),
          lastname: new FormControl(res.lastname, [ Validators.required ]),
          email: new FormControl(res.email, [ Validators.required ]),
          company: new FormControl(res.company, [ Validators.required ]),
          address: new FormControl(res.address, [ Validators.required ]),
          city: new FormControl(res.city, [ Validators.required ]),
          state: new FormControl(res.state, [ Validators.required ]),
          zip: new FormControl(res.zip, [ Validators.required ]),
          country: new FormControl(res.country, [ Validators.required ]),
          phone: new FormControl(res.phone, [ Validators.required ]),
          title: new FormControl(res.title, [ Validators.required ]),
          contactname: new FormControl(res.contactname, [ Validators.required ]),
        });
      });
    });
  }

  submit(): any {
    this.form.markAllAsTouched();
    if (this.form.valid) {
      this.usersService.update(this.userId, this.form.value).subscribe(res => {
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
