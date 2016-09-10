module.exports = {
  name: "element",
  ns: "react",
  description: "Create a ReactElement",
  phrases: {
    active: "Creating ReactElement {input.tag}"
  },
  dependencies: {
    npm: {
      react: require('react')
    }
  },
  ports: {
    input: {
      tag: {
        title: "Tag",
        type: "string"
      },
      props: {
        title: "Props",
        type: "object",
        "default": {}
      },
      children: {
        title: "Children",
        type: "array",
        required: false
      }
    },
    output: {
      component: {
        title: "React Component",
        type: "ReactElement"
      }
    }
  },
  fn: function element(input, $, output, state, done, cb, on, react) {
    var r = function() {
      var element = react.createElement(
        $.tag,
        $.props,
        $.children
      );

      output({
        component: $.create(element)
      });
    }.call(this);
    return {
      output: output,
      state: state,
      on: on,
      return: r
    };
  }
}