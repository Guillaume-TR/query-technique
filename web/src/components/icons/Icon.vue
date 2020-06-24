<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    fill="currentColor"
    :width="size"
    :height="size"
    :class="`icon icon-${name}`"
  >
    <component :is="name" />
  </svg>
</template>

<script>
import Edit from './Edit';
import Delete from './Delete';

export default {
  components: {
    Edit,
    Delete
  },
  props: {
    name: {
      type: String,
    },
    size: {
      type: [Number, String],
      default: 20
    }
  }
}
</script>
