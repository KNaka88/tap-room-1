import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { EditKegComponent } from './edit-keg.component';
import { NewKegComponent } from './new-keg.component';
import { KegListComponent } from './keg-list.component';
// import { CheckVolumePipe } from './check-volume.pipe';

@NgModule({
  imports: [ BrowserModule, FormsModule],
  declarations: [ AppComponent, EditKegComponent, NewKegComponent, KegListComponent],
  bootstrap: [ AppComponent ]
})

export class AppModule { }

//add CheckVolumePipe to NgModule
