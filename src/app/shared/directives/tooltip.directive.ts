import { Directive, ElementRef, Input, OnDestroy, OnInit } from '@angular/core';
import tippy, {Placement,Props, roundArrow} from 'tippy.js';

@Directive({
  selector: '[tooltip]'
})
export class TooltipDirective implements OnInit , OnDestroy{

  @Input('tooltip') name: string;
  @Input() placement: Placement = 'top';
  @Input() options: Props;
  @Input() theme: string = null;  

  // @Input() set showTooltipImediately(value:boolean){
  //   this.showTooltipImediately = value;
  //   if(this.tippyInstance){
  //     this.showTooltip ? this.tippyInstance.show() : this.tippyInstance.hide();
  //   }
  // }
  

  tippyInstance = null;

  constructor(
    private el:ElementRef

  ) { }

  public ngOnInit(){
    if(this.name) {
      const tippyInstance = tippy(this.el.nativeElement, {
        ...this.options,
        animation: 'shift-toward-subtle',
        content:this.name,
        arrow:roundArrow,
        placement: this.placement,
        theme:this.theme,

      });
      this.tippyInstance = tippyInstance;
      this.tippyInstance.show();
      // if (this.disabled) {
      //   this.tippyInstance.disabled();
      // }
    }
  }

  public ngOnDestroy(){
    this.tippyInstance?.destroy();
  }


}
