import { Component, OnInit } from '@angular/core';
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  GoogleMapsAnimation,
  GoogleMapOptions,
  CameraPosition,
  MarkerOptions,
  Marker,
  MyLocation,
  MarkerCluster,
  LatLng,
} from '@ionic-native/google-maps';

import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-ubicacion',
  templateUrl: './ubicacion.page.html',
  styleUrls: ['./ubicacion.page.scss'],
})
export class UbicacionPage implements OnInit {
  GoogleMaps:any;
  map:GoogleMap;

  constructor(
    private googleMaps:GoogleMaps,
    private platform: Platform,
  ) { }

  ngOnInit() {
    //await  this.platform.ready();
    this.pintarMapa();
  }

  pintarMapa(){
    this.map=GoogleMaps.create('map_canvas',{
      camera: {
        target: {
          lat: 19.3737093,
          lng: -99.1787103
        },
        zoom: 18,
        tilt: 30
      }
    })
    this.map.one(GoogleMapsEvent.MAP_READY)
    .then(() => {
      this.getPosition();
    })
    .catch(error =>{
      console.log(error);
    });
   }


   getPosition(): void{
    this.map.getMyLocation()
    .then(response => {
      this.map.moveCamera({
        target: response.latLng
      });
      this.map.addMarker({
        title: 'Mi ubicacion',
        icon: 'green',
        animation: 'DROP',
        position: response.latLng
      });
    })
    .catch(error =>{
      console.log(error);
    });
  }


}



   //EJEMPLO DE MAPA
  //  mapa(){
  //   this.map.addMarker = GoogleMaps.create('map_canvas', {
  //      title:'@ionic-native/google-maps',
  //      icon:'blue',
  //      animation:'DROP',
  //      position:{
  //        lat:45.233443,
  //        lng:-34.344
  //      }
  //    }).then((mapamarquen:Marker)=>{
  //      mapamarquen.showInfoWindow();
  //    })
  //  }


  //EJEMPLO DE  MAPA ICONFIANZA

// pintarMapa(){
//   this.map = GoogleMaps.create('map_canvas', {
//     'camera': {
//       'target': {
//         "lat": 20.428393,
//         "lng": -99.162846
//       },
//       'zoom': 2
//     }
//   });
//     //this.addCluster(this.lista);
//  }

//  addCluster(parametros){
//   let markerCluster: MarkerCluster = this.map.addMarkerClusterSync({
//     markers: parametros,
//     icons: [
//       {
        
//         url: "./assets/markercluster/ico_lugar_on.png",
//         label: {
//           color: "white"
//         }
//       },
//       {
//         min: 10,
//         url: "./assets/markercluster/ico_lugar_on.png",
//         label: {
//           color: "white"
//         }
//       }
//     ]
//   });

//   markerCluster.on(GoogleMapsEvent.MARKER_CLICK).subscribe((params) => {
//     let marker: Marker = params[1];
//     marker.setTitle(marker.get("name"));
//     marker.setSnippet(marker.get("address"));
//     marker.showInfoWindow();
//   });
//  }      
 //this.map= this.GoogleMaps.create('map_canvas', mapOptions);



// getItems(ev: any) {
//   //this.initializeItems();

//   const val = ev.target.value;

//   // if the value is an empty string don't filter the items
//   if (val && val.trim() != '') {
//     this.lista = this.lista.filter((item) => {
//       return (this.lista);
//     })
//   }
// }


// async onButtonClick(latitude,longitude,title,subtitle) {
//   this.latitude = latitude;
//   this.longitude = longitude;
//   this.title = title;
//   this.subtitle = subtitle;
 

//   this.loading = await this.loadingCtrl.create({
//     message: 'Cargando...'
//   });
//   await this.loading.present();

//   // Get the location of you
//   this.map.getMyLocation().then((location: MyLocation) => {
//     this.loading.dismiss();
//     console.log(JSON.stringify(location, null ,2));
    
//     // Move the map camera to the location with animation
//     this.map.animateCamera({
//       target: {
//          lat: this.latitude,
//          lng: this.longitude
//        },
//       zoom: 17,
//       tilt: 30
//     });
//     let marker: Marker = this.map.addMarkerSync({
//       title: this.title,
//       icon: "./assets/markercluster/ico_lugar_on.png",
//       position: {
//         lat: this.latitude,
//         lng: this.longitude
//       },
//       animation: GoogleMapsAnimation.BOUNCE
//     });

//     marker.showInfoWindow();

//     marker.on(GoogleMapsEvent.MARKER_CLICK).subscribe(() => {
//       this.showToast('clicked!');
//     });
//   })
//   .catch(err => {
//     this.loading.dismiss();
//     this.showToast(err.error_message);
//   });
// }

// async showToast(message: string) {
//   let toast = await this.toastCtrl.create({
//     message: message,
//     duration: 2000,
//     position: 'middle'
//   });

//   toast.present();
// }
