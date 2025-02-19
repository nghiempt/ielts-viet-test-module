const formatVND = (money: number) => {
    const number = Number(money);
    if (isNaN(number)) {
        return "Invalid number";
    }
    return number.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
}

const renderStatusTimeKeeping = (status: string) => {
    let result = "";
    switch (status) {
        case "need-check-in":
            result = "Chưa check-in";
            break;
        default:
            result = "Chưa xác định";
            break;
    }
    return result
}

export const HELPER = {
    formatVND,
    renderStatusTimeKeeping
}