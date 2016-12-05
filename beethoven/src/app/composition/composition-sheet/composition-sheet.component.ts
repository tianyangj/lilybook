import { Component, OnInit, Input, ViewChild } from '@angular/core';

import PhotoSwipe from 'photoswipe/dist/photoswipe';
import PhotoSwipeUI_Default from 'photoswipe/dist/photoswipe-ui-default';

@Component({
    selector: 'lb-composition-sheet',
    templateUrl: './composition-sheet.component.html',
    styleUrls: ['./composition-sheet.component.scss']
})
export class CompositionSheetComponent implements OnInit {

    @Input() sheet;

    @ViewChild('pswpEl') pswpEl;

    constructor() { }

    ngOnInit() {
    }

    show() {
        let pswpElement = this.pswpEl.nativeElement;
        let items = this.sheet.images.map(image => {
            return {
                src: image,
                w: 2550,
                h: 3300
            };
        });
        let options = {
            index: 0
        };
        let gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, items, options);
        gallery.init();
    }

}
