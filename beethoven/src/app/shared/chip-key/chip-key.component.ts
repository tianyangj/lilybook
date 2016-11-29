import { Component, OnInit, Input } from '@angular/core';

import { DataService } from '../../core/data.service';

@Component({
    selector: 'lb-chip-key',
    templateUrl: './chip-key.component.html',
    styleUrls: ['./chip-key.component.scss']
})
export class ChipKeyComponent implements OnInit {

    @Input() keyId: string;

    key;

    constructor(
        private dataService: DataService
    ) { }

    ngOnInit() {
        if (this.keyId) {
            this.dataService.getKey(this.keyId).subscribe(key => this.key = key);
        }
    }

}
