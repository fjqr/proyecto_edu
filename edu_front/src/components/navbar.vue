<template>
<div class="row">
  <div class="col-12">
    <q-tabs v-model="tab" indicator-color="light-blue-13" class="text-dark shadow-2">
    <q-tab name="mails" icon="mail" />
    <q-tab name="alarms" icon="alarm" />
    <q-tab name="movies" icon="movie" />
    </q-tabs>
  </div>
</div>
</template>
<script setup lang="ts">
import {ref} from 'vue'
const tab =  ref('mails');

</script>
