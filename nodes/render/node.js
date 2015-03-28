react.initializeTouchEvents(true); // bit of a hack
output = function() {
  react.render(
    input.element,
    input.container,
    function() {
      cb({
        element: input.element,
      });
      if (input.container) {
        cb({container: input.container});
      }
    }
  );
};
