# Test Cases

| Trường hợp kiểm thử | Dữ liệu đầu vào | Kết quả sai thực tế | Kết quả đúng mong đợi |
|--------------------|----------------|---------------------|------------------------|
| Case 1: Lỗi thiếu 1 ly | orderQuantity = 3 | Chỉ tính 2 ly | Phải tính đủ 3 ly |
| Case 2: Lỗi giảm giá sai | isGoldMember = true | Bị giảm nhiều lần trong vòng lặp → tổng thấp bất thường | Chỉ giảm 1 lần sau khi tính tổng |
