import { Injectable } from '@angular/core';

export class Tooltip {
    isShown: boolean;
    text: string;
}

export class Marker {
    location: any;
    tooltip: Tooltip;
}

let markerUrl = "https://js.devexpress.com/Demos/RealtorApp/images/map-marker.png";

let markers: Marker[] = [{
    location: "40.7825, -73.966111",
    tooltip: {
        isShown: false,
        text: "Central Park"
    }
}, {
    location: "General Ernesto Montagne 170, Miraflore, Lima, Peru",
    tooltip: {
        isShown: false,
        text: "Brooklyn Bridge"
    }
}];

export class MapSetting {
    key: string;
    name: string;
}

let mapTypes: MapSetting[] = [{
    key: "roadmap",
    name: "Road Map"
}, {
    key: "satellite",
    name: "Satellite (Photographic) Map"
}, {
    key: "hybrid",
    name: "Hybrid Map"
}];


@Injectable()
export class Service {
    getMapTypes(): MapSetting[] {
        return mapTypes;
    }
    getMarkerUrl() : string {
        return markerUrl;
    }
    getMarkers() : Marker[] {
        return markers;
    }
}