import { Component } from '@angular/core';
import { AppService } from './core/app.service';

@Component({
    selector: 'lb-app',
    template: `
        <router-outlet></router-outlet>
        <router-outlet name="popup"></router-outlet>
    `,
    styleUrls: ['./app.component.scss']
})
export class AppComponent {

    constructor(
        private appService: AppService
    ) { }
}
