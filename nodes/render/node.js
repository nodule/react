react.initializeTouchEvents(true); // bit of a hack
output = function() {
  react.render(
    $.element,
    $.container,
    function() {
      cb({
        element: $.element,
      });
      if ($.container) {
        cb({container: $.container});
      }
    }
  );
};
