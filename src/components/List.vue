<template>
  <div :class="[(activeIndex > -1) ? 'video-list video-list--equal-height' : 'video-list']">
    <div v-for="(video, index) in videos" @click="playVideoOnParent(video.id, index)" :class="[(activeIndex === index) ? 'video-list__item video-list__item--active' : 'video-list__item']">
      {{ video.title }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'list',

  props: [
    'videos'
  ],

  data: () => {
    return {
      activeIndex: -1
    }
  },

  methods: {
    playVideoOnParent (id, index) {
      this.activeIndex = index
      this.$emit('clicked', id)
    }
  }
}
</script>

<style lang="scss">
$video-height: 320px;

.video-list {
  width: 100%;
  background-color: #F5F5F5;
  border-top: 5px solid #EEEEEE;
  font-size: 12px;
  padding: 5px 10px;
}

.video-list--equal-height {
  height: $video-height;
}

.video-list__item {
  color: #999;

  &:hover, &.video-list__item--active {
    cursor: pointer;
    color: #000;
  }
}
</style>
