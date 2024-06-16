export interface Person {
  CNE: string;
  FirstName: string;
  LastName: string;
  City: string;
  BirthDate: Date;
  ExpireDate: Date;
}

export interface Data {
  person: Person;
  possible_names_address: string[];
}
