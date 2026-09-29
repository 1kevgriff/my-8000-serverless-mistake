<template>
  <div class="slidev-layout kg-compare">
    <header class="kg-compare-head"><slot /></header>
    <div class="kg-compare-cols">
      <div class="kg-compare-left"><slot name="left" /></div>
      <div class="kg-compare-right"><slot name="right" /></div>
    </div>
    <SlideFooter hide-byline />
  </div>
</template>
