const calculation = (coursesData: any[], selectedCourses: string | any[]) => {
    const selected = coursesData.filter(course => selectedCourses.includes(course.value));
    const courseTotal = selected.reduce((sum, course) => sum + course.price, 0);
    let discount = 0;

    // Apply discounts based on the number of courses selected
    if (selected.length === 2) {
        discount = 0.05; // 5% discount
    } else if (selected.length === 3) {
        discount = 0.10; // 10% discount
    } else if (selected.length > 3) {
        discount = 0.15; // 15% discount
    }

    const discountedTotal = courseTotal * (1 - discount);
    const vat = discountedTotal * 0.15; // 15% VAT
    const finalTotal = discountedTotal + vat;

    return finalTotal;
};

export { calculation };
