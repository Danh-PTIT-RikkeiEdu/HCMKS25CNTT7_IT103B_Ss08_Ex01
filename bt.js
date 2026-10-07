const fastChargingRate = 4500;
const waitingQueue = ['29A-112.33', '30E-889.12', '51K-678.99'];

const nextVehicle = waitingQueue.shift(); // pop lấy cuối shift lấy đầu ra nhee.
console.log('Xe được điều phối vào sạc:', nextVehicle);

const completedSessionsKwh = [45.2, 30.5, 62.8, 28.0];
let totalKwh = 0;

for (let i = 0; i < completedSessionsKwh.length; i++) { // Cần láy index nên không cần =
    totalKwh += completedSessionsKwh[i];
}

const totalRevenue = totalKwh * fastChargingRate;
console.log('Tổng sản lượng:', totalKwh, 'kWh');
console.log('Tổng doanh thu:', totalRevenue, 'VNĐ');