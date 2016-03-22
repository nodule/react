module.exports = {
  name: "render",
  ns: "react",
  description: "Render a ReactElement into the DOM",
  phrases: {
    active: "Rendering ReactElement"
  },
  dependencies: {
    npm: {
      react: require('react')
    }
  },
  ports: {
    input: {
      element: {
        title: "React Element",
        type: "ReactElement"
      },
      container: {
        title: "Container",
        type: "DOMElement",
        required: false
      }
    },
    output: {
      element: {
        title: "React Element",
        type: "ReactElement"
      },
      container: {
        title: "Container",
        type: "DOMElement"
      }
    }
  },
  fn: function render(input, $, output, state, done, cb, on, react) {
    var r = function() {
      react.render(
        $.element,
        $.container,
        function() {
          output({
            element: $.get('element'),
          });
          if ($.container) {
            output({
              container: $.get('container')
            });
          }
        }
      );
    }.call(this);
    return {
      output: output,
      state: state,
      on: on,
      return: r
    };
  }
}