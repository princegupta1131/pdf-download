import {Directive, HostListener, Inject, Input} from '@angular/core';
import {CertificateDirectivesUtility} from './certificate-directives-utility';
import { CertificateDownloadAsPdfService } from './certificate-download-as-pdf.service';

@Directive({
  selector: '[sbCertificateDownloadAsPdf]'
})
export class CertificateDownloadAsPdfDirective {
  @Input() template: string;

  constructor(
    @Inject('CANVG') private canvgModule,
    @Inject('JSPDF') private jsPDFModule,
    private certificateDownloadAsPdfService: CertificateDownloadAsPdfService
  ) {
  }

  @HostListener('click', ['$event'])
  async onClick($event: MouseEvent) {
    this.certificateDownloadAsPdfService.download(this.template);
    // const canvasElement = CertificateDirectivesUtility.appendGhostCanvas(
    //   'sbCertificateDownloadAsPdfCanvas' + Date.now(),
    //   {
    //     width: 1060,
    //     height: 750
    //   }
    // );
    // const context: CanvasRenderingContext2D = canvasElement.getContext('2d');
    // const Canvg = await this.canvgModule;
    // const canvg = await Canvg.from(context, this.template);

    // const filename = CertificateDirectivesUtility.extractFileName(this.template);

    // canvg.start();
    // await canvg.ready();

    // const imgData = canvasElement.toDataURL('image/png');
    // const JsPDF = await this.jsPDFModule;
    // const pdf = new JsPDF({orientation: 'landscape'});
    // pdf.addImage(imgData, 'PNG', 10, 10);
    // pdf.save(filename + '.pdf');

    // canvasElement.remove();
  }
}
