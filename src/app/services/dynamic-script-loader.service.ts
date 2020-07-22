import { Injectable } from '@angular/core';

interface Scripts {
  name: string;
  src: string;
}

export const ScriptStore: Scripts[] = [
  { name: 'form.min', src: 'assets/js/form.min.js' },
  { name: 'map.min', src: 'assets/js/map.min.js' },
  { name: 'tinymce', src: 'assets/js/bundles/tinymce/tinymce.min.js' },
  { name: 'lightgallery', src: 'assets/js/bundles/lightgallery/dist/js/lightgallery-all.min.js' },
  { name: 'dataTables.buttons', src: 'assets/js/bundles/export-tables/dataTables.buttons.min.js' },
  { name: 'editable-table', src: 'assets/js/bundles/editable-table/mindmup-editabletable.js' },
  { name: 'buttons.flash', src: 'assets/js/bundles/export-tables/buttons.flash.min.js' },
  { name: 'jszip', src: 'assets/js/bundles/export-tables/jszip.min.js' },
  { name: 'buttons.html5', src: 'assets/js/bundles/export-tables/buttons.html5.min.js' },
  { name: 'buttons.print', src: 'assets/js/bundles/export-tables/buttons.print.min.js' },
  { name: 'bootstrap-colorpicker', src: 'assets/js/bundles/bootstrap-colorpicker/dist/js/bootstrap-colorpicker.min.js' },
  { name: 'ion.rangeSlider', src: 'assets/js/bundles/rangeSlider/js/ion.rangeSlider.min.js' },
  { name: 'googleapi', src: 'https://maps.google.com/maps/api/js?v=3&sensor=false' },
];

declare var document: any;

@Injectable()
export class DynamicScriptLoaderService {

  private scripts: any = {};

  constructor() {
    ScriptStore.forEach((script: any) => {
      this.scripts[script.name] = {
        loaded: false,
        src: script.src
      };
    });
  }

  load(...scripts: string[]) {
    const promises: any[] = [];
    scripts.forEach((script) => promises.push(this.loadScript(script)));
    return Promise.all(promises);
  }

  loadScript(name: string) {
    return new Promise((resolve, reject) => {

      if (!this.scripts[name].loaded) {

        //load script
        let script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = this.scripts[name].src;
        if (script.readyState) {  //IE
          script.onreadystatechange = () => {
            if (script.readyState === "loaded" || script.readyState === "complete") {
              script.onreadystatechange = null;
              this.scripts[name].loaded = true;
              resolve({ script: name, loaded: true, status: 'Loaded' });
            }
          };
        } else {  //Others
          script.onload = () => {
            this.scripts[name].loaded = true;
            resolve({ script: name, loaded: true, status: 'Loaded' });
          };
        }
        script.onerror = (error: any) => resolve({ script: name, loaded: false, status: 'Loaded' });
        document.getElementsByTagName('head')[0].appendChild(script);
      } else {
        resolve({ script: name, loaded: true, status: 'Already Loaded' });
      }
    });
  }
}
