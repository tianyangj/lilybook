import { Component, OnInit, OnDestroy } from '@angular/core';
import { MdDialogRef, MdSnackBar } from '@angular/material';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { Composition, Collection, CollectionModel } from '../../core/models';
import { AppService } from '../../core/app.service';
import * as _ from 'lodash';

@Component({
    templateUrl: './dialog-add-collection.component.html',
    styleUrls: ['./dialog-add-collection.component.scss']
})
export class DialogAddCollectionComponent implements OnInit, OnDestroy {

    userId: string;
    composition: Composition;
    collections: CollectionModel[];
    showCreate = false;
    collectionName = '';
    subscription: Subscription;

    constructor(
        private mdSnackBar: MdSnackBar,
        private dialogRef: MdDialogRef<DialogAddCollectionComponent>,
        private appService: AppService
    ) { }

    ngOnInit() {
        this.subscription = this.appService.libraryChanged.subscribe(collections => {
            this.collections = collections.map(collection => {
                return Object.assign({}, collection, {
                    checked: collection.compositions.hasOwnProperty(this.composition.$key)
                });
            });
            this.showCreate = collections.length === 0;
        });
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

    updateCollection(composition, collection, $event) {
        let message;
        let newCollection = {
            name: collection.name,
            compositions: collection.compositions
        }
        if ($event.checked) {
            let values = Object.keys(collection.compositions).map(id => collection.compositions[id]);
            let max = _.max(values) + 1 || 1;
            newCollection.compositions[composition.$key] = max;
            message = `${composition.title} was added to ${collection.name}.`
        } else {
            delete newCollection.compositions[composition.$key];
            message = `${composition.title} was removed from ${collection.name}.`
        }
        this.appService.setUserCollections(collection.$key, newCollection).subscribe(() => {
            this.mdSnackBar.open(message, null, { duration: 3000 });
        });
    }

    createCollection(composition) {
        let newCollection = {
            name: this.collectionName,
            compositions: {}
        };
        newCollection.compositions[composition.$key] = 1;
        this.appService.setUserCollections(null, newCollection).subscribe(() => {
            this.dialogRef.close();
            this.mdSnackBar.open(`${composition.title} was added to ${this.collectionName}.`, null, { duration: 3000 });
        });
    }

}
