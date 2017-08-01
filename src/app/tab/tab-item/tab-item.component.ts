import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'mz-tab-item',
  templateUrl: './tab-item.component.html',
  styleUrls: ['./tab-item.component.scss']
})
export class TabItemComponent {
  @Input() active: boolean;
  @Input() disabled: boolean;
  @Input() label;
  @Input() target: string;

  get link(): string {
    return this.label.replace(/\s+/g, '-').toLowerCase();
  }

}
