import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css']
})
export class TestimonialsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
 
  title = 'OwlCarousel2 in Angular7 with Custom Navigation Arrows';
 
  carouselOptions = {
    nav: true,
    navText: ["<div class='nav-btn prev-slide'></div>", "<div class='nav-btn next-slide'></div>"],
    responsiveClass: true,
    dots: false,
    responsive: {
      0: {
        items: 1,
        nav: false
      },
      600: {
        items: 1,
        nav: false
      },
      1000: {
        items: 1,
        nav: false,
        loop: false
      },
      1500: {
        items: 1,
        nav: false,
        loop: false
      }
    }
  }
 
  images = [
    {
      text: "Que increible fue trabajar con WIC Studio! Me hicieron sentir en casa y mejor atendida imposible! Gracias por siempre trabajar con calidad y ofrecer lo mejor para el talento",
      author: "Fefi Oliveira",
      rrss: "@fefioliveira",
      rrssa: "https://www.instagram.com/fefioliveira/",
      image: "../../assets/img/fefi.png",
      bgimg: "<div class='avatar' style='../../assets/img/fefi.png'></div>"
    },
    {
      text: "Mi nombre es Abelardo Chahwan influencer se redes sociales @abelardo puedo decir que haber trabajado para Wic Studio fue una de las mejores expreciencias, me encantaría volver a trabajar con ellos, muy profesionales.",
      author: "Abelardo Chahwan",
      rrss: "@abelardo",
      rrssa: "https://www.instagram.com/abelardo/",
      image: "../../assets/img/abelardo.png",
      bgimg: "<div class='avatar' style='../../assets/img/abelardo.jpg'></div>"
    },
    {
      text: "WIC Studio is my FAAAAV! I am an independent musician/artist and they have supported me in so many ways! From sharing my music with others to help me create my press materials. If you are asking yourself were to start, you have found the correct place ;) WIC rocks!",
      author: "Musiana",
      rrss: "@musiana",
      rrssa: "https://www.instagram.com/musiana/",
      image: "../../assets/img/musiana.png",
      bgimg: "<div class='avatar' style='../../assets/img/musiana.jpg'></div>"
    },
    {
      text: "WIC Studio has given us invaluable data to use and optimize our digital marketing campaigns. We couldn't be happier about their work and their passion when it comes to our business and our road to success.",
      author: "Gerardo",
      rrss: "Socialy",
      rrssa: "https://www.socialy.cl",
      image: "../../assets/img/gerardo.png",
      bgimg: "<div class='avatar' style='../../assets/img/testimonial.jpeg'></div>"
    }
  ]
 
 
 
}