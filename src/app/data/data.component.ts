import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServiceService } from '../Services/service.service';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {

  users:any=[];
  postForm:FormGroup
  constructor(private service:ServiceService, private fb:FormBuilder) {
    this.postForm=this.fb.group({
      title:this.fb.control("",[Validators.required]),
      body:this.fb.control("",[Validators.required]),
    })
   }

  ngOnInit(): void {
   this.displayData()
  }

  get title(){
    return this.postForm.get("title")
  }

  get body(){
    return this.postForm.get("body")
  }

  displayData(){
    this.service.getData().subscribe((data)=>{
      console.log(data);     
      this.users=data;
    })
  }

  post(){
   this.service.postData(this.postForm.value).subscribe((res)=>{
    if(!res.error){
     window.alert("Post added successfully")
     this.postForm.reset();
     let close=document.getElementById("close")
     close.click()
     this.service.getData().subscribe((data)=>{
     this.users=data;
     this.users.push(res);
     console.log(this.users);  
     })
    
    }else{
      window.alert("There is an error while posting")
    }
   })
  }




}
