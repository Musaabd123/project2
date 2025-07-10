<template>
  <div class="layout">
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
          <tr><td><strong>Splitter</strong></td><td>BUA Court</td></tr>
          <tr><td><strong>Splitter Port</strong></td><td>Port 5</td></tr>
          <tr><td><strong>OLT</strong></td><td>BUA Court</td></tr>
          <tr><td><strong>OTDR Reading::</strong></td><td>---</td></tr>
          <tr><td><strong>OTDR Reading (Meters)</strong></td><td>4552m</td></tr>
        </table>
      </div>

      <!-- Dropdowns & POF Textarea -->
      <div class="form-section">
        <div class="dropdowns">
          <div>
            <label>POF Node</label>
            <select>
              <option>OLT</option>
              <option>Splitter</option>
              <option>FAT</option>
              <option>FST</option>
              <option>MST</option>
              <option>Closure</option>
              <option>Patch Cord</option>
              <option>Cable Damage</option>  
            </select>
          </div>
          <div>
            <label>POF Segment</label>
            <select>
              <option>Transmission </option>
              <option>Distribution</option>
            </select>
            
          </div>
        </div>

        <div class="pof-box">
          <label>Possible POF</label>
          <textarea></textarea>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LegendSidebar from '../components/LegendSidebar.vue'

export default {
  name: 'UploadDiagnosisReportView',
  components: {
    LegendSidebar
  }
}
</script>

<style scoped>
.layout {
  display: flex;
}

.upload-report-container {
  flex: 1;
  padding: 24px;
  background: #f7f7f7;
  min-height: 100vh;
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

.dropdowns {
  display: flex;
  gap: 16px;
  margin-bottom: 16px;
}

.dropdowns div {
  flex: 1;
}

label {
  display: block;
  margin-bottom: 6px;
  font-weight: bold;
  font-size: 14px;
}

select {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.pof-box textarea {
  width: 100%;
  height: 120px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}
</style>
