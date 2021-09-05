import { Company } from './Company';
import { User } from './User';

// INSTRUCTION FOR OTHER CLASSES FOR THEIR INSTANCES TO BE AN ARGUMENT FOR ADDING MARKER FUNCTION
interface Mappable {
  location: {
    lat: number;
    long: number;
  };
  markerContent(): string;
}

export class Map {
  private googleMap: google.maps.Map; // restrict access to this Map

  constructor(divID: string) {
    this.googleMap = new google.maps.Map(document.getElementById(divID), {
      zoom: 1,
      center: {
        lat: 0,
        lng: 0,
      },
    });
  }

  addMarker(mappable: Mappable): void {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.long,
      },
    });

    marker.addListener('click', () => {
      const infoPopup = new google.maps.InfoWindow({
        content: mappable.markerContent(),
      });

      infoPopup.open(this.googleMap, marker);
    });
  }

  /* BAD CODE EXAMPLE - TOO MUCH DUPLICATION */
  // addUserMarker(user: User): void {
  //   new google.maps.Marker({
  //     map: this.googleMap,
  //     position: {
  //       lat: user.location.lat,
  //       lng: user.location.long,
  //     },
  //   });
  // }

  // addCompanyMarker(company: Company): void {
  //   new google.maps.Marker({
  //     map: this.googleMap,
  //     position: {
  //       lat: company.location.lat,
  //       lng: company.location.long,
  //     },
  //   });
  // }
  /* --------------------------------------- */
}
