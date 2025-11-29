import { Routes } from '@angular/router';

export const routes: Routes = [
	{
		path: '',
		redirectTo: 'layout',
		pathMatch: 'full'
	},
	{
		path: 'layout',
		loadComponent: () => import('./layout/layout').then(m => m.Layout),
		children: [
			{
			}
		]
	}

];
