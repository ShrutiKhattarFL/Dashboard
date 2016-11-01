import { Routes, RouterModule }  from '@angular/router';

import { MyComponent } from './mycomponent.component';

// noinspection TypeScriptValidateTypes
const routes: Routes = [
    {
        path: '',
        component: MyComponent
    }
];

export const routing = RouterModule.forChild(routes);
