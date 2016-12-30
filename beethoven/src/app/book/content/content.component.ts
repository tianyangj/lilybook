import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/merge';

const Swiper = require('swiper');

@Component({
  selector: 'lb-book-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  @ViewChild('swiperContainer') swiperContainer: ElementRef;
  @ViewChild('swiperPagination') swiperPagination: ElementRef;
  @ViewChild('swiperPrev') swiperPrev: ElementRef;
  @ViewChild('swiperNext') swiperNext: ElementRef;
  @Input() book;
  swiper: any;
  pages = [];

  constructor() { }

  ngOnInit() {
    Observable
      .merge(...this.book.compositions)
      .take(this.book.compositions.length)
      .subscribe((composition: any) => {
        // builds pages with composition sheet images
        this.pages = this.pages.concat(composition.sheet.images);
      }, (err) => {
        console.error(err);
      }, () => {
        // after all compositions have been fetched, initialize swiper
        setTimeout(() => {
          this.swiper = new Swiper(this.swiperContainer.nativeElement, {
            pagination: this.swiperPagination.nativeElement,
            nextButton: this.swiperNext.nativeElement,
            prevButton: this.swiperPrev.nativeElement,
            preloadImages: false,
            lazyLoading: true,
            lazyLoadingInPrevNext: true,
            lazyLoadingInPrevNextAmount: 1
          });
        });
      });
  }

}
