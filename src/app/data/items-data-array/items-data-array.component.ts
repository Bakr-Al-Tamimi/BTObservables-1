import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-items-data-array',
  templateUrl: './items-data-array.component.html',
  styleUrls: ['./items-data-array.component.css']
})
export class ItemsDataArrayComponent implements OnInit {
  public items = Array.from({ length: 100 }).map((_, i) => `BT Angular Test Item #: ${i}`);
  SelectedItem: string = '';
  public sizes = ['XS', 'S', 'M', 'L', 'XL'];
  SelectedOption: string = '';
  constructor() { }
  clickedSize(size: string) {
    this.SelectedOption = size;
  }
  clickedItem(item: string) {
    this.SelectedItem = item;
  }
  ngOnInit(): void {
  }

}
