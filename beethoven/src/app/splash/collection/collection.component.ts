import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Observable } from 'rxjs/Observable';
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
    composer: any;
    compositions: any;

    constructor(
        private dataService: DataService
    ) { }

    ngOnInit() {
        if (this.collectionId) {
            this.dataService.getCollection(this.collectionId).switchMap(collection => {
                this.collection = collection;
                return Observable.combineLatest(this.collection.compositions$.slice(0, 8));
            }).subscribe(compositions => {
                this.compositions = compositions;
                this.initSwiper();
            });
        }
        if (this.composerId) {
            this.dataService.getComposer(this.composerId).switchMap(composer => {
                this.composer = composer;
                return Observable.combineLatest(this.composer.compositions$);
            }).subscribe(compositions => {
                this.compositions = compositions;
                this.initSwiper();
            });
        }
    }

    private initSwiper() {
        setTimeout(() => {
            new Swiper(this.swiperContainer.nativeElement, {
                nextButton: this.swiperNext.nativeElement,
                prevButton: this.swiperPrev.nativeElement,
                scrollbar: this.swiperScrollbar.nativeElement,
                slidesPerView: 6,
                slidesPerGroup: 6,
                breakpoints: {
                    320: {
                        slidesPerView: 2,
                        slidesPerGroup: 2
                    },
                    480: {
                        slidesPerView: 3,
                        slidesPerGroup: 3
                    },
                    640: {
                        slidesPerView: 4,
                        slidesPerGroup: 4
                    },
                    800: {
                        slidesPerView: 5,
                        slidesPerGroup: 5
                    },
                    960: {
                        slidesPerView: 6,
                        slidesPerGroup: 6
                    }
                }
            });
        });
    }

}
