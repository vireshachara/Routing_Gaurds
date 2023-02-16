import { Component } from '@angular/core';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css'],
})
export class LogInComponent {
  signUpUsers: any[] = [];

  signUpObj: any = {
    userName: '',
    email: '',
    password: '',
  };

  logInObj : any = {
    userName : '',
    password : ''
  }

  ngOnInit(): void {
    const localData = localStorage.getItem('signUpUsers');
    if(localData != null) {
      this.signUpUsers = JSON.parse(localData);
    }
  }

  onSignup(){
    this.signUpUsers.push(this.signUpObj);
    localStorage.setItem('signUpUsers', JSON.stringify(this.signUpUsers));

    this.signUpObj = {
      userName: '',
      email: '',
      password: '',
    };
  }

  onLogin(){
    debugger
    const isUserExists = this.signUpUsers.find(m => m.email == this.logInObj.email && m.password == this.logInObj.password)
    if(isUserExists != undefined){
      alert("User login successfully")
    }
    else {
      alert("Wrong Credentials")
    }
  }
}
