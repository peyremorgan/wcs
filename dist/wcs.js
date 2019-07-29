
(function(doc){
  var scriptElm = doc.scripts[doc.scripts.length - 1];
  var warn = ['[wcs] Deprecated script, please remove: ' + scriptElm.outerHTML];

  warn.push('To improve performance it is recommended to set the differential scripts in the head as follows:')

  var parts = scriptElm.src.split('/');
  parts.pop();
  parts.push('wcs');
  var url = parts.join('/');

  var scriptElm = doc.createElement('script');
  scriptElm.setAttribute('type', 'module');
  scriptElm.src = url + '/wcs.esm.js';
  doc.head.appendChild(scriptElm);
  warn.push(scriptElm.outerHTML);

  scriptElm = doc.createElement('script');
  scriptElm.setAttribute('nomodule', '');
  scriptElm.src = url + '/wcs.js';
  doc.head.appendChild(scriptElm);
  warn.push(scriptElm.outerHTML);

  console.warn(warn.join('\n'));

})(document);