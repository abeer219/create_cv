import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AngularFireDatabase , AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import * as jsPDF from 'jspdf';
import * as html2canvas from 'html2canvas';

@Component({
  selector: 'app-mycv',
  templateUrl: './mycv.component.html',
  styleUrls: ['./mycv.component.css']
})
export class MycvComponent implements OnInit {

itemList:AngularFireList<any>

    itemArray = []
    mycv = []

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
       
           
    myUid:any
    
   
       

  constructor(public db:AngularFireDatabase , public router:Router) {

  this.itemList = db.list('english')
      
  this.itemList.snapshotChanges().subscribe(actions=>{
      actions.forEach(action=>{
      let y= action.payload.toJSON()
      y["$key"] = action.key
      this.itemArray.push(y as ListItemClass)
  })
     })
      
      this.myUid = localStorage.getItem('uid')
      console.log(this.itemArray)
      
 
  }

  ngOnInit() {
  
 
     // ------------ my cv ----------
     
      this.itemList.snapshotChanges().subscribe(actions=>{
      actions.forEach(action=>{
      let y= action.payload.toJSON()
      if(y["uid"] === this.myUid){
      
      this.mycv.push(y as ListItemClass)
  
  }
  })
     })
        
        console.log(this.mycv)
      
     
    // ------------ end my cv ------------
    
  } // end ngOnInit
  
  // -------------- start download -------
  
  
  downloadPDF(){

let doc = new jsPDF('p', 'pt', 'letter');

let specialElementHandlers = {
'#editor': function(element, renderer){
return true;
}
}; 


doc.addHTML(document.getElementById("content"),function(){
 
 doc.save("CV.pdf");


  });
      
      
  }
  
/*@ViewChild('content') content: ElementRef;
  
public downloadPDF(){


 let doc = new jsPDF();

//doc.setLineWidth(2);
//doc.rect(10,20,180,270);

//doc.line(30,30,170,30);
//doc.line(30,45,170,45);

let specialElementHandlers = {
'#editor': function(element, renderer){
return true;
}
};


let content = this.content.nativeElement;

doc.fromHTML(content.innerHTML, 20, 20, {
 'width': 300,
 'elementHandlers': specialElementHandlers
});

doc.save('CV.pdf');
  } */
    
// ------------------------- End  download --------------------------------  
  
    } // end class
    
  export class ListItemClass{
    $key: string;
    name : string;
    birthDate : string;
    gender : string;
    address : string;
    phoneNumber: string;
    email: string;
    college: string;
    department: string;
    graduationDate: string;
    nameOfUniversity: string;
    Language1: string;
    Language2: string;
    experience1: string;
    date1: string;
    experience2: string;
    date2: string;
    experience3: string;
    date3: string;
    course1: string;
    course2: string;
    course3: string;
    computerSkill1: string;
    computerSkill2: string;
    computerSkill3: string;
    otherSkill1: string;
    otherSkill2: string;
    otherSkill3: string;
   }

