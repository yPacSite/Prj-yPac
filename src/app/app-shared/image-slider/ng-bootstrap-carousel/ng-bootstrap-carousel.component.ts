import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbCarouselConfig, NgbCarousel } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-ng-bootstrap-carousel',
  templateUrl: './ng-bootstrap-carousel.component.html',
  styleUrls: ['./ng-bootstrap-carousel.component.css'],
  providers: [NgbCarouselConfig]
})
export class NgBootstrapCarouselComponent {

  images = [
    { title: 'We are an IT company', short: 'IT services for businesses', src: "assets/banners/1.jpg" },
    { title: 'Client-Tailored Services', short: 'Customized for clients business needs', src: "../assets/banners/2.jpg" },
    { title: 'Affordable Service Rates', short: 'Packages crafted for reasonable rates', src: "../assets/banners/4.jpg" },
    { title: 'Effective Client Support', short: 'Fast and Reliable support for our customers ', src: "../assets/banners/3.jpg" }
  ];

}
