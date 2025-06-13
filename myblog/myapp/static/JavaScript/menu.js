document.addEventListener('DOMContentLoaded', () => {
    const sidebar = document.querySelector('.sidebar');
    const content = document.querySelector('.content');
    const links = document.querySelectorAll('.sidebar a');

    // Load the sidebar state from localStorage
    const isExpanded = localStorage.getItem('sidebarExpanded') === 'true';
    setSidebarState(isExpanded);

    // Expand sidebar on mouse enter
    sidebar.addEventListener('mouseenter', () => {
        setSidebarState(true);
    });

    // Collapse sidebar on mouse leave
    sidebar.addEventListener('mouseleave', () => {
        setSidebarState(false);
    });

    // Save sidebar state and apply changes
    function setSidebarState(expanded) {
        if (expanded) {
            sidebar.style.width = '150px';
            content.style.left = '200px';
            links.forEach(link => {
                const span = link.querySelector('span');
                if (span) span.style.display = 'inline';
            });
            localStorage.setItem('sidebarExpanded', 'true');
        } else {
            sidebar.style.width = '60px';
            content.style.left = '60px'; 
            links.forEach(link => {
                const span = link.querySelector('span');
                if (span) span.style.display = 'none';
            });
            localStorage.setItem('sidebarExpanded', 'false');
        }
    }
});
