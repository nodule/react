output = function() {
  var element = react.createElement(
    $.tag,
    $.props,
    $.children
  );

  cb({
    component: $.create(element)
  });
};
