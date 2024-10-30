import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { interval, Subscription } from 'rxjs';

@Component({
  templateUrl: './product-page.component.html',
  styles: ``
})
export class ProductPageComponent {

  private fb = inject( FormBuilder );

  public color: string = 'green';
  public interval$?: Subscription;
  public flag: number = 0;

  public myForm: FormGroup = this.fb.group({
    name: ['', [ Validators.required, Validators.minLength(6), Validators.email ] ]
  })

  changeColor() {
    if ( this.flag === 0 ) {
      this.interval$ = interval(500).subscribe( () => this.color = '#xxxxxx'.replace(/x/g, y=>(Math.random()*16|0).toString(16)) );
      this.flag++;
      return;
    }
    this.interval$?.unsubscribe();
    this.flag = 0;
    return;
  }


}
