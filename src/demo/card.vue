<template>
  <div>
    <div v-if="!$user.role">No user</div>
    <div v-else>
      <div class="card">
        <div class="row">
          <!-- <div class="initials">{{ $user.initials }}</div> -->
          <avatar>{{ $user.initials }}</avatar>
          <div class="content">
            <div class="meta">
              <div class="name">{{ $user.full_name}}</div>
              <div class="email">{{ $user.email }}</div>
              <div class="created">{{ created_on }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<!--/////////////////////////////////////////////////////////////////////////-->

<script>
import avatar from './avatar'

export default {
  name: 'card',
  props: ['model'],
  models: {
    user() {
      return this.model
    }
  },
  components: {
    avatar
  },
  computed: {
    created_on() {
      return new Date(this.$user.created).toLocaleDateString()
    }
  }
}
</script>

<!--/////////////////////////////////////////////////////////////////////////-->

<style scoped>
.card {
  position: relative;
  display: table;
  width: 100%;
  max-width: 600px;
  min-width: 400px;
  border-radius: 6px;
  background: #efefef;
  box-sizing: border-box;
  box-shadow: 0 2px 3px rgba(0,0,0, 0.2);
  overflow: hidden;
}
.row {
  display: table-row;
  vertical-align: middle;
}
.row > div {
  padding: 20px;
  vertical-align: middle;
}
.avatar {
  display: table-cell;
  /* font-size: 14vw; */
  width: 25%;
  background: teal;
  color: white;
  padding: 0 !important;
}
.content {
  display: table-cell;
  position: relative;
}
.meta {
  position: absolute;
  /* top: 0;
  bottom: 0; */
  top: 50%;
  transform: translateY(-50%);
  box-sizing: border-box;
  vertical-align: middle;
}

.meta > div {
  display: inline-block;
  width: 100%;
}
</style>