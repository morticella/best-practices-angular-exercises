import { Component} from '@angular/core';
import { Response } from '@angular/http';
import { NgForm } from '@angular/forms';

import { DataStorageService } from '../shared/data-storage.service';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private dataStorageService: DataStorageService,
              private authService: AuthService) {}
  onSaveData() {
    this.dataStorageService.storeRecipea()
      .subscribe(
        (response: Response) => {
          console.log(response);
        }
      );
  }
  onFetchData(form: NgForm) {
    // const email = form.value.email;
    // const password = form.value.password;
    // this.dataStorageService.getRecipes();
    this.dataStorageService.getRecipes();
  }
  onLogout(){
    this.authService.logoutUser();
  }
}
