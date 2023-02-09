<script lang="ts">
  import classNames from 'classnames';

  export let italic = false;
  export let underline = false;
  export let linethrough = false;
  export let uppercase = false;
  export let gradient = false;
  export let highlight = false;
  export let highlightColor: 'blue' | 'primary' | string = 'blue';
  export let decorationColor: 'blue' | 'primary' | string = 'blue';
  export let gradientFrom: 'sky' | 'primary' | string = 'sky';
  export let gradientTo: 'emerald' | 'primary' | string = 'emerald';
  let highlightClass = `text-${highlightColor}-600 dark:text-${highlightColor}-500`;
  let decorationClass = `decoration-2 decoration-${decorationColor} dark:decoration-${decorationColor}-600`;
  let gradientClass = `text-transparent bg-clip-text bg-gradient-to-r to-${gradientTo}-600 from-${gradientFrom}-400`;

  let underlineClass = classNames('underline', decorationClass);
  let classSpan: string = classNames(
    italic && 'italic',
    underline && underlineClass,
    linethrough && 'line-through',
    uppercase && 'uppercase',
    gradient ? gradientClass : 'font-semibold text-gray-900 dark:text-white',
    highlight && highlightClass,
    $$props.class
  );
</script>

<span {...$$restProps} class={classSpan}>
  <slot />
</span>
