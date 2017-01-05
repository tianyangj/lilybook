import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

const algoliasearch = require('algoliasearch');
const autocomplete = require('autocomplete.js');

@Component({
  selector: 'lb-splash-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    let client = algoliasearch('NEPY6SGO3D', '33c4e0eddc431647c9732590f2bafd42');
    let index = client.initIndex('compositions');
    autocomplete('.sbx-custom__input', { hint: false }, [
      {
        source: autocomplete.sources.hits(index, { hitsPerPage: 5 }),
        displayKey: 'title',
        templates: {
          suggestion: (suggestion) => {
            return suggestion._highlightResult.title.value;
          }
        }
      }
    ]).on('autocomplete:selected', (event, suggestion, dataset) => {
      this.router.navigate(['/composition', suggestion.objectID]);
    });
  }

}
