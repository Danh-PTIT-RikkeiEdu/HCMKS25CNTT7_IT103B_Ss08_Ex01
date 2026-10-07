Phân tích lỗi & Lập bảng Test Cases
1. Phân tích lỗi
Lỗi lấy xe cuối ra vì dùng pop method phải dùng shift để lấy đầu.
Lỗi NaN vì cần lấy số index có thì không được dùng = trong length nó sẽ gây lỗi vì nó không biết nó đang lấy gì ở cuối nữa.
2. Test case
a. 
Trường hợp kiểm thử: Cơ chế lấy xe.
Dữ liệu đầu vào: mảng waitingQueue.
Kết quả sai thực tế: lấy ở cuối.
Kết quả đúng mong đợi: lấy ở đầu.
b. 
Trường hợp kiểm thử: Tính sản lượng và doanh thu.
Dữ liệu đầu vào: mảng completedSessionsKwh.
Kết quả sai thực tế: ra NaN cả 2 sản lượng và doanh thu.
Kết quả đúng mong đợi: Ra 2 con số nào nó.
