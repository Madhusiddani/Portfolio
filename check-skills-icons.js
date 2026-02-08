async function checkIcons() {
    try {
        const fa = await import('react-icons/fa');
        console.log('FaAws:', !!fa.FaAws);
        console.log('FaDocker:', !!fa.FaDocker);
        console.log('FaLock:', !!fa.FaLock); // For Authentication
        console.log('FaServer:', !!fa.FaServer); // For REST APIs (option 1)
        console.log('FaDatabase:', !!fa.FaDatabase); // Generic DB
    } catch (e) { console.error('Error FA:', e); }

    try {
        const si = await import('react-icons/si');
        console.log('SiMongodb:', !!si.SiMongodb);
        console.log('SiMysql:', !!si.SiMysql);
        console.log('SiPostman:', !!si.SiPostman); // Potential for REST API tool?
    } catch (e) { console.error('Error SI:', e); }

    try {
        const ai = await import('react-icons/ai');
        console.log('AiOutlineApi:', !!ai.AiOutlineApi); // For REST APIs generic
    } catch (e) { console.error('Error AI:', e); }
}
checkIcons();
