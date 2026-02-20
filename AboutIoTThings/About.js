document.addEventListener('DOMContentLoaded', function() {
    // ดึงองค์ประกอบ (Elements) ที่ต้องการใช้งานมาไว้ในตัวแปร
    const toggleHeader = document.querySelector('.careerH');
    const contentSection = document.querySelector('.career');

    // เพิ่มเหตุการณ์ (Event Listener) เมื่อมีการคลิกที่ส่วนหัว
    toggleHeader.addEventListener('click', function() {
        // สลับคลาส 'show' เพื่อเปิด/ปิดการแสดงผลข้อความ
        contentSection.classList.toggle('show');
        
        // สลับคลาส 'active' ที่ส่วนหัว เพื่อใช้หมุนไอคอนบวก
        toggleHeader.classList.toggle('active');
    });
});