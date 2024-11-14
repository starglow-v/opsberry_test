<template>
  <div class="home">
    <h1>IAM Resource Query</h1>
    <IAMForm />
  </div>
</template>

<script>
import IAMForm from '../components/IAMForm';

export default {
  name: 'IamResourceHome',
  components: {
    IAMForm,
  },
};
</script>

<style scoped>
.home {
  text-align: center;
  margin-top: 50px;
}
</style>