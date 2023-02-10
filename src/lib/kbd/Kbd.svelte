<script lang="ts">
  import classNames from 'classnames';
  export let color: 'primary' | 'gray' = 'gray';
  export let kbdClass: string = `text-xs font-semibold text-${color}-800 bg-${color}-100 border border-${color}-200 rounded-lg dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500`;
</script>

<kbd class={classNames(kbdClass, $$props.class)}>
  <slot />
</kbd>
