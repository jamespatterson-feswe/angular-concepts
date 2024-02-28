import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent, SignUpComponent } from './components';

@NgModule({
  declarations: [],
  exports: [LoginComponent, SignUpComponent],
  imports: [CommonModule, LoginRoutingModule, LoginComponent, SignUpComponent],
})
export class LoginModule {}
