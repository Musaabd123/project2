<template>
  <div class="page-layout">
    <LegendSidebar />

    <div class="upload-report-container">
      <h1 class="title">Diagnosis Analysis</h1>
      <button @click="$router.back()" class="back-btn">← Back</button>

      <!-- Fault Diagnosis Report Table -->
      <div class="report-table">
        <div class="report-header">
          <strong>Fault Diagnosis Report</strong>
          <span>Oct 30, 2023 &nbsp; 11:35 AM</span>
        </div>
        <table>
          <tr><td><strong>Splitter:</strong></td><td>Ugochukwu Abraham</td></tr>
          <tr><td><strong>Splitter Port:</strong></td><td>625</td></tr>
          <tr><td><strong>OLT:</strong></td><td>0805 777 5359</td></tr>
          <tr><td><strong>OTDR Reading:</strong></td><td>15 Malcolm Fraser Street, Asokoro, Abuja.</td></tr>
          <tr><td><strong>OTDR Reading(Meters):</strong></td><td>ugochuks22@gmail.com</td></tr>
        </table>
      </div>

      <!-- OTDR Test Result Section -->
      <div class="form-section">
        <h3>OTDR Test Result</h3>
        <div class="test-grid">
          <div>
            <label>Splitter</label>
            <input value="BUA Court" readonly />
          </div>
          <div>
            <label>Splitter Port</label>
            <input value="Port 5" readonly />
          </div>
          <div>
            <label>OLT</label>
            <input value="BUA Court" readonly />
          </div>
          <div>
            <label>OLT Port</label>
            <input value="Port 5" readonly />
          </div>
          <div>
            <label>OTDR Reading</label>
            <input placeholder="Enter OTDR" />
          </div>
          <div>
            <label>OTDR Image:</label>
            <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb" alt="OTDR" class="otdr-img" />
          </div>
          <div>
            <label>OTDR Reading (Meters)</label>
            <input value="0" />
          </div>
          <div>
            <label>OTDR Measurement Form</label>
            <input value="Port 5" readonly />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LegendSidebar from '../components/LegendSidebar.vue'

export default {
  name: 'ViewDiagnosisResourcesView',
  components: {
    LegendSidebar
  }
}
</script>

<style scoped>
.page-layout {
  display: flex;
  min-height: 100vh;
}

.upload-report-container {
  padding: 24px;
  background: #f7f7f7;
  flex: 1;
  font-family: 'Segoe UI', sans-serif;
}

.title {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
}

.back-btn {
  background: none;
  border: none;
  color: #000;
  font-size: 16px;
  cursor: pointer;
  margin-bottom: 20px;
}

.report-table {
  border: 1px solid #ccc;
  border-radius: 4px;
  background: #fff;
  overflow: hidden;
  margin-bottom: 24px;
}

.report-header {
  background: #1e1e1e;
  color: white;
  padding: 10px 16px;
  display: flex;
  justify-content: space-between;
  font-size: 14px;
}

table {
  width: 100%;
  border-collapse: collapse;
}

td {
  padding: 10px 16px;
  border-top: 1px solid #eee;
  font-size: 14px;
}

.form-section {
  background: white;
  padding: 16px;
  border-radius: 4px;
}

h3 {
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 16px;
}

.test-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 16px;
}

label {
  display: block;
  margin-bottom: 6px;
  font-weight: bold;
  font-size: 14px;
}

input {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.otdr-img {
  width: 100%;
  height: auto;
  border-radius: 8px;
}
</style>
