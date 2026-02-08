async function findIcons() {
    try {
        const fa = await import('react-icons/fa');
        console.log('FaJava:', !!fa.FaJava);
        console.log('FaPython:', !!fa.FaPython);
        console.log('FaC:', !!fa.FaC); // Checking if FaC exists
    } catch (e) {
        console.error('Error FA:', e);
    }

    try {
        const si = await import('react-icons/si');
        const keys = Object.keys(si);
        const cMatches = keys.filter(k => k.toLowerCase() === 'sic' || k.toLowerCase().includes('clang'));
        console.log('Matches for C in SI:', cMatches);
    } catch (e) {
        console.error('Error SI:', e);
    }
}
findIcons();
