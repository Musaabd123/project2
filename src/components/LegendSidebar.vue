<template>
  <div class="sidebar">
    <div class="logo-section">
      <div class="logo">
        <img src="../assets/logo.png"alt="Logo" class="logo-img"/>SUBURBAN<span class="e"></span>
      </div>
      <div class="role">Diagnosis Analyst</div>
    </div>

    <ul class="menu">
      <li class="menu-group">
        <div class="menu-item with-arrow active">
          <i class="icon">👤</i>
          My Workplace
        </div>
        <ul class="submenu">
          <li class="submenu-item">Reports</li>
          <li class="submenu-item">Collaboration</li>
          <li class="submenu-item">Requests</li>
        </ul>
      </li>
      <li class="menu-item active">
        <i class="icon">📄</i>
        Diagnosis Analysis
      </li>
      <li class="menu-item">
        <i class="icon">❓</i>
        Help Center
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'LegendSidebar',
}
</script>

<style scoped>
.sidebar {
  width: 250px;
  background-color: #1f1f1f;
  color: white;
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 20px;
  box-shadow: 2px 0 5px rgba(0,0,0,0.1);
}

.logo-section {
  margin-bottom: 30px;
}

.logo {
  font-size: 24px;
  font-weight: bold;
  letter-spacing: 1px;
}

.logo .e {
  color: red;
}

.role {
  font-size: 12px;
  color: #bbb;
  margin-top: 4px;
}

.menu {
  list-style: none;
  padding: 0;
  margin: 0;
}

.menu-item,
.submenu-item {
  padding: 12px 10px;
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 14px;
  cursor: pointer;
  transition: background 0.2s;
}

.menu-item:hover,
.submenu-item:hover {
  background-color: #2c2c2c;
}

.menu-item.active {
  background-color: #333;
  border-radius: 8px;
}

.submenu {
  list-style: none;
  padding-left: 24px;
  margin: 0;
}

.icon {
  font-size: 16px;
}
.logo-img{
  height:28px;
  width:auto;
  margin-right:8px;
  vertical-align:middle;
}
</style>
