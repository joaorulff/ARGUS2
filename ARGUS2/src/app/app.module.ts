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


import { offlineViewReducer } from './store/reducers/offlineview.reducer';
import { OfflineViewEffects } from './store/effects/offline-view.effects';

// actions
const actions: { [ name: string ]: ActionReducer<any, Action> } = {
  'offlineView': offlineViewReducer,
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
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
