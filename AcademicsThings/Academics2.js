function toggleSemester(subjectId, btnId) {
    const subjects = document.getElementById(subjectId);
    const btn = document.getElementById(btnId);

    // เปลี่ยนมาเช็คว่าถ้ามันเป็น flex อยู่ ให้เปลี่ยนเป็น none 
    // นอกนั้น (รวมถึงตอนเริ่มต้นที่ค่าเป็นว่างเปล่า) ให้เปลี่ยนเป็น flex
    if (subjects.style.display === 'flex') {
        subjects.style.display = 'none';
        btn.textContent = 'View Subjects';
    } else {
        subjects.style.display = 'flex';
        btn.textContent = 'CLOSE';
    }
}