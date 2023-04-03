import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AsideComponent } from './components/aside/aside.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SectionComponent } from './components/section/section.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { TaskComponent } from './components/task/task.component';
import { CapitalizePipe } from './pipes/capitalize.pipe';
import { LayoutModalComponent } from './components/modal/layout-modal/layout-modal.component';
import { AddTaskComponent } from './components/modal/add-task/add-task.component';
import { ShareFunctionsService } from './services/app/share-functions.service';
import { CreateBoardComponent } from './components/modal/create-board/create-board.component';

@NgModule({
  declarations: [
    AppComponent,
    AsideComponent,
    NavbarComponent,
    SectionComponent,
    WelcomeComponent,
    PageNotFoundComponent,
    TaskComponent,
    CapitalizePipe,
    LayoutModalComponent,
    AddTaskComponent,
    CreateBoardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ShareFunctionsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
