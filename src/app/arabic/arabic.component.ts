import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase , AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';

import { Router } from '@angular/router';

@Component({
  selector: 'app-arabic',
  templateUrl: './arabic.component.html',
  styleUrls: ['./arabic.component.css']
})
export class ArabicComponent implements OnInit {


   information= {
       name : '',
       birthDate : '',
       gender : '',
       address : '' ,
       phoneNumber: '' ,
       email: '' ,
       college: '' ,
       department: '' ,
       graduationDate: '' ,
       nameOfUniversity: '' ,
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
  
    this.itemList = db.list('arabic')
    
  }

  ngOnInit() {
  
  let user = localStorage.getItem('email')
      this.email = user
      console.log(user)
      
      this.uid = localStorage.getItem('uid')
      
    //  this.fire.authState.subscribe(auth=>{
    //      if(auth){
    //          this.uid = auth.uid
              console.log('uid: '+this.uid)
    //      }
    //  })
  
  }


insertinformation(){
    
    
    this.itemList.push({
        
       name : this.information.name ,
       birthDate : this.information.birthDate,
       gender : this.information.gender,
       address : this.information.address,
       phoneNumber: this.information.phoneNumber,
       email: this.information.email,
       college: this.information.college,
       department: this.information.department,
       graduationDate: this.information.graduationDate,
       nameOfUniversity: this.information.nameOfUniversity,
       Language1: this.information.Language1,
       Language2: this.information.Language2,
       experience1: this.information.experience1,
       date1: this.information.date1,
       experience2: this.information.experience2,
       date2: this.information.date2,
       experience3: this.information.experience3,
       date3: this.information.date3,
       course1: this.information.course1,
       course2: this.information.course2,
       course3: this.information.course3,
       computerSkill1: this.information.computerSkill1,
       computerSkill2: this.information.computerSkill2,
       computerSkill3: this.information.computerSkill3,
       otherSkill1: this.information.otherSkill1,
       otherSkill2: this.information.otherSkill2,
       otherSkill3: this.information.otherSkill3,
       uid : this.uid
    })  
        
        
    
    this.router.navigate(['/arabiccv'])
    
}  




}
