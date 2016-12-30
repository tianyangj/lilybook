import { Component, OnInit, Input, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

const Swiper = require('swiper');

@Component({
  selector: 'lb-book-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit, AfterViewInit {

  @ViewChild('swiperContainer') swiperContainer: ElementRef;
  @ViewChild('swiperPagination') swiperPagination: ElementRef;
  @ViewChild('swiperPrev') swiperPrev: ElementRef;
  @ViewChild('swiperNext') swiperNext: ElementRef;
  @Input() book;
  swiper: any;

  constructor() { }

  ngOnInit() {
    console.log(this.book)
  }

  ngAfterViewInit() {
    this.swiper = new Swiper(this.swiperContainer.nativeElement, {
      pagination: this.swiperPagination.nativeElement,
      nextButton: this.swiperNext.nativeElement,
      prevButton: this.swiperPrev.nativeElement
    });
  }

}
