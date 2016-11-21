import { Component, OnInit, Input } from '@angular/core';

import { DataService } from '../../core/data.service';

@Component({
    selector: 'lb-splash-collection',
    templateUrl: './collection.component.html',
    styleUrls: ['./collection.component.scss']
})
export class CollectionComponent implements OnInit {

    @Input() collectionKey: string;
    collection: any;

    constructor(
        private dataService: DataService
    ) { }

    ngOnInit() {
        this.dataService.getCollection(this.collectionKey).subscribe(collection => {
            this.collection = collection;
        });
    }

}
