import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'tools',
    loadChildren: () => import('./tools/tools.module').then( m => m.ToolsPageModule)
  },
  {
    path: 'genrepage',
    loadChildren: () => import('./genrepage/genrepage.module').then( m => m.GenrepagePageModule)
  },
  {
    path: 'agepage',
    loadChildren: () => import('./agepage/agepage.module').then( m => m.AgepagePageModule)
  },
  {
    path: 'countrypage',
    loadChildren: () => import('./countrypage/countrypage.module').then( m => m.CountrypagePageModule)
  },
  {
    path: 'weatherpage',
    loadChildren: () => import('./weatherpage/weatherpage.module').then( m => m.WeatherpagePageModule)
  },
  {
    path: 'wordpresspage',
    loadChildren: () => import('./wordpresspage/wordpresspage.module').then( m => m.WordpresspagePageModule)
  },
  {
    path: 'aboutpage',
    loadChildren: () => import('./aboutpage/aboutpage.module').then( m => m.AboutpagePageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
