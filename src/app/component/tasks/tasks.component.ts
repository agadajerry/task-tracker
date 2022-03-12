import { Component, OnInit } from '@angular/core';
import { iTask } from '../../Task';
import {TaskService} from "../../services/task.service"

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  tasks: iTask[] = [];

  taskList;
  constructor(private taskService:TaskService) {
    this.taskList = taskService.getTask();
  }

  ngOnInit(): void {

     this.taskService.getTask().subscribe((tasks)=>{
       this.tasks = tasks
     });
  }

  deleteTask(data:iTask){

    this.taskService.deleteTasks(data).subscribe(()=>{
      this.tasks = this.tasks.filter((t)=>t.id !== data.id)
    });
  }
  toggleReminder(task:iTask){
   task.reminder = !task.reminder;
   console.log(task.reminder)
   this.taskService.updateTaskReminder(task).subscribe();
  }

  onAddTask(task :iTask){

      this.taskService.addTask(task).subscribe(task=>{
        this.tasks.push(task)
      }); 
  }

}
