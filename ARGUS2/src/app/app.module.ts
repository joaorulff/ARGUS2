// core modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// custom modules
import { MainViewModule } from './views/main-view/main-view.module';

// components
import { AppComponent } from './app.component';
import { Action, ActionReducer, StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';


import { offlineViewReducer } from './store/reducers/offline-view.reducer';
import { OfflineViewEffects } from './store/effects/offline-view.effects';
import { DialogsModule } from './dialogs/dialogs.module';
import { CommonModule } from '@angular/common';

// actions
const actions: { [ name: string ]: ActionReducer<any, Action> } = {
  'offlineViewState': offlineViewReducer,
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
    DialogsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MainViewModule,
    StoreModule.forRoot(actions),
    EffectsModule.forRoot([ OfflineViewEffects ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
