import {Component} from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'student-listing.page.html',
  styleUrls: ['student-listing.page.scss']
})
export class StudentListingPage {

  students: any[] = [
    {
      firstName: 'Tufal Nazir',
      lastName: 'Shaikh',
      email: 'tufal@netweb.com',
      address: 'Vadodara, Gujarat, India',
      contactNumber: '+916955623245',
      "age": '24yrs',
      "role": '.Net Developer',
    },
    {
      firstName: 'John',
      lastName: 'Doe',
      email: 'john@example.com',
      address: 'New York, USA',
      contactNumber: '+1234567890',
      "age": '24yrs',
      "role": 'Ionic Developer',
    },
    {
      firstName: 'Jane',
      lastName: 'Smith',
      email: 'jane@example.com',
      address: 'London, UK',
      contactNumber: '+4455667788',
      "age": '28yrs',
      "role": 'React Native Developer',
    },
    {
      firstName: 'Michael',
      lastName: 'Johnson',
      email: 'michael@example.com',
      address: 'Los Angeles, USA',
      contactNumber: '+1122334455',
      "age": '28yrs',
      "role": 'Flutter Developer',
    },
    {
      firstName: 'Emily',
      lastName: 'Brown',
      email: 'emily@example.com',
      address: 'Sydney, Australia',
      contactNumber: '+617889944',
      "age": '28yrs',
      "role": 'Flutter Developer',
    },
    {
      "firstName": "Alex",
      "lastName": "Garcia",
      "email": "alex@example.com",
      "address": "Madrid, Spain",
      "contactNumber": "+34987654321",
      "age": '28yrs',
      "role": 'React Native Developer',
    },
    {
      "firstName": "Sophia",
      "lastName": "Martinez",
      "email": "sophia@example.com",
      "address": "Mexico City, Mexico",
      "contactNumber": "+521987654321",
      "age": '21yrs',
      "role": 'Ionic Developer',
    },
    {
      "firstName": "Liam",
      "lastName": "Taylor",
      "email": "liam@example.com",
      "address": "Toronto, Canada",
      "contactNumber": "+14165551234",
      "age": '24yrs',
      "role": '.Net Developer',
    },
    {
      "firstName": "Isabella",
      "lastName": "Hernandez",
      "email": "isabella@example.com",
      "address": "Buenos Aires, Argentina",
      "contactNumber": "+541143212345",
      "age": '25yrs',
      "role": 'Backend Developer',
    },
    {
      "firstName": "Ethan",
      "lastName": "Lopez",
      "email": "ethan@example.com",
      "address": "Sao Paulo, Brazil",
      "contactNumber": "+5511987654321",
      "age": '20yrs',
      "role": 'FrontEnd Developer',
    }
  ];

  filteredStudents: any[] = []

  constructor() {
  }

  ionViewDidEnter() {
    this.filteredStudents = this.students;
  }

  handleOnSearchOfStudents(event: any) {

    this.filteredStudents = this.students?.filter((x) => {
      if (x?.firstName?.toLowerCase()?.includes(event.target.value?.toLowerCase()) || x?.lastName?.toLowerCase()?.includes(event.target.value?.toLowerCase())) {
        x.isHighLight = true;
        return x;
      }

    })
  }

}
