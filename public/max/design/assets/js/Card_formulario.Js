document.addEventListener("DOMContentLoaded", function() {
    const headerContainer = document.getElementById("header-container");

    const mainContainer = document.createElement("div");
    mainContainer.classList.add("main-container");

    // Page header
    const pageHeader = document.createElement("div");
    pageHeader.classList.add("page-header");

    // Sidebar toggle
    const toggleSidebar = document.createElement("div");
    toggleSidebar.classList.add("toggle-sidebar");
    toggleSidebar.id = "toggle-sidebar";
    toggleSidebar.innerHTML = '<i class="bi bi-list"></i>';
    pageHeader.appendChild(toggleSidebar);

    // Breadcrumb
    const breadcrumb = document.createElement("ol");
    breadcrumb.classList.add("breadcrumb");
    breadcrumb.innerHTML = `
        <li class="breadcrumb-item"><i class="bi bi-house"></i></li>
        <li class="breadcrumb-item breadcrumb-active" aria-current="page">BS Select</li>
    `;
    pageHeader.appendChild(breadcrumb);

    // Header actions container
    const headerActionsContainer = document.createElement("div");
    headerActionsContainer.classList.add("header-actions-container");

    // Search container
    const searchContainer = document.createElement("div");
    searchContainer.classList.add("search-container");

    // Search input group
    const inputGroup = document.createElement("div");
    inputGroup.classList.add("input-group");

    const input = document.createElement("input");
    input.type = "text";
    input.classList.add("form-control");
    input.placeholder = "Search";

    const button = document.createElement("button");
    button.classList.add("btn");
    button.type = "button";
    button.innerHTML = '<i class="bi bi-search"></i>';

    inputGroup.appendChild(input);
    inputGroup.appendChild(button);
    searchContainer.appendChild(inputGroup);
    headerActionsContainer.appendChild(searchContainer);

    // Header actions (Notifications, Language, User)
    const headerActions = document.createElement("ul");
    headerActions.classList.add("header-actions");

    // Notification dropdown
    const notificationItem = document.createElement("li");
    notificationItem.classList.add("dropdown");
    notificationItem.innerHTML = `
        <a href="#" data-toggle="dropdown" aria-haspopup="true">
            <i class="bi bi-bell fs-4 lh-1"></i>
        </a>
        <div class="dropdown-menu dropdown-menu-end shadow">
            <div class="dropdown-item">Notification 1</div>
            <div class="dropdown-item">Notification 2</div>
            <div class="dropdown-item">Notification 3</div>
        </div>
    `;
    headerActions.appendChild(notificationItem);

    // Language dropdown (hidden on small screens)
    const languageItem = document.createElement("li");
    languageItem.classList.add("dropdown", "d-none", "d-md-block");
    languageItem.innerHTML = `
        <a href="#" id="countries" data-toggle="dropdown" aria-haspopup="true">
            <img src="assets/images/flags/1x1/gb.svg" class="flag-img" alt="Free Admin Dashboards" />
        </a>
        <div class="dropdown-menu dropdown-menu-end mini" aria-labelledby="countries">
            <a href="index.html"><img src="assets/images/flags/1x1/us.svg" alt="US" /></a>
            <a href="index.html"><img src="assets/images/flags/1x1/in.svg" alt="India" /></a>
            <a href="index.html"><img src="assets/images/flags/1x1/br.svg" alt="Brazil" /></a>
            <a href="index.html"><img src="assets/images/flags/1x1/tr.svg" alt="Turkey" /></a>
            <a href="index.html"><img src="assets/images/flags/1x1/ca.svg" alt="Canada" /></a>
        </div>
    `;
    headerActions.appendChild(languageItem);

    // User settings dropdown
    const userSettingsItem = document.createElement("li");
    userSettingsItem.classList.add("dropdown");
    userSettingsItem.innerHTML = `
        <a href="#" id="userSettings" class="user-settings" data-toggle="dropdown" aria-haspopup="true">
            <span class="user-name d-none d-md-block">Tony Robbins</span>
            <span class="avatar">
                <img src="assets/images/user3.png" alt="Free Admin Templates">
                <span class="status busy"></span>
            </span>
        </a>
        <div class="dropdown-menu dropdown-menu-end" aria-labelledby="userSettings">
            <div class="header-profile-actions">
                <a href="profile.html">Profile</a>
                <a href="account-settings.html">Settings</a>
                <a href="login.html">Logout</a>
            </div>
        </div>
    `;
    headerActions.appendChild(userSettingsItem);

    headerActionsContainer.appendChild(headerActions);
    pageHeader.appendChild(headerActionsContainer);

    mainContainer.appendChild(pageHeader);
    headerContainer.appendChild(mainContainer);
});
