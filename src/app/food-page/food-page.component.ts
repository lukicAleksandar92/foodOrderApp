import { Component, OnInit } from '@angular/core';
import { Food } from '../shared/models/food';
import { ActivatedRoute } from '@angular/router';
import { FoodService } from '../services/food/food.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-food-page',
  templateUrl: './food-page.component.html',
  styleUrls: ['./food-page.component.css']
})
export class FoodPageComponent implements OnInit {

  food!: Food;

  constructor(private activatedRoute:ActivatedRoute, private foodService: FoodService,
    private router: Router) { 

    activatedRoute.params.subscribe((params) => {
      if(params['id'])
      this.food = foodService.getFoodById(params['id']);
    })

  }

  ngOnInit(): void {
  }

}
