import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IdentityComponent } from './identity/identity.component';
import { AvatarComponent } from './avatar/avatar.component';
import { SkillsComponent } from './skills/skills.component';
import { ExpComponent } from './exp/exp.component';
import { ExpdetailComponent } from './expdetail/expdetail.component';
import { StudiesComponent } from './studies/studies.component';
import { LangComponent } from './lang/lang.component';
import { ReposComponent } from './repos/repos.component';

@NgModule({
  	declarations: [
   		AppComponent,
    		IdentityComponent,
    		AvatarComponent,
    		SkillsComponent,
    		ExpComponent,
    		ExpdetailComponent,
    		StudiesComponent,
    		LangComponent,
    		ReposComponent
  	],
  	imports: [
    		BrowserModule,
		BrowserAnimationsModule,
    		AppRoutingModule,
		HttpClientModule 
  	],
  	providers: [],
  	bootstrap: [AppComponent]
})
export class AppModule { }
