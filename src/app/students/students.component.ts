import { Component, OnInit } from '@angular/core';
import { STUDENTS } from '../mock-students';
import { Student } from '../student';
import { StudentService } from '../student.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  selectedStudent?: Student;
  students: Student[] = [];

  constructor(private studentService: StudentService, private messageService: MessageService) {
    
   }

  ngOnInit(): void {
    this.getStudents();
  }

  onSelect(student: Student): void {
    this.selectedStudent = student;
    this.messageService.add(`StudentsComponent: selecionado estudante id=${student.id}`);
  }

  getStudents(): void{
    this.studentService.getStudents().subscribe(students => this.students = students);
  }

}
