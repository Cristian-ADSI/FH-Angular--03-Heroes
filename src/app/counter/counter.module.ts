import { NgModule } from "@angular/core";
import { CounterComponent } from "./components/counter/Counter.Component";

@NgModule({
  declarations: [
    CounterComponent
  ],
  exports:[
    CounterComponent
  ]
})
export class CounterModule {

}