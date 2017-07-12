<template>
  <div class="container">
    <div class="row no-gutters row-eq-height">
      <div v-if="activeVideo.id" class="col-xs-12 col-sm-12 col-md-8">
        <youtube v-if="activeVideo.id" :video-id="activeVideo.id" player-width="100%" player-height="320"></youtube>
        <h1 class="video-title" v-html="titleComputed"></h1>
      </div>
      <div :class="{ 'col-xs-12 col-sm-12 col-md-4': activeVideo.id, 'col-xs-12 col-sm-12 col-md-12': !activeVideo.id }"class="">
        <video-list :videos="videos" @clicked="updateVideo"></video-List>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import List from '@/components/List'
import VueYouTubeEmbed from 'vue-youtube-embed'

import { mapGetters, mapActions } from 'vuex'

Vue.use(VueYouTubeEmbed)

export default {
  name: 'tube',

  asyncData: ({ dispatch }) => dispatch('videos/get'),

  components: {
    'video-list': List
  },

  data () {
    return {
      activeVideo: {
        title: '',
        id: ''
      }
    }
  },

  computed: {
    ...mapGetters('videos', ['list']),

    videos () {
      return this.list
    },

    titleComputed () {
      if (this.activeVideo.title.length > 0) {
        return `<span>Video title:</span> ${this.activeVideo.title}`
      }
    }
  },

  methods: {
    updateVideo (id) {
      const video = this.videos.filter((video) => video.id === id)[0]
      this.activeVideo = video
    }
  },

  watch: {
    ...mapActions('videos', ['get']),

    activeVideo () {
      console.log('Video is ready to play!')
    }
  }
}
</script>

<style lang="scss">
.video-title {
  margin: 0;
  padding: 5px 0 10px 0;
  font-size: 14px;
  font-weight: 300;

  span {
    font-weight: 600;
  }
}

.spacer-s {
  width: 100%;
  height: 10px;
}
</style>
