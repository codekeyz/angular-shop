import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterModule } from './components/widgets/footer/footer.module';
import { NavigationModule } from './components/widgets/navigation/navigation.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, FooterModule, NavigationModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
