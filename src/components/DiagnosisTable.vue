<template>
  <div class="diagnosis-table">
    <table>
      <thead>
        <tr>
          <th>S/n</th>
          <th>Customer Name</th>
          <th>Address</th>
          <th>Area</th>
          <th>Activity</th>
          <th>Created At</th>
          <th>Duration</th>
          <th>Status</th>
          <th>Resources</th>
          <th>Report</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(entry, index) in data" :key="index">
          <td>{{ entry.sn }}</td>
          <td>{{ entry.customerName }}</td>
          <td>{{ entry.address }}</td>
          <td>{{ entry.area }}</td>
          <td>{{ entry.activity }}</td>
          <td>{{ entry.createdAt }}</td>
          <td>{{ entry.duration }}</td>
          <td>{{ entry.status }}</td>
          <td><router-link to ="/view-resources" class="link">View Resources</router-link></td>
          <td><router-link to="/upload-diagnosis" class="link">Upload Report</router-link></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'DiagnosisTable',
  data() {
    return {
      data: [
        {
          sn: '63348',
          customerName: 'Synergy Quick Way',
          address: 'Silver Bird Galleria',
          area: 'Central Area',
          activity: 'LOS',
          createdAt: '2025-06-10 10:01:43',
          duration: '3 hours 11 minutes 15 seconds',
          status: 'diagnosis requested',
        },
        {
          sn: '63337',
          customerName: 'Nura Imam',
          address: 'Nura Imam Street',
          area: 'Katampe Extension',
          activity: 'LOS',
          createdAt: '2025-06-10 10:01:43',
          duration: '3 hours 11 minutes 15 seconds',
          status: 'diagnosis requested',
        },
        {
          sn: '6336',
          customerName: 'Asokoro',
          address: 'Asokoro',
          area: 'Gaduwa',
          activity: 'LOS',
          createdAt: '2025-06-10 10:01:43',
          duration: '3 hours 11 minutes 15 seconds',
          status: 'diagnosis requested',
        },
        {
          sn: '63348',
          customerName: 'Synergy Quick Way',
          address: 'Synergy Quick Way',
          area: 'Central Area',
          activity: 'LOS',
          createdAt: '2025-06-10 10:01:43',
          duration: '3 hours 11 minutes 15 seconds',
          status: 'diagnosis requested',
        },
        {
          sn: '63337',
          customerName: 'Nura Imam',
          address: 'Nura Imam Street',
          area: 'Katampe Extension',
          activity: 'LOS',
          createdAt: '2025-06-10 10:01:43',
          duration: '3 hours 11 minutes 15 seconds',
          status: 'diagnosis requested',
        },
        {
          sn: '6336',
          customerName: 'Asokoro',
          address: 'Asokoro',
          area: 'Gaduwa',
          activity: 'LOS',
          createdAt: '2025-06-10 10:01:43',
          duration: '3 hours 11 minutes 15 seconds',
          status: 'diagnosis requested',
        }
      ]
    }
  }
}
</script>

<style scoped>
.diagnosis-table {
  overflow-x: auto;
  border-radius: 8px;
  font-family: 'Segoe UI', sans-serif;
  font-size: 14px;
  margin-top: 16px;
}

table {
  width: 100%;
  border-collapse: collapse;
  border-radius: 8px;
  overflow: hidden;
}

thead {
  background-color: #dbeafe;
  color: #111;
  font-weight: 600;
}

th, td {
  padding: 12px 14px;
  border: 1px solid #ccc;
  text-align: left;
}

tbody tr {
  background-color: #ffeacc;
}

.link {
  color: #1d4ed8;
  text-decoration: underline;
  font-weight: 500;
  cursor: pointer;
}
</style>
