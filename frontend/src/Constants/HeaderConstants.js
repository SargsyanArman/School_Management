// This is a Nav Links
export const headerLinks = (handleLogout) => [
    { label: 'Pupils', path: '/pupils' },
    { label: 'Teachers', path: '/teachers' },
    { label: 'Subjects', path: '/subjects' },
    { label: 'Log out', path: '/', onClick: handleLogout }
];

// For Logo styles
export const LOGO_STYLES = {
    width: '260px',
    height: '56px',
    cursor: 'pointer',
}

// for toolbar styles
export const TOOLBAR_STYLES = {
    backgroundColor: '#9bb8d5',
    display: 'flex',
    justifyContent: 'space-between'
}