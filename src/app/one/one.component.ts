import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-one',
  template: `
  <button class="btn-primary">
  Primary
</button>
<br />
<br />

<button class="btn-secondary">
  Secondary
</button>
<br />
<br />

<button class="btn-primary" disabled>
  Primary disabled
</button>
<br />
<br />

<button class="btn-secondary" disabled>
  Secondary Disabled
</button>
`,
  styleUrls: ['./one.component.scss']
})
export class OneComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}