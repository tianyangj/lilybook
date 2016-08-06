export const ThumbnailComponent: angular.IComponentOptions = {
    template: `
        <md-card>
            <img ng-src="{{$ctrl.composition.thumbnail.url}}" src="//placehold.it/397x561?text=Image+Coming+Soon" class="md-card-image" alt="{{$ctrl.composition.title}}">
            <div class="md-padding">
                <span class="line-clamp-3">{{$ctrl.composition.title}}</span>
            </div>
        </md-card>
    `,
    bindings: {
        composition: '<'
    }
};
