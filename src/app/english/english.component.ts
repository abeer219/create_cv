import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase , AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'app-english',
  templateUrl: './english.component.html',
  styleUrls: ['./english.component.css']
})
export class EnglishComponent implements OnInit {

data= {
name : '',
birthDate : '',
gender : '', 
address : '',
phoneNumber : '',
email : '',
college: '' ,
department: '' ,
graduationDate : '',
nameOfUniversity : '',
Language1 : '',
Language2 : '',
experience1 : '',
date1 : '',
experience2 : '',
date2 : '',
experience3 : '',
date3 : '',
course1 : '',
course2 : '',
course3 : '',
computerSkill1 : '',
computerSkill2 : '',
computerSkill3 : '',
otherSkill1: '',
otherSkill2: '',
otherSkill3: ''

     }
     
    email:string = '';
    uid:any;
    itemList:AngularFireList<any>
    
   
    myUid:any
       

  constructor(private fire:AngularFireAuth, public db:AngularFireDatabase , public router:Router) {
  
  
this.itemList = db.list('english') 
 
  }

  ngOnInit() {
  
   let user = localStorage.getItem('email')
      this.email = user
      console.log(user)
      
      this.uid = localStorage.getItem('uid')
      
       }

       


insertData(){
    
    
    this.itemList.push({
        
       name : this.data.name ,
       birthDate : this.data.birthDate,
       gender : this.data.gender,
       address : this.data.address,
       phoneNumber: this.data.phoneNumber,
       email: this.data.email,
       college: this.data.college,
       department: this.data.department,
       graduationDate: this.data.graduationDate,
       nameOfUniversity: this.data.nameOfUniversity,
       Language1: this.data.Language1,
       Language2: this.data.Language2,
       experience1: this.data.experience1,
       date1: this.data.date1,
       experience2: this.data.experience2,
       date2: this.data.date2,
       experience3: this.data.experience3,
       date3: this.data.date3,
       course1: this.data.course1,
       course2: this.data.course2,
       course3: this.data.course3,
       computerSkill1: this.data.computerSkill1,
       computerSkill2: this.data.computerSkill2,
       computerSkill3: this.data.computerSkill3,
       otherSkill1: this.data.otherSkill1,
       otherSkill2: this.data.otherSkill2,
       otherSkill3: this.data.otherSkill3,
       uid : this.uid
    })  
        
        
    
    this.router.navigate(['/mycv'])
    
}



}