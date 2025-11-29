import { Routes } from '@angular/router';

export const routes: Routes = [
	{
		path: '',
		redirectTo: 'home',
		pathMatch: 'full'
	},
	{
		path: 'layout',
		loadComponent: () => import('./layout/layout').then(m => m.Layout),
		children: [
			{
				path: '',
				redirectTo: 'home',
				pathMatch: 'full'
			},
			{
				path: 'home',
				loadComponent: () => import('./pages/home/home').then(m => m.Home)
			}
		]
	}
];
