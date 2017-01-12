import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

const Swiper = require('swiper');

@Component({
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {

  @ViewChild('swiperContainer') swiperContainer: ElementRef;
  @ViewChild('swiperPrev') swiperPrev: ElementRef;
  @ViewChild('swiperNext') swiperNext: ElementRef;
  book;
  title: string;
  composition: any;
  swiper;
  pages = [];

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.data.do(data => {
      console.log('book', data['book']);
    }).subscribe(data => {
      this.book = data['book'];
      this.title = this.book.name;
      this.pages = this.buildPages(this.book.compositions);
      // initialize swiper
      setTimeout(() => {
        this.swiper = new Swiper(this.swiperContainer.nativeElement, {
          nextButton: this.swiperNext.nativeElement,
          prevButton: this.swiperPrev.nativeElement,
          hashnav: true,
          preloadImages: false,
          lazyLoading: true,
          lazyLoadingInPrevNext: true,
          lazyLoadingInPrevNextAmount: 1,
          onSlideChangeStart: (swiper) => {
            let page = this.pages[swiper.activeIndex - 1];
            if (page) {
              this.composition = this.book.compositions.find(composition => composition.$key === page.compositionId);
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

  slideTo(composition) {
    if (this.swiper) {
      if (composition) {
        let pageIndex = this.pages.findIndex(page => {
          return page.compositionId === composition.$key;
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
          compositionId: composition.$key,
          image: image
        });
      });
    });
    return pages;
  }

}
