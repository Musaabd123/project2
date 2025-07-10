import { createRouter, createWebHistory } from 'vue-router'
import DiagnosisAnalysisView from '../views/DiagnosisAnalysisView.vue'
import UploadDiagnosisReportView from '../views/UploadDiagnosisReportView.vue' // ✅ NEW IMPORT
import ViewDiagnosisResources from '../views/ViewDiagnosisResources.vue'
const routes = [
  {
    path: '/',
    name: 'DiagnosisAnalysis',
    component: DiagnosisAnalysisView
  },
  {
    path: '/upload-diagnosis',
    name: 'UploadDiagnosisReport',
    component: UploadDiagnosisReportView // ✅ NEW ROUTE
  },
  {
    path: '/view-resources',
    name: '/ViewResources',
    component: ViewDiagnosisResources 
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
