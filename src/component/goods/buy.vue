		<template>
  <mt-datetime-picker
    ref="picker"
    type="time"
    v-model="pickerValue">
  </mt-datetime-picker>
</template>

<script>
	export default {
		pickerValue:'1',
	  methods: {
	    openPicker() {
	      this.$refs.picker.open();
	    }
	  }
	};
</script>

<style>
</style>
