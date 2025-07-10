<template>
  <div class="layout">
    <LegendSidebar />

    <div class="diagnosis-analysis-container">
      <!-- Top Title -->
      <h1 class="title">Diagnosis Analysis</h1>

      <!-- Tab Header -->
      <div class="tab-bar">
        <button class="tab active">My Diagnosis</button>
      </div>

      <!-- Date and Count -->
      <div class="date-info">
        <span>July 29, 2023</span>
        <span>7 Assignments</span>
      </div>

      <!-- Search Bar -->
      <div class="search-bar">
        <input type="text" placeholder="Search" />
        <button class="search-btn">🔍</button>
      </div>

      <!-- Diagnosis Table -->
      <DiagnosisTable />
    </div>
  </div>
</template>

<script>
import DiagnosisTable from '../components/DiagnosisTable.vue'
import LegendSidebar from '../components/LegendSidebar.vue'

export default {
  name: 'DiagnosisAnalysisView',
  components: {
    DiagnosisTable,
    LegendSidebar
  }
}
</script>

<style scoped>
.layout {
  display: flex;
  min-height: 100vh;
  background-color: #f4f4f4;
}

.diagnosis-analysis-container {
  flex: 1;
  padding: 24px;
  background-color: #fff;
  font-family: 'Segoe UI', sans-serif;
  overflow-x: auto;
}

.title {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 16px;
}

.tab-bar {
  display: flex;
  border-bottom: 2px solid #ddd;
  margin-bottom: 16px;
}

.tab {
  background: none;
  border: none;
  padding: 10px 16px;
  font-weight: bold;
  cursor: pointer;
  color: #f97316;
  border-bottom: 3px solid transparent;
}

.tab.active {
  border-bottom-color: #f97316;
}

.date-info {
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
  background: #1e1e1e;
  color: #fff;
  padding: 10px 16px;
  border-radius: 4px;
  font-size: 14px;
}

.search-bar {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 16px;
}

.search-bar input {
  padding: 8px;
  width: 200px;
  border: 1px solid #ccc;
  border-right: none;
  border-radius: 4px 0 0 4px;
  outline: none;
}

.search-btn {
  padding: 8px 12px;
  border: 1px solid #ccc;
  border-left: none;
  background-color: #333;
  color: white;
  border-radius: 0 4px 4px 0;
  cursor: pointer;
}
</style>