const template = `
    <div layout="row" style="position:relative;margin:8px;">
        <div flex="40" style="padding:8px;z-index:1;text-align:center;">
            <a ui-sref="composition({id:$ctrl.composition.$id})">
                <img 
                    ng-src="{{$ctrl.composition.thumbnail.url}}" 
                    src="https://placehold.it/200x300"
                    style="width:100%;max-width:200px;vertical-align:bottom;border-radius:4px;" />
            </a>
        </div>
        <div flex="60">
        </div>
        <md-card layout="row" style="position:absolute;bottom:0;left:0;right:0;margin:0;min-height:140px;">
            <div flex="40">
            </div>
            <div flex="60" style="padding:8px 8px 8px 0;">
                <a ui-sref="composition({id:$ctrl.composition.$id})" 
                    class="md-title line-clamp-2" 
                    style="margin:8px 0;line-height:24px;"
                    md-colors="{color:'primary-600'}">
                    {{$ctrl.composition.title}}
                </a>
                <h5 class="md-subhead line-clamp-1" style="margin:8px 0;line-height:24px;">by {{$ctrl.composition.composerId}}</h5>
                <p class="md-caption line-clamp-3" style="line-height:16px;">{{$ctrl.composition.description}}<p>
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
