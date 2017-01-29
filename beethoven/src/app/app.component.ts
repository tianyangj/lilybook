import { Component } from '@angular/core';

@Component({
    selector: 'lb-app',
    template: `
        <router-outlet></router-outlet>
        <router-outlet name="popup"></router-outlet>
    `,
    styleUrls: ['./app.component.scss']
})
export class AppComponent { }
