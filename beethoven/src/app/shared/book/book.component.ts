import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Observable } from 'rxjs/Observable';

const Swiper = require('swiper');

@Component({
  selector: 'lb-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {

  @Input() book;
  @ViewChild('swiperContainer') swiperContainer: ElementRef;
  @ViewChild('swiperPrev') swiperPrev: ElementRef;
  @ViewChild('swiperNext') swiperNext: ElementRef;

  title: string;
  composition: any;
  swiper;
  pages = [];
  compositions;

  constructor() { }

  ngOnInit() {
    this.title = this.book.name;
    Observable.combineLatest(this.book.compositions$).subscribe(compositions => {
      this.compositions = compositions;
      this.pages = this.buildPages(compositions);
      // initialize swiper
      setTimeout(() => {
        this.swiper = new Swiper(this.swiperContainer.nativeElement, {
          nextButton: this.swiperNext.nativeElement,
          prevButton: this.swiperPrev.nativeElement,
          hashnav: true,
          preloadImages: false,
          lazyLoading: true,
          lazyLoadingInPrevNext: true,
          lazyLoadingInPrevNextAmount: 2,
          onSlideChangeStart: (swiper) => {
            let page = this.pages[swiper.activeIndex - 1];
            if (page) {
              this.composition = page.composition;
              this.title = this.composition.title;
            } else {
              this.composition = null;
              this.title = this.book.name;
            }
          }
        });
      });
    });
  }

  slideTo(composition?) {
    if (this.swiper) {
      if (composition) {
        let pageIndex = this.pages.findIndex(page => {
          return page.composition.$key === composition.$key;
        });
        // need to offset cover page
        this.swiper.slideTo(pageIndex + 1);
      } else {
        this.swiper.slideTo(0);
      }
    }
  }

  private buildPages(compositions) {
    let pages = [];
    compositions.forEach(composition => {
      composition.sheet.images.forEach(image => {
        pages.push({
          composition: composition,
          image: image
        });
      });
    });
    return pages;
  }

}
