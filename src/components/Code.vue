<template>
  <!-- <highlightjs autodetect :code="code" /> -->
  <!-- <highlightjs language="javascript" code="var x = 10;" /> -->
  <pre>
    <code class="javascript">{{ code }}</code>
  </pre>
</template>

<script>
import hljs from 'highlight.js';
import { onMounted } from 'vue';

/* distribute classnames from parent elements to each individual letter,
 * wrapping each letter in a span */
const parseElement = (ele, cname) => {
  if (ele.nodeName === 'SPAN') {
    cname = cname + ' ' + ele.className;
    return Array.from(ele.childNodes).reduce(
      (acc, e) =>
        acc.concat(
          parseElement(e, cname + (e.className ? ' ' + e.className : ''))
        ),
      []
    );
  }

  return Array.from(ele.textContent.split('')).map(
    (letter) => `<span class="${cname} pending">${letter}</span>`
  );
};

export default {
  name: 'Code',
  setup() {
    onMounted(() => {
      document.querySelectorAll('pre code').forEach((block) => {
        hljs.highlightBlock(block);
      });

      const code = document.querySelector('pre code');
      let res = [];
      for (const node of code.childNodes) {
        if (node.className === 'hljs-comment') {
          res.push(node.outerHTML);
        } else {
          res = res.concat(parseElement(node, ''));
        }
      }

      code.innerHTML = res.join('');
    });
  },
  data() {
    return {
      code: `function initProps (vm: Component, propsOptions: Object) {
  const propsData = vm.$options.propsData || {}
  const props = vm._props = {}
  // cache prop keys so that future props updates can iterate using Array
  // instead of dynamic object key enumeration.
  const keys = vm.$options._propKeys = []
  const isRoot = !vm.$parent
  // root instance props should be converted
  if (!isRoot) {
    toggleObserving(false)
  }
  for (const key in propsOptions) {
    keys.push(key)
    const value = validateProp(key, propsOptions, propsData, vm)
    /* istanbul ignore else */
    if (process.env.NODE_ENV !== 'production') {
      const hyphenatedKey = hyphenate(key)
      if (isReservedAttribute(hyphenatedKey) ||
          config.isReservedAttr(hyphenatedKey)) {
        warn(
          \`"\${hyphenatedKey}" is a reserved attribute and cannot be used as component prop.\`,
          vm
        )
      }
      defineReactive(props, key, value, () => {
        if (!isRoot && !isUpdatingChildComponent) {
          warn(
            \`Avoid mutating a prop directly since the value will be \` +
            \`overwritten whenever the parent component re-renders. \` +
            \`Instead, use a data or computed property based on the prop's \` +
            \`value. Prop being mutated: "\${key}"\`,
            vm
          )
        }
      })
    } else {
      defineReactive(props, key, value)
    }
    // static props are already proxied on the component's prototype
    // during Vue.extend(). We only need to proxy props defined at
    // instantiation here.
    if (!(key in vm)) {
      proxy(vm, \`_props\`, key)
    }
  }
    toggleObserving(true)
  }`,
    };
  },
};
</script>

<style>
pre {
  text-align: left;
  font-size: 14px;
  line-height: 1.3rem;
  margin: 0 5em 0 10%;
  padding: 2em 0;
  position: relative;
}

.pending {
  color: #657b83 !important;
}
</style>
