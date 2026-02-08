async function findIcons() {
    try {
        const si = await import('react-icons/si');
        console.log('SiOracle:', !!si.SiOracle);
    } catch (e) { console.error('Error SI:', e); }
     try {
        const fa = await import('react-icons/fa');
        console.log('FaPython:', !!fa.FaPython);
    } catch (e) { console.error('Error FA:', e); }
}
findIcons();
