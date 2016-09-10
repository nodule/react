module.exports = {
  name: "render",
  ns: "react",
  description: "Render a ReactElement into the DOM",
  phrases: {
    active: "Rendering ReactElement"
  },
  dependencies: {
    npm: {
      "react-dom": require('react-dom')
    }
  },
  ports: {
    input: {
      element: {
        title: "React Element",
        type: "function"
      },
      container: {
        title: "Container",
        type: "HTMLElement",
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
        type: "HTMLElement"
      }
    }
  },
  fn: function render(input, $, output, state, done, cb, on, react_dom) {
    var r = function() {
      react_dom.render(
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