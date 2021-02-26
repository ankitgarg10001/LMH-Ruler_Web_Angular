import { Component, OnInit } from '@angular/core';
import { Slab } from '../model/slab';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  constructor() { }
  slabs: Slab[] = [];
  totalSlabs: number = 0;
  totalArea: number = 0;
  rate: number = 0;
  cartage: number = 0;
  totalAmount: number = 0;
  testString: String = "Test";

  ngOnInit(): void {
    this.addSlab();
  }
  addSlab() {
    let newSlab = new Slab();
    this.slabs.push(newSlab);
    this.updateCalculations();
  }

  updateCalculations() {
    this.updateSlabCount();
    this.updateTotalArea();
    this.getTotalAmount();

  }
  updateSlabCount() {
    this.totalSlabs = this.slabs.map(s => {
      if (s.getTotalArea() > 0 && typeof s.count !== 'undefined')
        return s.count;
      return 0;
    }
    ).reduce((sum, current) => sum + current, 0);
  }
  updateTotalArea() {
    this.totalArea = this.slabs.reduce((sum, current) => sum + current.getTotalArea(), 0);
  }

  getTotalAmount() {
    this.totalAmount = (this.totalArea * this.rate) + this.cartage;
  }

}
