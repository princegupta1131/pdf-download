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
      return template.match(/(?:[^\/][\d\w\.]+)(?<=(?:\.svg))/)[0].split('.')[0] || 'certificate';
    } catch (e) {
      return 'certificate';
    }
  }
}
