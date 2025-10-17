const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 1111;

// Phục vụ tệp index.html khi người dùng truy cập vào trang chủ
app.get("/", (req, res) => {
  // path.join(__dirname, 'index.html') sẽ tạo đường dẫn tuyệt đối
  // đến tệp index.html của bạn
  res.sendFile(path.join(__dirname, "index.html"));
});

// Khởi động máy chủ
app.listen(PORT, () => {
  console.log(`Ứng dụng đang chạy tại http://localhost:${PORT}`);
  console.log("Nhấn Ctrl+C để tắt máy chủ.");
});
