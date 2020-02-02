import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/model/user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private userService:UserService) { }

  user:User={
    kitIt:null,
    userName:null,
    password:null,
    vehicleRegId:null
  }
  ngOnInit() {
    this.userService.getUser().subscribe(
      (doc) => {
        this.user = Object.assign({},{...doc[0]}) as User;
        // console.log(doc);
        
      }
    )
  }

}
