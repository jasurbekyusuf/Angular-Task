import { Component } from '@angular/core';
import { titleLists } from '../titleList';

@Component({
  selector: 'app-inheritance-list',
  templateUrl: './inheritance-list.component.html',
  styleUrls: ['./inheritance-list.component.scss']
})
export class InheritanceListComponent {
  tileLists = titleLists;
}
