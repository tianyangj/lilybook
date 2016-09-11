const template = `
    <div style="width:376px;height:220px;position:relative;overflow:hidden;">
        <md-card layout="row" style="position:absolute;bottom:0;">
            <div flex="40" style="position:relative;margin:8px;">
                <img ng-src="{{$ctrl.composition.thumbnail.url}}" style="width:100%;position:absolute;bottom:0;left:0;" />
            </div>
            <div flex="60" style="position:relative;margin:8px;">
                <h4 class="md-title line-clamp-2" style="margin:8px 0;">{{$ctrl.composition.title}}</h4>
                <h5 class="md-subhead line-clamp-1" style="margin:8px 0;">by {{$ctrl.composition.composerId}}</h5>
                <p class="md-caption line-clamp-3">{{$ctrl.composition.description}}<p>
            </div>
        </md-card>
    </div>
`;

export const ThumbnailCardComponent: angular.IComponentOptions = {
    template: template,
    bindings: {
        composition: '<'
    }
};
