import { Component,Input,Output,EventEmitter} from '@angular/core';
import {Task} from "../../Task";
import {faTimes} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})

export class TaskItemComponent {
   @Input() task:Task={
    id: 1,
    text: 'Doctors Appointment',
    day: 'May 5th at 2:30pm',
    reminder: true,
   };

   @Output() onDeleteTask:EventEmitter<Task>=new EventEmitter();
   faTimes=faTimes;
   
   @Output() onToggleReminder:EventEmitter<Task>=new EventEmitter();

   onDelete(task:Task):void
   {
     this.onDeleteTask.emit(task);
   }

   onToggle(task:Task)
   {
    this.onToggleReminder.emit(task);
   }
}

