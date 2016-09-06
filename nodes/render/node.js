// react.initializeTouchEvents(true); // bit of a hack
output = function() {
  react_dom.render(
    $.element,
    $.container,
    function() {
      cb({
        element: $.get('element'),
      });
      if ($.container) {
        cb({container: $.get('container')});
      }
    }
  );
};
