import faker from 'faker';

export class User {
  name: string;
  location: {
    lat: number;
    long: number;
  };

  constructor() {
    this.name = faker.name.firstName();
    this.location = {
      lat: parseFloat(faker.address.latitude()), // latitude() returns a string, as seen in the Type Definition file
      long: parseFloat(faker.address.longitude()), // so does longitude() returns a string, again from Type Definition file
    };
  }

  markerContent(): string {
    return `${this.name} is here!`;
  }
}
