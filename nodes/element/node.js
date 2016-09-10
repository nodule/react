output = function() {
  var element = react.createElement(
    $.tag,
    $.props,
    $.children
  );

  cb({
    element: $.create(element)
  });
};
