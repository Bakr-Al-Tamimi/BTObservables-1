import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-items-data-array',
  templateUrl: './items-data-array.component.html',
  styleUrls: ['./items-data-array.component.css']
})
export class ItemsDataArrayComponent implements OnInit {
 public items = Array.from({length: 100000}).map((_, i) => `Item #${i}`);

  constructor() { }

  ngOnInit(): void {
  }

}
