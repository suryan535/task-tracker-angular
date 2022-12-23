import { Component,Output,EventEmitter } from '@angular/core';
import {Task} from "../../Task";
import {UiService} from "../../services/ui.service";
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {
    
  @Output() onAddTask:EventEmitter<Task>=new EventEmitter();
  
    text:string="";
    day:string="";
    reminder:boolean=false;
    showAddTask:boolean=false;
    subscribe!:Subscription;
    
    constructor(private uiService:UiService)
    {
      this.uiService.onToggle().subscribe((value)=>
      {
        this.showAddTask=value;
      });
    }

    onSubmit()
    {
      if(!this.text)
      {
        alert('Add Text');
      }

      const newTask={
        text:this.text,
        day:this.day,
        reminder:this.reminder
      }

      this.onAddTask.emit(newTask);

      this.text="";
      this.day="";
      this.reminder=false;
    }
}