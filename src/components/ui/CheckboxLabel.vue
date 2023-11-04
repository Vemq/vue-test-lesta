<script setup lang="ts">
defineProps<{
  isChecked: boolean;
}>();

defineEmits<{
  toggle: [status: boolean];
}>();
</script>

<template>
  <div class="custom-checkbox">
    <label class="custom-checkbox__label">
      <div class="custom-checkbox__hidden-checkbox">
        <input
          type="checkbox"
          :checked="isChecked"
          @input="event => $emit('toggle', (event.target as HTMLInputElement).checked)"
        />
      </div>
      <div
        class="custom-checkbox__fake-checkbox"
        :class="{ checked: isChecked }"
      ></div>
      <slot></slot>
    </label>
  </div>
</template>

<style>
.custom-checkbox {
  cursor: pointer;
}

.custom-checkbox__label {
  position: relative;
  display: flex;
  align-items: center;
  user-select: none;
  cursor: pointer;
}

.custom-checkbox__hidden-checkbox {
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
  visibility: hidden;
}

.custom-checkbox__fake-checkbox {
  position: relative;
  width: 20px;
  height: 20px;
  border: 2px solid var(--color-border);
  margin-right: 10px;
  cursor: pointer;
}

.custom-checkbox__fake-checkbox.checked {
  border: 2px solid var(--color-border-hover);
  background-color: var(--color-background-mute);
}

.custom-checkbox__fake-checkbox.checked::after {
  content: '✔';
  position: absolute;
  right: 2px;
  top: -4px;
  color: var(--color-heading);
}

.custom-checkbox__label:hover > .custom-checkbox__fake-checkbox {
  border: 2px solid var(--color-border-hover);
}

.custom-checkbox__label:hover > .custom-checkbox__fake-checkbox.checked {
  background-color: var(--color-border-hover);
}
</style>
