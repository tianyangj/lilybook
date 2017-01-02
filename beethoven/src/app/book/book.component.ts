import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/merge';

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
  compositions = [];
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
              lazyLoadingInPrevNextAmount: 1,
              onSlideChangeStart: (swiper) => {
                let page = this.pages[swiper.activeIndex - 1];
                if (page) {
                  this.composition = this.compositions.find(composition => composition.$key === page.compositionId);
                  this.title = this.composition.title;
                } else {
                  this.composition = null;
                  this.title = this.book.name;
                }
              }
            });
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

  private buildPages(composition) {
    composition.sheet.images.forEach(image => {
      this.pages.push({
        compositionId: composition.$key,
        image: image
      });
    });
  }

}
