import { Injectable } from '@angular/core';
import { Person } from '../classes/Person';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  private registrationsList: Person[];

  constructor() {
    this.registrationsList = [];
  }

  // Add  a contact
  public addContact(id: string, name: string, surname: string, age: number, dni: string,
                    dateOfBirth: Date, favouriteColor: string, gender: string, notes: string) {
    const contactPerson = new Person(id, name, surname, age, dni, dateOfBirth,
      favouriteColor, gender, notes);
    this.registrationsList.push(contactPerson);
    console.log('resultado', this.registrationsList);
  }


  // Get a contact or all the coctacts
  public getContact(dni: string): Person {
    return this.registrationsList[dni];
  }

  public getRegistrationsList(): Person[] {
    return this.registrationsList;
  }


  // Update a contact
  public updateContacts(dni: string | number, contactPerson: Person) {
    this.registrationsList[dni] = contactPerson;
  }


  // Delete a contact
  public deleteContact(dni: number) {
    this.registrationsList.splice(dni, 1);
  }
}
