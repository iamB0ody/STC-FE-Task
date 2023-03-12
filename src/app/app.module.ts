import { isDevMode, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  HttpClient,
  HttpClientModule,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpLoaderFactory } from './@core/localization/config';
import { LoadingInterceptor } from './@core/interceptors/loading/loading.interceptor';
import { LoadingComponent } from './@shared/components/loading/loading.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { productsReducer } from './@store/reducers/products.reducer';
import { categoriesReducer } from './@store/reducers/categories.reducer';
import { EffectsModule } from '@ngrx/effects';
import { ProductsEffects } from './@store/effects/products.effect';
import { CategoriesEffects } from './@store/effects/categories.effect';

@NgModule({
  declarations: [AppComponent, LoadingComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
      // defaultLanguage: 'ar',
      useDefaultLang: true,
    }),
    MatProgressSpinnerModule,
    StoreModule.forRoot(
      { products: productsReducer, categories: categoriesReducer },
      {}
    ),
    EffectsModule.forRoot([ProductsEffects, CategoriesEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
