import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ImageRegistryComponent } from './image-registry/image-registry.component';
import { DevUnitComponent } from './dev-unit/dev-unit.component';
import { ProdUnitComponent } from './prod-unit/prod-unit.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialExampleModule } from './material.module';
import { PluginsComponent } from './plugins/plugins.component';
import { InventoryComponent } from './inventory/inventory.component';
import { SettingComponent } from './setting/setting.component';
import { OAuthModule } from 'angular-oauth2-oidc';

// OAuth



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ImageRegistryComponent,
    DevUnitComponent,
    ProdUnitComponent,
    PluginsComponent,
    InventoryComponent,
    SettingComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    // Material
    MaterialExampleModule,
    // OAuth
    OAuthModule.forRoot()
  ],
  providers: [],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
