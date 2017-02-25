import { Component, OnInit, Input } from '@angular/core';
import { FirebaseObjectObservable } from 'angularfire2';
import { Key } from '../../core/models';

@Component({
    selector: 'lb-chip-key',
    templateUrl: './chip-key.component.html',
    styleUrls: ['./chip-key.component.scss']
})
export class ChipKeyComponent implements OnInit {

    @Input() key: FirebaseObjectObservable<Key>;
    showKey = false;

    constructor() { }

    ngOnInit() {
        this.showKey = !!this.key;
    }

}
