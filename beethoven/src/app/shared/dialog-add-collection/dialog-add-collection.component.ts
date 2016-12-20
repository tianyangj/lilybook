import { Component, OnInit } from '@angular/core';
import { MdDialogRef, MdSnackBar } from '@angular/material';
import { DataService } from '../../core/data.service';
import 'rxjs/add/operator/take';

@Component({
    templateUrl: './dialog-add-collection.component.html',
    styleUrls: ['./dialog-add-collection.component.scss']
})
export class DialogAddCollectionComponent implements OnInit {

    userId: string;
    composition;
    collections;
    showCreate = false;
    collectionName = '';

    constructor(
        private mdSnackBar: MdSnackBar,
        private dialogRef: MdDialogRef<DialogAddCollectionComponent>,
        private dataService: DataService
    ) { }

    ngOnInit() {
        this.dataService.getUserCollections(this.userId).take(1).subscribe(collections => {
            this.collections = collections;
            this.showCreate = collections.length === 0;
        });
    }

    inCollection(composition, collection): boolean {
        return collection.compositions[composition.$key];
    }

    updateCollection(composition, collection, $event) {
        let message;
        if ($event.checked) {
            collection.compositions[composition.$key] = true;
            message = `${composition.title} was added to ${collection.name}.`
        } else {
            delete collection.compositions[composition.$key];
            message = `${composition.title} was removed from ${collection.name}.`
        }
        this.dataService.setUserCollection(this.userId, collection.$key, {
            compositions: collection.compositions,
            name: collection.name
        }).then(() => {
            this.mdSnackBar.open(message, null, { duration: 3000 });
        });
    }

    createCollection(composition) {
        this.dataService.createUserCollection(this.userId, this.collectionName, composition.$key).then(() => {
            this.dialogRef.close();
            this.mdSnackBar.open(`${composition.title} was added to ${this.collectionName}.`, null, { duration: 3000 });
        });
    }

}
