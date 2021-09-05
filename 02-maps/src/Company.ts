import faker from 'faker';

export class Company {
  name: string;
  slogan: string;
  location: {
    lat: number;
    long: number;
  };

  constructor() {
    this.name = faker.company.companyName();
    this.slogan = faker.company.catchPhrase();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      long: parseFloat(faker.address.longitude()),
    };
  }

  markerContent(): string {
    return `<h1>${this.name}</h1><h3>${this.slogan}</h3>`;
  }
}
