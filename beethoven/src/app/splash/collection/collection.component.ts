import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';

import { DataService } from '../../core/data.service';

const Swiper = require('swiper');

@Component({
    selector: 'lb-splash-collection',
    templateUrl: './collection.component.html',
    styleUrls: ['./collection.component.scss']
})
export class CollectionComponent implements OnInit {

    @ViewChild('swiperContainer') swiperContainer: ElementRef;
    @ViewChild('swiperPrev') swiperPrev: ElementRef;
    @ViewChild('swiperNext') swiperNext: ElementRef;
    @ViewChild('swiperScrollbar') swiperScrollbar: ElementRef;
    @Input() collectionId: string;
    @Input() composerId: string;
    collection: any;

    constructor(
        private dataService: DataService
    ) { }

    ngOnInit() {
        let collection$;
        if (this.collectionId) {
            collection$ = this.dataService.getCollection(this.collectionId, 8);
        } else if (this.composerId) {
            collection$ = this.dataService.getComposerCollection(this.composerId, 8);
        }
        if (collection$) {
            collection$.subscribe(collection => {
                this.collection = collection;
                setTimeout(() => {
                    new Swiper(this.swiperContainer.nativeElement, {
                        nextButton: this.swiperNext.nativeElement,
                        prevButton: this.swiperPrev.nativeElement,
                        scrollbar: this.swiperScrollbar.nativeElement,
                        slidesPerView: 4,
                        slidesPerGroup: 4,
                        breakpoints: {
                            384: {
                                slidesPerView: 1,
                                slidesPerGroup: 1
                            },
                            768: {
                                slidesPerView: 2,
                                slidesPerGroup: 2
                            },
                            1024: {
                                slidesPerView: 3,
                                slidesPerGroup: 3
                            },
                            1280: {
                                slidesPerView: 4,
                                slidesPerGroup: 4
                            }
                        }
                    });
                });
            });
        }
    }

}
