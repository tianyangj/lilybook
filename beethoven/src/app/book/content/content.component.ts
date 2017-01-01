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
  @ViewChild('swiperPrev') swiperPrev: ElementRef;
  @ViewChild('swiperNext') swiperNext: ElementRef;
  @Input() book;
  swiper;
  compositions = [];
  pages = [];

  constructor() { }

  ngOnInit() {
    Observable
      .merge(...this.book.compositions)
      .take(this.book.compositions.length)
      .subscribe((composition: any) => {
        // builds compositions
        this.compositions.push(composition);
        // builds pages with composition sheet images
        this.buildPages(composition);
      }, (err) => {
        console.error(err);
      }, () => {
        // after all compositions have been fetched, initialize swiper
        setTimeout(() => {
          this.swiper = new Swiper(this.swiperContainer.nativeElement, {
            nextButton: this.swiperNext.nativeElement,
            prevButton: this.swiperPrev.nativeElement,
            hashnav: true,
            preloadImages: false,
            lazyLoading: true,
            lazyLoadingInPrevNext: true,
            lazyLoadingInPrevNextAmount: 1
          });
        });
      });
  }

  slideTo(composition) {
    if (this.swiper) {
      let pageIndex = this.pages.findIndex(page => {
        return page.compositionId === composition.$key;
      });
      // need to offset cover page
      this.swiper.slideTo(pageIndex + 1);
    }
  }

  private buildPages(composition) {
    composition.sheet.images.forEach(image => {
      this.pages.push({
        compositionId: composition.$key,
        image: image
      });
    });
  }

}
