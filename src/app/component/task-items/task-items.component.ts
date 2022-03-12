import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';
import { TASKS } from '../../taskdb';
import { iTask } from '../../Task';
import {faTimes} from "@fortawesome/free-solid-svg-icons"

@Component({
  selector: 'app-task-items',
  templateUrl: './task-items.component.html',
  styleUrls: ['./task-items.component.css']
})
export class TaskItemsComponent implements OnInit {

  @Input() task!: iTask;
  @Output() onDeleteTask: EventEmitter<iTask> = new EventEmitter();
  @Output() onToggleReminder: EventEmitter<iTask> = new EventEmitter();

  faTimes = faTimes;

  constructor() { }

  ngOnInit(): void {
  }
  removeTask(data:any){

    this.onDeleteTask.emit(data)
  }

  onToggle(task:iTask){
    this.onToggleReminder.emit(task);
  }

}
