<script lang="ts">
  import Placeholder from './../avatar/Placeholder.svelte';
  import Calendar from './Calender.svelte';

  export let range: boolean = false;
  // autoHide not working
  // export let autoHide: boolean = false;
  export let datepickerButtons: boolean = false;
  export let datepickerFormat: string = 'mm/dd/yyyy';
  export let datepickerOrientation: string = 'bottom';
  export let datepickerTitle: string = 'Flowbite datepicker';
  export let attribute: string = '';
  export let color: string = 'blue';
  export let inputClass: string = `bg-${color}-50 border border-${color}-300 text-gray-900 Placeholder:text-${color}-900  sm:text-sm rounded-lg focus:ring-${color}-500 focus:border-${color}-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-600 dark:focus:border-gray-500`;

  $: setAttribute = (node: HTMLElement, params: any) => {
    node.setAttribute(params, '');
  };
</script>

<svelte:head>
  <link rel="stylesheet" href="https://unpkg.com/flowbite@1.5.1/dist/flowbite.min.css" />
  <script src="https://unpkg.com/flowbite@1.5.1/dist/datepicker.js"></script>
</svelte:head>

{#if range}
  <div date-rangepicker class="flex items-center">
    <div class="relative">
      <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
        <Calendar {color} />
      </div>
      <input name="start" type="text" class={inputClass} placeholder="Select date start" />
    </div>
    <span class="mx-4 text-gray-500">to</span>
    <div class="relative">
      <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
        <Calendar {color} />
      </div>
      <input name="end" type="text" class={inputClass} placeholder="Select date end" />
    </div>
  </div>
{:else}
  <div class="relative">
    <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
      <Calendar {color} />
    </div>
    {#if datepickerButtons}
      <input
        {...$$restProps}
        datepicker
        datepicker-buttons
        datepicker-format={datepickerFormat}
        datepicker-orientation={datepickerOrientation}
        datepicker-title={datepickerTitle}
        use:setAttribute={attribute}
        type="text"
        class={inputClass}
        placeholder="Select date" />
    {:else}
      <input
        {...$$restProps}
        datepicker
        datepicker-format={datepickerFormat}
        datepicker-orientation={datepickerOrientation}
        datepicker-title={datepickerTitle}
        use:setAttribute={attribute}
        type="text"
        class={inputClass}
        placeholder="Select date" />
    {/if}
    <slot />
  </div>
{/if}
