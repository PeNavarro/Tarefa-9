import { Injectable } from '@angular/core';
import { STUDENTS } from './mock-students';
import { Student } from './student'
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private messageService: MessageService) { }

  getStudents(): Observable<Student[]> {
    const students = of(STUDENTS);
    this.messageService.add('StudentService: estudantes buscados');
    return students;
  }
}
