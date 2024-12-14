function showAlert() {
    const order = prompt("Nechta buyurtma qilasiz?");
    
    if (order === null) {
        
        alert("Buyurtma bekor qilindi.");
        return;
    }
    
    switch (parseInt(order)) {
        case 1:
            alert("Siz 1 dona buyurtma qildingiz.");
            break;
        case 2:
            alert("Siz 2 dona buyurtma qildingiz.");
            break;
        case 3:
            alert("Siz 3 dona buyurtma qildingiz.");
            break;
        case 4:
            alert("Siz 4 dona buyurtma qildingiz.");
            break;
        case 5:
            alert("Siz 5 dona buyurtma qildingiz.");
            break;
        case 6:
            alert("Siz 6 dona buyurtma qildingiz.");
            break;
        case 7:
            alert("Siz 7 dona buyurtma qildingiz.");
            break;
        case 8:
            alert("Siz 8 dona buyurtma qildingiz.");
            break;
        case 9:
            alert("Siz 9 dona buyurtma qildingiz.");
            break;
        case 10:
            alert("Siz 10 dona buyurtma qildingiz.");
            break;
        default:
            alert("Noto'g'ri miqdor kiritildi yoki siz " + order + " dona buyurtma qildingiz.");
    }
}



