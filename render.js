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
        type: "DOMElement"
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
  fn: function render(input, output, state, done, cb, on, react) {
    var r = function() {
      react.render(
        input.element,
        input.container,
        function() {
          output({
            element: input.element,
            container: input.container
          });
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