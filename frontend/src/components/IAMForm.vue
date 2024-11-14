<template>
  <div class="iam-form">
    <h2>Enter AWS Credentials</h2>
    <form @submit.prevent="submitForm">
      <div>
        <label for="accessKeyId">AWS Access Key ID</label>
        <input v-model="accessKeyId" type="text" id="accessKeyId" required />
      </div>
      <div>
        <label for="secretAccessKey">AWS Secret Access Key</label>
        <input v-model="secretAccessKey" type="password" id="secretAccessKey" required />
      </div>
      <button type="submit">Generate IAM Report</button>
    </form>

    <div v-if="report" class="report">
      <h3>Generated Report</h3>
      <pre>{{ report }}</pre>
    </div>
  </div>
</template>

<script>
import axios from '../store';

export default {
  data() {
    return {
      accessKeyId: '',
      secretAccessKey: '',
      report: null,
    };
  },
  methods: {
    async submitForm() {
      try {
        const response = await axios.post('api/iam/generate-iam-report', {
          accessKeyId: this.accessKeyId,
          secretAccessKey: this.secretAccessKey,
        });
        this.report = response.data;
      } catch (error) {
        console.error('Error fetching IAM report:', error);
        alert('An error occurred while generating the report.');
      }
    },
  },
};
</script>

<style scoped>
.iam-form {
  width: 300px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f4f4f4;
  border-radius: 5px;
}

.iam-form input {
  width: 90%;
  padding: 8px;
  margin: 10px 0;
  border-radius: 4px;
  border: 1px solid #ccc;
}

button {
  width: 100%;
  padding: 10px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #45a049;
}

.report {
  margin-top: 20px;
  padding: 10px;
  background-color: #e9f7e9;
  border: 1px solid #4CAF50;
}
</style>