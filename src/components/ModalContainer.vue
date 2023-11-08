<script setup lang="ts">
defineProps<{
    show: boolean
}>()

const emit = defineEmits<{
    close: []
}>()

const maskClickClose = (event: Event) => {
    if ((event.target as HTMLElement)?.closest('.modal-container')) return;
    emit('close');
}
</script>

<template>
    <Transition name="modal">
        <div v-if="show" @click="maskClickClose" class="modal-mask">            
            <div class="modal-container">
                <slot></slot>
            </div>
        </div>
    </Transition>
</template>

<style>
.modal-mask {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    display: flex;
    transition: opacity 0.3s ease;
}

.modal-container {
    position: relative;
    margin: auto;
    transition: all 0.3s ease;
}

.modal-enter-from {
    opacity: 0;
}

.modal-leave-to {
    opacity: 0;
}

.modal-enter-from .modal-container,
.modal-leave-to .modal-container {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
}
</style>