react.initializeTouchEvents(true); // bit of a hack
output = function() {
  react.render(
    input.element,
    input.container,
    function() {
      cb({
        element: input.element,
        container: input.container
      });
    }
  );
};