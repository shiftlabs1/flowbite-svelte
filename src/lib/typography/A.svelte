<script lang="ts">
  import classNames from 'classnames';

  export let href = '#';
  export let color = 'blue';
  export let aClass = 'inline-flex items-center hover:underline';
  const colorClass = `text-${color}-600 dark:text-${color}-500`;
</script>

<a {...$$restProps} {href} class={classNames(aClass, colorClass, $$props.class)}>
  <slot />
</a>
