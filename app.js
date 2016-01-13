(function(){

  var options = INSTALL_OPTIONS;
  var isPreview = INSTALL_ID == "preview";

  

  var script = document.createElement('script');
  document.head.appendChild(script);

  script.src = 'http://www.isosize.com/api/v1/widget.js' + options.customerId;

  if (isPreview){
    script.src += "?preview=true";
  }

})();
