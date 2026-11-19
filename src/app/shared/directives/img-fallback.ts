import { Directive, input } from '@angular/core';
import { IMAGES } from '../../core/constants/image-assets';

/**
 * Put `appImgFallback` on an <img>: if the picture fails to load, it is swapped (once) for a neutral
 * placeholder instead of leaving a broken-image icon or an empty box.
 */
@Directive({
  selector: 'img[appImgFallback]',
  host: { '(error)': 'onError($event)' },
})
export class ImgFallback {
  /** Picture used when loading fails. Defaults to the shared product placeholder. */
  readonly appImgFallback = input<string>('');

  protected onError(event: Event): void {
    const img = event.target as HTMLImageElement;
    const fallback = this.appImgFallback() || IMAGES.fallback;
    if (img.getAttribute('data-fallback-applied')) return; // never loop if the fallback itself fails
    img.setAttribute('data-fallback-applied', 'true');
    img.src = fallback;
  }
}
