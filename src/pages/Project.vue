<template>
  <div class="row timeline-container">
    <div class="col s12 m8 l6">
      <transition name="slide" type="animation">
        <edit-item-modal v-if="isEditing" :style="modalStyle" :event="editedItem"></edit-item-modal>
      </transition>
      <h1>
        {{ project.name }}
      </h1>
      <ol class="timeline">
        <transition-group name="slide" mode="in-out">
          <single-item v-for="event in project.events" :event="event" :key="event._id"></single-item>
        </transition-group>
      </ol>
      <button class="btn light-blue darken-3 add-new-btn" :href="'/project/' + project.name + '/new'">Dodaj</button>
    </div>
  </div>

</template>

<script>
  import SingleItem from '../components/SingleItem.vue'
  import EditItemModal from '../components/EditItemModal.vue'
  import { eventBus } from '../main'
  import _ from 'lodash'
  import mock from '../data/mock'

  export default {
    name: 'app',
    data () {
      return {
        name: this.$route.params.name,
        isEditing: false,
        editedItem: {},
        project: {}
      }
    },
    computed: {
      modalStyle () {
        if (this.isEditing) {
          return {
            display: 'block',
            zIndex: '100'
          }
        }
        return {}
      }
    },
    components: {
      SingleItem,
      EditItemModal
    },
    created () {
      this.project = _.find(mock, {name: this.name})

      eventBus.$on('editEvent', (data) => {
        this.editedItem = data
        this.isEditing = true
      })
      eventBus.$on('itemWasEdited', (data) => {
        this.isEditing = false
        _.merge(_.find(this.project.events, {'_id': data._id}), data)
      })
      eventBus.$on('editWasCanceled', () => {
        this.isEditing = false
      })
      eventBus.$on('removeEvent', (item) => {
        this.project.events = _.pull(this.project.events, item)
        this.$forceUpdate()
      })
    }
  }
</script>

<style>
  .add-new-btn {
    position: fixed;
    top: 130px;
    right: 20px;
  }

  .slide-enter {
    opacity: 0;
  }
  .slide-enter-active {
    animation: slide-in .7s ease-out forwards;
    transition: opacity .7s;
  }
  .slide-leave-to {
    opacity: 0;
  }
  .slide-leave-active {
    animation: slide-out .7s ease-out forwards;
    transition: opacity .7s;
  }

  @keyframes slide-in {
    from {
      transform: translateY(30px);
    }
    to {
      transform: translateY(0)
    }
  }
  @keyframes slide-out {
    from {
      transform: translateY(0);
    }
    to {
      transform: translateY(30px)
    }
  }
</style>
