<script lang="ts">
  import classNames from 'classnames';

  export let color: 'blue' | 'primary' | string = 'blue';
  export let bgColor: 'blue' | 'primary' | string = 'blue';
  export let markClass = 'px-2 rounded';
  const colorClass = `text-white dark:bg-${color}-500`;
  const bgColorClass = `bg-${bgColor}-600`;
</script>

<mark {...$$restProps} class={classNames(markClass, bgColorClass, colorClass, $$props.class)}>
  <slot />
</mark>
