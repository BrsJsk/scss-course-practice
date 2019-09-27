import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-one',
  template: `
  <button class="btn btn-primary">
  Primary
</button>
<br />
<br />

<button class="btn btn-secondary">
  Secondary
</button>
<br />
<br />

<button class="btn btn-primary" disabled>
  Primary disabled
</button>
<br />
<br />

<button class="btn btn-secondary" disabled>
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