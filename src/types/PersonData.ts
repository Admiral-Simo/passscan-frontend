export interface Person {
  CNE: string;
  FirstName: string;
  LastName: string;
  City: string;
  BirthDate: string;
  ExpireDate: string;
}

export interface Data {
  person: Person;
  possible_names_address: string[];
}
