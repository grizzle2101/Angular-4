import { Directive, HostListener, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appInputFormat]'//Directive Keyword
})

//Task 2 - Build up Directive.
export class InputFormatDirective {
  //Task 4 - Access DOM Element
  constructor(private el: ElementRef) { }

    //Solution 1 - Input Property
    @Input('appInputFormat')format: string;

  /*Decorate Method w HostListener
  @HostListener('focus') onFocus()
  {
    console.log("OnFocus...");
  }*/

  //Task 5 - LowerCase the Native Element.
  @HostListener('blur') onBlur()
  {
    console.log("OnBlur...");
    let value: string = this.el.nativeElement.value;

    if(this.format == 'lowercase')
      this.el.nativeElement.value = value.toLowerCase();

    else
      this.el.nativeElement.value = value.toUpperCase();  
  }
}
