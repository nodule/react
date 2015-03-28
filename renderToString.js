module.exports = {
  name: "renderToString",
  ns: "react",
  description: "Render a ReactElement to its initial HTML",
  phrases: {
    active: "Rendering ReactElement to string"
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
      }
    },
    output: {
      element: {
        title: "React Element",
        type: "ReactElement"
      },
      html: {
        title: "HTML",
        type: "string"
      }
    }
  },
  fn: function renderToString(input, output, state, done, cb, on, react) {
    var r = function() {
      output.html = react.renderToString(input.element);
      output.element = input.element;
    }.call(this);
    return {
      output: output,
      state: state,
      on: on,
      return: r
    };
  }
}