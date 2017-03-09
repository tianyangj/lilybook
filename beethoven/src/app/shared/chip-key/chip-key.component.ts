import { Component, OnInit, Input } from '@angular/core';
import { Key } from '../../core/models';

@Component({
    selector: 'lb-chip-key',
    templateUrl: './chip-key.component.html',
    styleUrls: ['./chip-key.component.scss']
})
export class ChipKeyComponent implements OnInit {

    @Input() key: Key;

    constructor() { }

    ngOnInit() {
    }

}
