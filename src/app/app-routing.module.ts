import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact/contact.component';
import { ArticlesComponent } from './articles/articles/articles.component';

const routes: Routes = [

  { path: 'contact', component: ContactComponent },
  { path: 'articles', component: ArticlesComponent },
  { path: '', pathMatch: 'full', redirectTo: 'articles' },

  { path: 'posts', loadChildren: () => import('./posts/posts.module').then(m => m.PostsModule) },
  { path: '**', redirectTo: 'articles' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
