import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
    selector: '[imageArray]'
})

export class ImageDirective {
    readyArray: String[];


    constructor(private el: ElementRef) { 
        this.readyArray = [
            "https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/images/gallery/1.jpg",
            "https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/images/gallery/2.jpg"]
    }

    @Input('imageArray') pictureArray: string;

    @HostListener('click', ['$event.target']) onClick() {
        this.test([
            "https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/images/gallery/1.jpg",
            "https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/images/gallery/2.jpg"])
        //this.readyArray = this.pictureArray.substring(1, this.pictureArray.length-1).split(", ");
    }

    private test(array: string[]) {
        this.el.nativeElement = array;
    }

}