import {NgModule} from '@angular/core';
import {CertificateDownloadAsImageDirective} from './certificate-download-as-image.directive';
import {CertificateDownloadAsPdfDirective} from './certificate-download-as-pdf.directive';

export function normalizeCommonJSImport<T = any>(
  importPromise: Promise<T>,
): Promise<T> {
  // CommonJS's `module.exports` is wrapped as `default` in ESModule.
  return importPromise.then(function(m: any) {
    return (m.default || m) as T;
  });
}

let canvgImport;

export function canvgFactory() {
  if (!canvgImport) {
    return normalizeCommonJSImport(
      // @dynamic
      import(/* webpackChunkName: "canvg" */ 'canvg')
    ).then(function(i) {
      canvgImport = i;
      return canvgImport;
    });
  }
  return canvgImport;
}

let jspdfImport;

export function jsPdfFactory() {
  if (!jspdfImport) {
    return normalizeCommonJSImport(
      // @dynamic
      import(/* webpackChunkName: "jspdf" */ 'jspdf')
    ).then(function(i) {
      jspdfImport = i;
      return jspdfImport;
    });
  }

  return jspdfImport;
}

@NgModule({
  declarations: [
    CertificateDownloadAsImageDirective,
    CertificateDownloadAsPdfDirective
  ],
  exports: [
    CertificateDownloadAsImageDirective,
    CertificateDownloadAsPdfDirective
  ],
  providers: [
    {provide: 'CANVG', useFactory: canvgFactory},
    {provide: 'JSPDF', useFactory: jsPdfFactory},
  ]
})
export class CertificateDirectivesModule {

}
