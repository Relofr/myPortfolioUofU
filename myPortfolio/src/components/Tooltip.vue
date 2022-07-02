<template>
    <div class="tooltip-container" @mouseover="hover = true" @mouseleave="hover = false">
        <slot />
        <div v-show="hover" class="tooltip">
            <span class="text">{{ text }}</span>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            hover: false,
        }
    },
    props: {
        text: {
            type: String,
            required: true
        }
    },
}
</script>

<style scoped>
.tooltip-container {
    position: relative;
    display: inline-block;
}

.tooltip-container:hover .tooltip {
    opacity: 1;
}

.tooltip {
    color: #ffffff;
    text-align: center;
    padding: 10px 0;
    border-radius: 2px;

    width: 120px;
    bottom: 120%;
    left: 50%;
    margin-left: -60px;

    opacity: 0;
    transition: opacity 0.5s;

    position: absolute;
    z-index: 1;

    background: #000000;
}

.text::after {
    content: " ";
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: #000000 transparent transparent transparent;

}
</style>