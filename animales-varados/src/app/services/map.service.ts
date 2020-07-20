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

let markers: Marker[] = [];

export class MapSetting {
    key: string;
    name: string;
}

let mapTypes: MapSetting[] = [{
    key: "roadmap",
    name: "Tradicional"
}, {
    key: "satellite",
    name: "Satelital"
}, {
    key: "hybrid",
    name: "Hibrido"
}];


@Injectable()
export class MapService {
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