import {Directive, HostListener, Inject, Input} from '@angular/core';
import {CertificateDirectivesUtility} from './certificate-directives-utility';

@Directive({
  selector: '[sbCertificateDownloadAsImage]'
})
export class CertificateDownloadAsImageDirective {
  @Input() template: string;

  constructor(
    @Inject('CANVG') private canvg
  ) {
  }

  @HostListener('click', ['$event'])
  async onClick($event: MouseEvent) {
    const canvasElement = CertificateDirectivesUtility.appendGhostCanvas(
      'sbCertificateDownloadAsImageCanvas' + Date.now(),
      {
        width: 1754,
        height: 1240
      }
    );
    const context: CanvasRenderingContext2D = canvasElement.getContext('2d');

    const canvgModule = await this.canvg;
    const canvg = await canvgModule.from(context, this.template);

    const filename = CertificateDirectivesUtility.extractFileName(this.template);

    canvg.start();
    await canvg.ready();

    const ghostLink = document.createElement('a');
    ghostLink.download = filename + '.png';
    ghostLink.href = canvasElement.toDataURL('image/png');
    ghostLink.click();

    canvasElement.remove();
  }
}
