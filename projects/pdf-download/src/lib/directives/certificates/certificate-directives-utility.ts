export class CertificateDirectivesUtility {
  static appendGhostCanvas(
    id: string,
    dimensions: {
      width: number,
      height: number
    }
  ): HTMLCanvasElement {
    const canvasElement = document.createElement('canvas');
    canvasElement.id = id;
    canvasElement.height = dimensions.height;
    canvasElement.width = dimensions.width;
    canvasElement.style.display = 'none';
    document.body.appendChild(canvasElement);
    return canvasElement;
  }

  static extractFileName(template: string): string {
    try {
      return template.split('/').pop().indexOf('.svg') === -1 ? 'certificate' : template.split('/').pop().split('.svg')[0];
    } catch (e) {
      return 'certificate';
    }
  }
}
