import {Component} from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'teachers.page.html',
  styleUrls: ['teachers.page.scss']
})
export class TeachersPage {
  teachers: any[] = [
    { name: 'John Doe', exp: 20, department: 'COMPUTER SCIENCE' },
    { name: 'Jane Smith', exp: 21, department: 'HISTORY' },
    { name: 'Michael Johnson', exp: 19, department: 'COMPUTER SCIENCE' },
    { name: 'Emily Brown', exp: 22, department: 'AI & ML' },
    { name: 'Daniel Lee', exp: 20, department: 'HISTORY' },
    { name: 'Olivia Wilson', exp: 21, department: 'AI & ML' },
    { name: 'William Martinez', exp: 19, department: 'HISTORY' },
    { name: 'Sophia Anderson', exp: 22, department: 'AI & ML' },
    { name: 'Matthew Taylor', exp: 20, department: 'COMPUTER SCIENCE' },
    { name: 'Emma Garcia', exp: 21, department: 'COMPUTER SCIENCE' }
  ]

  constructor() {
  }

  filteredTeachers: any[] = []

  ionViewDidEnter() {
    this.filteredTeachers = this.teachers;
  }

  handleOnSearchOfStudents(event: any) {

    this.filteredTeachers = this.teachers?.filter((x) => {
      return x?.name?.toLowerCase()?.includes(event.target.value?.toLowerCase())
    })
  }
}
