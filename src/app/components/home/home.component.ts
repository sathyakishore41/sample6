import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/Interface/products.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  Products: Array<Product> = [
    {
      Name: 'Iphone 11 Pro',
      Price: 1500,
      Desc: 'Mobile Phone',
      ProductPath: 'assets/pics/Iphone 11.png',
    },
    {
      Name: 'Samsung 10 Plus',
      Price: 1400,
      Desc: 'Mobile Phone',
      ProductPath: 'assets/pics/Samsung 10 Plus.png',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
