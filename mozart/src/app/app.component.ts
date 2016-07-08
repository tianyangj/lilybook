export const AppComponent: angular.IComponentOptions = {
    template: `
        <div layout="column" layout-fill>
            <lb-header></lb-header>
            <md-content flex layout="row">
                <lb-sidenav></lb-sidenav>
                <ui-view flex></ui-view>
            </md-content>
        </div> 
    `
};
