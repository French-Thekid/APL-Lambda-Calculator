import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ChatComponent } from './chat/chat.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'about', loadChildren: './about/about.module#AboutPageModule' },
  { path: 'send', loadChildren: './send/send.module#SendPageModule' },
  {
    path: 'recieve',
    loadChildren: './recieve/recieve.module#RecievePageModule'
  },
  { path: 'lambda', loadChildren: './lambda/lambda.module#LambdaPageModule' },
  { path: 'chats/:id', component: ChatComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
