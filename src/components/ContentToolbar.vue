<template>
  <div class="content-toolbar">
    <slot name="left"></slot>
    <slot name="middle"></slot>
    <slot name="right"></slot>
  </div>
</template>

<style>
.content-toolbar {
  display: flex;
  justify-content: space-between;
  padding: 10px;
  margin: 15px 0;
  width: 100%;
}
</style>
