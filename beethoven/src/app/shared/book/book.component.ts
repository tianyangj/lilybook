import { Component, OnChanges, Input, ViewChild, NgZone } from '@angular/core';
import { Observable } from 'rxjs/Observable';

const Swiper = require('swiper');

@Component({
  selector: 'lb-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnChanges {

  @Input() book;
  @ViewChild('swiperContainer') swiperContainer;
  @ViewChild('swiperPrev') swiperPrev;
  @ViewChild('swiperNext') swiperNext;

  compositions;
  pages;
  swiper;

  constructor(
    private zone: NgZone
  ) { }

  ngOnChanges() {
    Observable.combineLatest(this.book.compositions$).subscribe(compositions => {
      this.compositions = compositions;
      this.pages = this.buildPages(compositions);
      this.initializeSwiper();
    });
  }

  slideTo(compositionId) {
    const pageIndex = this.pages.findIndex(page => {
      return page.compositionId === compositionId;
    });
    // need to offset cover page
    this.swiper.slideTo(pageIndex + 1);
  }

  private buildPages(compositions) {
    return compositions.map(composition => {
      return composition.sheet.images.map(image => {
        return {
          compositionId: composition.$key,
          image: image
        };
      });
    }).reduce((acc, cur) => {
      return acc.concat(cur);
    }, []);
  }

  private initializeSwiper() {
    this.zone.runOutsideAngular(() => {
      setTimeout(() => {
        if (this.swiper) {
          this.swiper.destroy(false, true);
        }
        this.swiper = new Swiper(this.swiperContainer.nativeElement, {
          nextButton: this.swiperNext.nativeElement,
          prevButton: this.swiperPrev.nativeElement,
          hashnav: true,
          preloadImages: false,
          lazyLoading: true,
          lazyLoadingInPrevNext: true,
          lazyLoadingInPrevNextAmount: 2
        });
      });
    });
  }

}
