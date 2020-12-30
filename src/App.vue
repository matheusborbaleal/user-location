<template>
  <div id="app">
    <main>
      <router-view />
    </main>
    <app-notification />
    <transitory-notification></transitory-notification>
  </div>
</template>

<script lang="ts" src="./App.ts"/>


<style lang="stylus">
@import url('./assets/fonts/open-sans/open-sans.styl');
@import url('./assets/fonts/solomon/stylesheet.styl');

::-webkit-scrollbar {
  width: 8px;
  height: 8px;
  background: rgba(125, 125, 125, 0.1);
}

::-webkit-scrollbar-track {
  -webkit-border-radius: 10px;
  border-radius: 10px;
}

::-webkit-scrollbar-thumb {
  -webkit-border-radius: 10px;
  border-radius: 10px;
  background-color: $c-white;
}

body {
  font-family: $f-family-text !important;

  &.hide-notification {
    .tooltip.vue-tooltip-theme {
      display: none !important;
    }
  }
}

.notifications {
  z-index: 10000;
}

* {
  box-sizing: border-box;
}

label, fieldset {
  font-size: $f-size-text;
}

.custom-checkbox label {
  margin-top: 0.1rem;
}

// Global transition effects
.basic-slide-fade-enter-active {
  transition: all 0.3s ease;
}

.basic-slide-fade-leave-active {
  transition: all 0.3s ease;
}

.basic-slide-fade-enter, .basic-slide-fade-leave-to {
  transform: translateX(5rem);
  opacity: 0;
}

.slide-fade-enter-active {
  transition: all 0.3s ease;
}

.slide-fade-leave-active {
  transition: all 0.3s ease;
}

.slide-fade-enter, .slide-fade-leave-to {
  transform: translateY(10px);
  opacity: 0;
}

.slide-left-enter-active {
  transition: all 0.4s ease;
}

.slide-left-leave-active {
  transition: all 0.4s ease;
}

.slide-left-enter, .slide-left-leave-to {
  transform: translateX(100vw);
  opacity: 0;
  position: relative;
}

.move-left-enter-active {
  transition: all 0.4s ease;
}

.move-left-leave-active {
  transition: all 0.4s ease;
}

.move-left-enter, .move-left-leave-to {
  transform: translateX(-22rem);
  opacity: 0;
  position: relative;
}

.slide-right-enter-active, .slide-right-leave-active {
  transition: all 0.4s ease;
}

.slide-right-enter, .slide-right-leave-to {
  transform: translateX(-100vw);
  opacity: 0;
  position: relative;
}

.slide-bottom-left-enter-active {
  transition: all 0.4s ease;
}

.slide-bottom-left-leave-active {
  transition: all 0.4s ease;
}

.slide-bottom-left-enter, .slide-bottom-left-leave-to {
  top: 100vh !important;
  right: 100vw !important;
  transform: scale(0.2);
  overflow-y: auto;
  position: fixed;
  transition: all 0.5;
}

.flip-list-enter-active, .flip-list-leave-active {
  transition: all 0.3s;
}

.flip-list-enter {
  opacity: 0;
  transform: translateY(80px);
}

.flip-list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

// Default button styling
.btn-flat {
  background-color: $c-white;
  color: $c-brand-primary;
  border: none;
  padding: 0.2rem 0.8rem;
  outline: none !important;
  cursor: pointer;
  font-size: $f-size-text;
  font-weight: $f-semibold;
  transition: all 0.3s;
}

// Icon button default style
.icon-flat {
  background: none;
  color: $c-white;
  outline: none;
  border: none;
  font-size: $f-size-subtitle;
  display: flex;
  cursor: pointer;

  &:focus {
    outline: none;
  }

  &:disabled {
    opacity: 0.7;
  }
}

.icon-flat--dark {
  @extend .icon-flat;
  color: $c-grey-60;
}

// Ripple effect
.ripple {
  background-position: center !important;
  background-size: 0% !important;
  transition: background 0.5s !important;
}

.ripple:active {
  background-size: 100% !important;
  background: $c-grey-8 radial-gradient(circle, transparent 1%, $c-grey-8 1%) center / 15000% !important;
  transition: background 0s;
}
</style>
