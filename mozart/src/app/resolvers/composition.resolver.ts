import { CompositionService } from '../data/composition.service';

/* @ngInject */
export function getComposition($stateParams, compositionService: CompositionService) {

    return compositionService.get($stateParams.id);
}
