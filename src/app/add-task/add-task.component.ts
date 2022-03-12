import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { iTask } from '../Task';
import { UiService } from '../services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {


  @Output() addTask :EventEmitter<iTask>=  new EventEmitter()

  text:string = "";
  day:string = "";
  reminder:boolean = false;

  showAddTask:boolean = false;
  subscription:Subscription;
  constructor(private uiService:UiService) {
    this.subscription = this.uiService.onToggle().subscribe(value=>{
      
      this.showAddTask = value
    })

   }

  ngOnInit(): void {
  }
  onFormSubmit(){

    if(!this.text){
      alert("Pleade add a task before submission");
      return;
    }

    const newTask = {
      text:this.text,
      day:this.day,
      reminder:this.reminder
    }
    //@todo eventmit

    this.addTask.emit(newTask)

    this.text = ""
    this.day = ""
    this.reminder = false
  }

}
