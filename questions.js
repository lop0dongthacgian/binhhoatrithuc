// Mảng chứa 100 câu hỏi về Kiến thức cơ bản Công nghệ số Cộng đồng
const questions = [
   
    {
        question: "Định danh điện tử là gì?",
        options: ["Là một loại chứng minh nhân dân vật lý", "Là danh tính của công dân trên môi trường số", "Là chữ ký tay được scan", "Là mật khẩu tài khoản ngân hàng"],
        answer: "Là danh tính của công dân trên môi trường số"
    },
    {
        question: "Ứng dụng nào của Việt Nam hỗ trợ định danh điện tử?",
        options: ["Zalo", "Facebook", "VNeID", "TikTok"],
        answer: "VNeID"
    },
    {
        question: "Định danh điện tử mức 1 có những thông tin gì?",
        options: ["Chỉ số CCCD và họ tên", "Số CCCD, họ tên, ngày sinh, giới tính", "Thông tin sinh trắc học", "Tất cả thông tin trên giấy tờ tùy thân"],
        answer: "Số CCCD, họ tên, ngày sinh, giới tính"
    },
    {
        question: "Định danh điện tử mức 2 bao gồm những thông tin gì?",
        options: ["Chỉ số CCCD và họ tên", "Thông tin cơ bản và ảnh chân dung, vân tay", "Chỉ thông tin về sức khỏe", "Thông tin tài khoản ngân hàng"],
        answer: "Thông tin cơ bản và ảnh chân dung, vân tay"
    },
    {
        question: "Lợi ích của việc sử dụng định danh điện tử VNeID là gì?",
        options: ["Thay thế giấy tờ tùy thân khi giao dịch hành chính", "Thanh toán các dịch vụ công", "Kê khai thuế trực tuyến", "Tất cả các lợi ích trên"],
        answer: "Tất cả các lợi ích trên"
    },
    {
        question: "Hành chính công trực tuyến là gì?",
        options: ["Làm thủ tục hành chính tại trụ sở cơ quan nhà nước", "Làm thủ tục hành chính qua điện thoại", "Làm thủ tục hành chính qua môi trường mạng Internet", "Làm thủ tục hành chính qua bưu điện"],
        answer: "Làm thủ tục hành chính qua môi trường mạng Internet"
    },
    {
        question: "Cổng Dịch vụ công Quốc gia có địa chỉ truy cập là gì?",
        options: ["dichvucong.gov.vn", "chinhphu.vn", "vneid.gov.vn", "moj.gov.vn"],
        answer: "dichvucong.gov.vn"
    },
    {
        question: "Khi sử dụng dịch vụ công trực tuyến, người dân có thể thực hiện điều gì?",
        options: ["Nộp hồ sơ trực tuyến", "Theo dõi tình trạng giải quyết hồ sơ", "Nhận kết quả trực tuyến hoặc qua bưu điện", "Tất cả các việc trên"],
        answer: "Tất cả các việc trên"
    },
    {
        question: "Để nộp hồ sơ trực tuyến trên Cổng Dịch vụ công Quốc gia, người dân cần có tài khoản gì?",
        options: ["Tài khoản Facebook", "Tài khoản Google", "Tài khoản Cổng Dịch vụ công Quốc gia hoặc VNeID", "Tài khoản ngân hàng"],
        answer: "Tài khoản Cổng Dịch vụ công Quốc gia hoặc VNeID"
    },
    {
        question: "Thành phần hồ sơ khi nộp trực tuyến có cần công chứng không?",
        options: ["Luôn luôn cần công chứng", "Tùy thuộc vào từng thủ tục và quy định", "Không bao giờ cần công chứng", "Chỉ cần chụp ảnh mờ"],
        answer: "Tùy thuộc vào từng thủ tục và quy định"
    },
    {
        question: "Thanh toán trực tuyến phí, lệ phí giải quyết thủ tục hành chính được thực hiện qua đâu?",
        options: ["Chỉ bằng tiền mặt", "Qua các cổng thanh toán trực tuyến được tích hợp", "Chỉ qua chuyển khoản ngân hàng", "Qua bưu điện"],
        answer: "Qua các cổng thanh toán trực tuyến được tích hợp"
    },
    {
        question: "Khi gặp khó khăn khi thực hiện thủ tục hành chính trực tuyến, người dân có thể tìm hỗ trợ ở đâu?",
        options: ["Hỏi người thân", "Liên hệ tổng đài hỗ trợ hoặc bộ phận một cửa điện tử của cơ quan", "Tự tìm hiểu trên mạng", "Bỏ qua không làm nữa"],
        answer: "Liên hệ tổng đài hỗ trợ hoặc bộ phận một cửa điện tử của cơ quan"
    },
    {
        question: "Việc sử dụng định danh điện tử và hành chính công trực tuyến góp phần vào mục tiêu nào của Chính phủ Việt Nam?",
        options: ["Chỉ để giảm giấy tờ", "Xây dựng Chính phủ số, nền kinh tế số, xã hội số", "Tăng cường sử dụng tiền mặt", "Giảm tương tác giữa người dân và cơ quan nhà nước"],
        answer: "Xây dựng Chính phủ số, nền kinh tế số, xã hội số"
    },
    {
        question: "Độ bảo mật của định danh điện tử VNeID được đảm bảo như thế nào?",
        options: ["Không được bảo mật", "Được bảo vệ bởi hệ thống công nghệ thông tin hiện đại", "Chỉ cần mật khẩu đơn giản", "Chia sẻ thông tin cho người lạ"],
        answer: "Được bảo vệ bởi hệ thống công nghệ thông tin hiện đại"
    },
    {
        question: "Khi mất điện thoại có cài VNeID, cần làm gì ngay lập tức?",
        options: ["Không làm gì cả", "Liên hệ cơ quan công an hoặc khóa tài khoản VNeID", "Mua điện thoại mới", "Đăng nhập trên thiết bị khác"],
        answer: "Liên hệ cơ quan công an hoặc khóa tài khoản VNeID"
    },
     {
        question: "Cá nhân có bắt buộc phải đăng ký tài khoản định danh điện tử không?",
        options: ["Bắt buộc với tất cả mọi người", "Không bắt buộc, tùy nhu cầu sử dụng", "Chỉ bắt buộc với cán bộ công chức", "Chỉ bắt buộc với người kinh doanh"],
        answer: "Không bắt buộc, tùy nhu cầu sử dụng"
    },
    {
        question: "Đăng ký tài khoản định danh điện tử mức 1 được thực hiện ở đâu?",
        options: ["Tại nhà", "Qua ứng dụng VNeID trên điện thoại", "Tại trụ sở công an xã, phường, thị trấn", "Tại ngân hàng"],
        answer: "Qua ứng dụng VNeID trên điện thoại"
    },
    {
        question: "Đăng ký tài khoản định danh điện tử mức 2 được thực hiện ở đâu?",
        options: ["Tại nhà", "Qua ứng dụng VNeID trên điện thoại", "Tại trụ sở công an xã, phường, thị trấn", "Tại bưu điện"],
        answer: "Tại trụ sở công an xã, phường, thị trấn"
    },
     {
        question: "Khi sử dụng VNeID, các thông tin cá nhân có được chia sẻ công khai không?",
        options: ["Được chia sẻ công khai cho mọi người", "Không được chia sẻ công khai, chỉ sử dụng để xác minh danh tính khi cần thiết", "Chia sẻ tùy ý người dùng", "Chỉ chia sẻ trên mạng xã hội"],
        answer: "Không được chia sẻ công khai, chỉ sử dụng để xác minh danh tính khi cần thiết"
    },
    {
        question: "Việc tích hợp các giấy tờ vào VNeID mang lại lợi ích gì?",
        options: ["Giảm số lượng giấy tờ cần mang theo", "Thuận tiện khi thực hiện các giao dịch", "Tiết kiệm thời gian và chi phí", "Tất cả các lợi ích trên"],
        answer: "Tất cả các lợi ích trên"
    },
    {
        question: "Cổng Dịch vụ công Quốc gia cung cấp dịch vụ công cho đối tượng nào?",
        options: ["Chỉ cho cán bộ nhà nước", "Chỉ cho doanh nghiệp", "Cho cả cá nhân và doanh nghiệp", "Chỉ cho người nước ngoài"],
        answer: "Cho cả cá nhân và doanh nghiệp"
    },
    {
        question: "Thủ tục hành chính trực tuyến mức độ 3 là gì?",
        options: ["Chỉ cho phép nộp hồ sơ trực tuyến", "Cho phép nộp hồ sơ trực tuyến và thanh toán trực tuyến", "Cho phép nộp hồ sơ trực tuyến, thanh toán trực tuyến và nhận kết quả trực tuyến", "Chỉ cung cấp thông tin về thủ tục"],
        answer: "Cho phép nộp hồ sơ trực tuyến và thanh toán trực tuyến"
    },
    {
        question: "Thủ tục hành chính trực tuyến mức độ 4 là gì?",
        options: ["Chỉ cho phép nộp hồ sơ trực tuyến", "Cho phép nộp hồ sơ trực tuyến và thanh toán trực tuyến", "Cho phép nộp hồ sơ trực tuyến, thanh toán trực tuyến và nhận kết quả trực tuyến hoặc qua bưu điện", "Chỉ cung cấp thông tin về thủ tục"],
        answer: "Cho phép nộp hồ sơ trực tuyến, thanh toán trực tuyến và nhận kết quả trực tuyến hoặc qua bưu điện"
    },
    {
        question: "Chữ ký số có thể được sử dụng trong các giao dịch hành chính công trực tuyến không?",
        options: ["Không thể sử dụng", "Có thể sử dụng để ký các văn bản điện tử", "Chỉ dùng để ký email", "Chỉ dùng để ký hình ảnh"],
        answer: "Có thể sử dụng để ký các văn bản điện tử"
    },
    {
        question: "Khi nộp hồ sơ trực tuyến, cần chú ý điều gì về định dạng tệp đính kèm?",
        options: ["Định dạng nào cũng được", "Cần tuân thủ các định dạng được quy định trên Cổng Dịch vụ công", "Chỉ chấp nhận file ảnh", "Chỉ chấp nhận file nén"],
        answer: "Cần tuân thủ các định dạng được quy định trên Cổng Dịch vụ công"
    },
    {
        question: "Việc khai thác thông tin từ Cơ sở dữ liệu quốc gia về dân cư thông qua VNeID giúp ích gì?",
        options: ["Tra cứu thông tin cá nhân", "Giảm yêu cầu xuất trình giấy tờ nhiều lần", "Đảm bảo tính chính xác của thông tin", "Tất cả các lợi ích trên"],
        answer: "Tất cả các lợi ích trên"
    },
    {
        question: "Ứng dụng VNeID có thể hiển thị những thông tin nào đã được tích hợp?",
        options: ["Thông tin thẻ BHYT", "Thông tin giấy phép lái xe", "Thông tin đăng ký xe", "Tất cả các thông tin trên (nếu đã tích hợp thành công)"],
        answer: "Tất cả các thông tin trên (nếu đã tích hợp thành công)"
    },
     {
        question: "Khi quên mật khẩu đăng nhập Cổng Dịch vụ công Quốc gia, cần làm gì?",
        options: ["Tạo tài khoản mới", "Sử dụng chức năng quên mật khẩu và làm theo hướng dẫn", "Đến cơ quan nhà nước để lấy lại", "Nhờ người khác đăng nhập hộ"],
        answer: "Sử dụng chức năng quên mật khẩu và làm theo hướng dẫn"
    },
    {
        question: "Hệ thống thông tin giải quyết thủ tục hành chính cấp bộ, cấp tỉnh được gọi chung là gì?",
        options: ["Cổng thông tin điện tử", "Hệ thống một cửa điện tử", "Cổng Dịch vụ công", "Hệ thống quản lý văn bản"],
        answer: "Hệ thống một cửa điện tử"
    },
    {
        question: "Lợi ích của việc theo dõi tình trạng hồ sơ trực tuyến là gì?",
        options: ["Biết được tiến độ giải quyết hồ sơ", "Chủ động về thời gian nhận kết quả", "Không cần đến trực tiếp cơ quan", "Tất cả các lợi ích trên"],
        answer: "Tất cả các lợi ích trên"
    },
    {
        question: "Việc cung cấp dịch vụ công trực tuyến giúp cơ quan nhà nước điều gì?",
        options: ["Giảm tải công việc giấy tờ", "Tăng tính công khai, minh bạch", "Phục vụ người dân tốt hơn", "Tất cả các điều trên"],
        answer: "Tất cả các điều trên"
    },
    {
        question: "Khi nhận được thông báo giả mạo về hồ sơ dịch vụ công trực tuyến, cần làm gì?",
        options: ["Làm theo hướng dẫn trong thông báo", "Cung cấp thông tin cá nhân theo yêu cầu", "Kiểm tra thông tin trên Cổng Dịch vụ công chính thức hoặc liên hệ cơ quan", "Bỏ qua không làm gì"],
        answer: "Kiểm tra thông tin trên Cổng Dịch vụ công chính thức hoặc liên hệ cơ quan"
    },
     {
        question: "Định danh điện tử VNeID có giá trị sử dụng ở đâu?",
        options: ["Chỉ trong tỉnh/thành phố đăng ký", "Trên toàn quốc và thay thế các giấy tờ đã tích hợp", "Chỉ khi đi du lịch", "Chỉ dùng để đăng nhập website"],
        answer: "Trên toàn quốc và thay thế các giấy tờ đã tích hợp"
    },
    {
        question: "Làm sao để biết một dịch vụ công có hỗ trợ trực tuyến hay không?",
        options: ["Hỏi người dân khác", "Tra cứu trên Cổng Dịch vụ công Quốc gia hoặc cổng dịch vụ công cấp bộ/tỉnh", "Đến trực tiếp cơ quan để hỏi", "Xem quảng cáo trên TV"],
        answer: "Tra cứu trên Cổng Dịch vụ công Quốc gia hoặc cổng dịch vụ công cấp bộ/tỉnh"
    },
    {
        question: "Vai trò của Cơ sở dữ liệu quốc gia về dân cư trong định danh điện tử là gì?",
        options: ["Lưu trữ thông tin cá nhân của công dân", "Cung cấp thông tin xác thực cho định danh điện tử", "Kết nối với các cơ sở dữ liệu chuyên ngành khác", "Tất cả các vai trò trên"],
        answer: "Tất cả các vai trò trên"
    },
     {
        question: "Thanh toán phí dịch vụ công trực tuyến có những hình thức nào phổ biến?",
        options: ["Chỉ bằng thẻ ngân hàng", "Qua ví điện tử, tài khoản ngân hàng, Mobile Money", "Chỉ bằng tiền mặt", "Chỉ qua bưu điện"],
        answer: "Qua ví điện tử, tài khoản ngân hàng, Mobile Money"
    },
    {
        question: "Khi nộp hồ sơ trực tuyến, cần đảm bảo điều gì về chất lượng ảnh chụp/scan giấy tờ?",
        options: ["Chụp càng mờ càng tốt", "Ảnh/scan rõ nét, đầy đủ thông tin, đúng định dạng", "Chỉ cần chụp một phần giấy tờ", "Không cần chụp giấy tờ"],
        answer: "Ảnh/scan rõ nét, đầy đủ thông tin, đúng định dạng"
    },
    {
        question: "Người dân có thể tra cứu thông tin gì trên Cổng Dịch vụ công Quốc gia?",
        options: ["Thông tin về thủ tục hành chính", "Tình trạng giải quyết hồ sơ", "Thông tin liên hệ của cơ quan giải quyết", "Tất cả các thông tin trên"],
        answer: "Tất cả các thông tin trên"
    },
     {
        question: "Khi sử dụng dịch vụ công trực tuyến, làm sao để nhận kết quả hồ sơ?",
        options: ["Đến trực tiếp cơ quan nhận", "Nhận qua bưu điện", "Nhận bản điện tử trên Cổng Dịch vụ công hoặc qua email/SMS", "Tất cả các hình thức trên tùy thủ tục"],
        answer: "Tất cả các hình thức trên tùy thủ tục"
    },
    {
        question: "Mục tiêu của việc triển khai dịch vụ công trực tuyến là gì?",
        options: ["Giảm sự tương tác giữa người dân và cán bộ", "Nâng cao chất lượng phục vụ người dân và doanh nghiệp", "Tăng cường công việc cho cán bộ", "Chỉ để hiện đại hóa"],
        answer: "Nâng cao chất lượng phục vụ người dân và doanh nghiệp"
    },
     {
        question: "Khi sử dụng tài khoản VNeID để đăng nhập Cổng Dịch vụ công Quốc gia, có cần đăng ký tài khoản riêng trên Cổng nữa không?",
        options: ["Vẫn cần đăng ký tài khoản riêng", "Không cần đăng ký tài khoản riêng trên Cổng Dịch vụ công Quốc gia nữa", "Tùy từng trường hợp", "Chỉ dùng VNeID để tra cứu"],
        answer: "Không cần đăng ký tài khoản riêng trên Cổng Dịch vụ công Quốc gia nữa"
    },
    {
        question: "Thông tin về cư trú của công dân có thể được kiểm tra qua VNeID không?",
        options: ["Không thể kiểm tra", "Có thể kiểm tra nếu thông tin đã được cập nhật và tích hợp", "Chỉ kiểm tra được thông tin tạm trú", "Chỉ kiểm tra được thông tin thường trú"],
        answer: "Có thể kiểm tra nếu thông tin đã được cập nhật và tích hợp"
    },
     {
        question: "Việc sử dụng dịch vụ công trực tuyến giúp tiết kiệm những chi phí nào?",
        options: ["Chi phí đi lại", "Chi phí in ấn hồ sơ", "Chi phí thời gian chờ đợi", "Tất cả các chi phí trên"],
        answer: "Tất cả các chi phí trên"
    },
     {
        question: "Khi nộp hồ sơ trực tuyến, làm sao để biết hồ sơ đã được gửi thành công?",
        options: ["Không có thông báo", "Hệ thống sẽ có thông báo nộp thành công và cung cấp mã số hồ sơ", "Chỉ cần thấy nút gửi", "Gửi xong là được"],
        answer: "Hệ thống sẽ có thông báo nộp thành công và cung cấp mã số hồ sơ"
    },
     {
        question: "Có thể ủy quyền cho người khác sử dụng tài khoản định danh điện tử của mình không?",
        options: ["Có thể ủy quyền tùy ý", "Không được ủy quyền, tài khoản định danh điện tử là của cá nhân và phải tự quản lý", "Chỉ ủy quyền cho người thân", "Chỉ ủy quyền khi đi vắng"],
        answer: "Không được ủy quyền, tài khoản định danh điện tử là của cá nhân và phải tự quản lý"
    },
    {
        question: "Khi thực hiện thủ tục hành chính trực tuyến mà gặp lỗi hệ thống, cần làm gì?",
        options: ["Bỏ qua không làm nữa", "Thử lại sau", "Liên hệ bộ phận hỗ trợ kỹ thuật của Cổng Dịch vụ công hoặc cơ quan liên quan", "Tự sửa lỗi"],
        answer: "Liên hệ bộ phận hỗ trợ kỹ thuật của Cổng Dịch vụ công hoặc cơ quan liên quan"
    },
     {
        question: "Lợi ích của việc sử dụng chữ ký số trong hành chính công trực tuyến là gì?",
        options: ["Thay thế chữ ký tay trên văn bản điện tử", "Đảm bảo tính toàn vẹn và chống chối bỏ của văn bản", "Rút ngắn thời gian xử lý hồ sơ", "Tất cả các lợi ích trên"],
        answer: "Tất cả các lợi ích trên"
    },
     {
        question: "Các thông báo liên quan đến giải quyết hồ sơ dịch vụ công trực tuyến thường được gửi qua đâu?",
        options: ["Chỉ qua bưu điện", "Qua email, SMS, hoặc trên Cổng Dịch vụ công/ứng dụng VNeID", "Chỉ gọi điện thoại thông báo", "Chỉ gửi qua mạng xã hội"],
        answer: "Qua email, SMS, hoặc trên Cổng Dịch vụ công/ứng dụng VNeID"
    },
    {
        question: "Khi cần bổ sung hồ sơ cho thủ tục hành chính trực tuyến, làm sao để thực hiện?",
        options: ["Nộp lại hồ sơ từ đầu", "Truy cập lại hồ sơ đã nộp trên Cổng Dịch vụ công và tải lên các tài liệu bổ sung theo yêu cầu", "Đến trực tiếp cơ quan để bổ sung", "Gửi qua email cá nhân"],
        answer: "Truy cập lại hồ sơ đã nộp trên Cổng Dịch vụ công và tải lên các tài liệu bổ sung theo yêu cầu"
    },
     {
        question: "Định danh điện tử và hành chính công trực tuyến góp phần vào việc phòng chống tham nhũng như thế nào?",
        options: ["Không liên quan", "Tăng tính công khai, minh bạch, giảm tiếp xúc trực tiếp, hạn chế tiêu cực", "Làm tăng cơ hội tham nhũng", "Chỉ liên quan đến kinh tế"],
        answer: "Tăng tính công khai, minh bạch, giảm tiếp xúc trực tiếp, hạn chế tiêu cực"
    },
     {
        question: "Để đảm bảo an toàn khi sử dụng Cổng Dịch vụ công Quốc gia, cần chú ý điều gì?",
        options: ["Đăng nhập ở nơi công cộng và lưu mật khẩu", "Chỉ truy cập qua địa chỉ chính thức (dichvucong.gov.vn) và bảo vệ tài khoản", "Chia sẻ tài khoản cho người khác", "Sử dụng mật khẩu yếu"],
        answer: "Chỉ truy cập qua địa chỉ chính thức (dichvucong.gov.vn) và bảo vệ tài khoản"
    },
{
        question: "Thiết bị nào sau đây có thể kết nối Internet?",
        options: ["Tivi thường", "Đèn bàn", "Điện thoại thông minh", "Quạt máy"],
        answer: "Điện thoại thông minh"
    },
    {
        question: "Chức năng chính của trình duyệt web là gì?",
        options: ["Soạn thảo văn bản", "Vẽ hình", "Truy cập Internet", "Nghe nhạc"],
        answer: "Truy cập Internet"
    },
    {
        question: "Email là gì?",
        options: ["Tin nhắn văn bản", "Hộp thư điện tử", "Trang web", "Phần mềm diệt virus"],
        answer: "Hộp thư điện tử"
    },
     {
        question: "Thiết bị nào được sử dụng để nhập dữ liệu bằng cách chạm vào màn hình?",
        options: ["Bàn phím", "Chuột", "Màn hình cảm ứng", "Máy in"],
        answer: "Màn hình cảm ứng"
    },
    {
        question: "Công nghệ nào cho phép thanh toán không dùng tiền mặt bằng cách chạm điện thoại vào máy POS?",
        options: ["Bluetooth", "Wi-Fi", "NFC (Near-Field Communication)", "Hồng ngoại"],
        answer: "NFC (Near-Field Communication)"
    },
    {
        question: "Để bảo vệ tài khoản trực tuyến, ngoài mật khẩu, bạn có thể sử dụng phương pháp bảo mật nào khác?",
        options: ["Chia sẻ mật khẩu cho bạn bè", "Xác thực hai yếu tố (2FA)", "Ghi mật khẩu ra giấy dán lên màn hình", "Sử dụng cùng một mật khẩu cho nhiều tài khoản"],
        answer: "Xác thực hai yếu tố (2FA)"
    },
    {
        question: "Khi nhận được cuộc gọi hoặc tin nhắn yêu cầu cung cấp mã OTP, bạn nên làm gì?",
        options: ["Cung cấp mã OTP ngay lập tức", "Từ chối cung cấp và kiểm tra lại giao dịch hoặc liên hệ ngân hàng/dịch vụ chính thức", "Chia sẻ cho người gọi nếu họ tự xưng là nhân viên ngân hàng", "Bỏ qua không làm gì"],
        answer: "Từ chối cung cấp và kiểm tra lại giao dịch hoặc liên hệ ngân hàng/dịch vụ chính thức"
    },
    {
        question: "Phần mềm độc hại (malware) là gì?",
        options: ["Phần mềm giúp tăng tốc máy tính", "Phần mềm được thiết kế để gây hại hoặc truy cập trái phép vào hệ thống máy tính", "Phần mềm để vẽ đồ họa", "Phần mềm chơi nhạc"],
        answer: "Phần mềm được thiết kế để gây hại hoặc truy cập trái phép vào hệ thống máy tính"
    },
    {
        question: "Đâu là ví dụ về nền tảng học trực tuyến phổ biến tại Việt Nam?",
        options: ["Shopee", "Lazada", "Zoom/Google Meet/Microsoft Teams", "Grab"],
        answer: "Zoom/Google Meet/Microsoft Teams"
    },
    {
        question: "Để tham gia lớp học trực tuyến, bạn cần có những thiết bị gì?",
        options: ["Máy chơi game", "Điện thoại hoặc máy tính có kết nối Internet và phần mềm học trực tuyến", "Máy in và giấy", "Chỉ cần tivi"],
        answer: "Điện thoại hoặc máy tính có kết nối Internet và phần mềm học trực tuyến"
    },
    {
        question: "Khi tìm kiếm thông tin trên Internet, làm sao để đánh giá độ tin cậy của một website?",
        options: ["Xem website có giao diện đẹp không", "Kiểm tra nguồn thông tin, tác giả, ngày cập nhật, và so sánh với các nguồn uy tín khác", "Tin vào tất cả những gì đọc được", "Xem số lượng người truy cập"],
        answer: "Kiểm tra nguồn thông tin, tác giả, ngày cập nhật, và so sánh với các nguồn uy tín khác"
    },
    {
        question: "Đâu là ví dụ về dịch vụ công trực tuyến?",
        options: ["Mua sắm online", "Xem phim trực tuyến", "Đăng ký tạm trú/tạm vắng qua mạng", "Chơi game online"],
        answer: "Đăng ký tạm trú/tạm vắng qua mạng"
    },
    {
        question: "Khi sử dụng mạng xã hội, hành vi nào sau đây là nên tránh?",
        options: ["Chia sẻ khoảnh khắc đời thường với bạn bè", "Tham gia các hội nhóm học tập", "Tiết lộ quá nhiều thông tin cá nhân nhạy cảm (số điện thoại, địa chỉ nhà, số CMND)", "Kết nối với người thân"],
        answer: "Tiết lộ quá nhiều thông tin cá nhân nhạy cảm (số điện thoại, địa chỉ nhà, số CMND)"
    },
    {
        question: "Ứng dụng nào thường được sử dụng để liên lạc bằng văn bản và giọng nói qua Internet?",
        options: ["Google Sheets", "Microsoft Word", "Zalo/Viber/WhatsApp", "Adobe Photoshop"],
        answer: "Zalo/Viber/WhatsApp"
    },
    {
        question: "Lợi ích chính của mua sắm trực tuyến (online shopping) là gì?",
        options: ["Tốn nhiều thời gian đi lại", "Có nhiều lựa chọn sản phẩm, so sánh giá dễ dàng, mua sắm mọi lúc mọi nơi", "Chỉ mua được một số ít sản phẩm", "Giá cả luôn đắt hơn mua trực tiếp"],
        answer: "Có nhiều lựa chọn sản phẩm, so sánh giá dễ dàng, mua sắm mọi lúc mọi nơi"
    },
    {
        question: "Khi bán hàng trực tuyến, bạn cần chú ý điều gì để tạo uy tín?",
        options: ["Đăng thông tin sản phẩm sai sự thật", "Sử dụng hình ảnh sản phẩm kém chất lượng", "Cung cấp thông tin liên hệ rõ ràng, mô tả sản phẩm chính xác, phản hồi khách hàng nhanh chóng", "Không cần quan tâm đến đánh giá của khách hàng"],
        answer: "Cung cấp thông tin liên hệ rõ ràng, mô tả sản phẩm chính xác, phản hồi khách hàng nhanh chóng"
    },
    {
        question: "Công nghệ nào giúp các thiết bị trong nhà (đèn, quạt, tivi...) kết nối và điều khiển từ xa qua điện thoại?",
        options: ["Công nghệ 2G", "Công nghệ nhà thông minh (Smart Home)", "Công nghệ in 3D", "Công nghệ thực tế ảo"],
        answer: "Công nghệ nhà thông minh (Smart Home)"
    },
    {
        question: "Để đảm bảo an toàn cho trẻ em khi sử dụng Internet, phụ huynh nên làm gì?",
        options: ["Cho trẻ tự do truy cập bất kỳ nội dung nào", "Thiết lập các biện pháp kiểm soát truy cập, hướng dẫn trẻ về an toàn trực tuyến, đồng hành cùng trẻ khi sử dụng mạng", "Không cho trẻ sử dụng bất kỳ thiết bị điện tử nào", "Mặc kệ trẻ muốn làm gì thì làm"],
        answer: "Thiết lập các biện pháp kiểm soát truy cập, hướng dẫn trẻ về an toàn trực tuyến, đồng hành cùng trẻ khi sử dụng mạng"
    },
     {
        question: "Khi điện thoại hoặc máy tính hoạt động chậm, bạn nên làm gì trước tiên?",
        options: ["Mua thiết bị mới ngay lập tức", "Khởi động lại thiết bị, xóa bớt ứng dụng không cần thiết, kiểm tra virus", "Đập bỏ thiết bị", "Để nguyên và hy vọng nó nhanh lên"],
        answer: "Khởi động lại thiết bị, xóa bớt ứng dụng không cần thiết, kiểm tra virus"
    },
    {
        question: "Lợi ích của việc sao lưu dữ liệu (backup) là gì?",
        options: ["Làm tốn dung lượng lưu trữ", "Giúp khôi phục lại dữ liệu khi thiết bị gặp sự cố hoặc bị mất", "Không có lợi ích gì", "Chỉ làm cho máy tính chậm hơn"],
        answer: "Giúp khôi phục lại dữ liệu khi thiết bị gặp sự cố hoặc bị mất"
    },
 {
        question: "Phần mềm nào sau đây dùng để gõ văn bản?",
        options: ["Excel", "PowerPoint", "Word", "Photoshop"],
        answer: "Word"
    },
    {
        question: "Tác hại của việc sử dụng thiết bị số quá lâu là gì?",
        options: ["Tăng khả năng tập trung", "Tăng cường trí nhớ", "Mỏi mắt, giảm chú ý", "Không ảnh hưởng"],
        answer: "Mỏi mắt, giảm chú ý"
    },
    {
        question: "Mạng xã hội phổ biến nhất ở Việt Nam hiện nay là:",
        options: ["Facebook", "Twitter", "TikTok", "Instagram"],
        answer: "Facebook"
    },
    {
        question: "Khi nhận được tin nhắn lạ chứa liên kết, bạn nên:",
        options: ["Mở ngay liên kết", "Chia sẻ cho người khác", "Bỏ qua hoặc xóa", "Trả lời lại"],
        answer: "Bỏ qua hoặc xóa"
    },
    {
        question: "Thiết bị nào sau đây KHÔNG phải là thiết bị thông minh?",
        options: ["Máy tính bảng", "Điện thoại cục gạch", "Laptop", "Điện thoại thông minh"],
        answer: "Điện thoại cục gạch"
    },
    {
        question: "Lưu trữ đám mây là gì?",
        options: ["Lưu trên ổ cứng", "Lưu dữ liệu trên Internet", "Lưu vào USB", "Lưu trên giấy"],
        answer: "Lưu dữ liệu trên Internet"
    },
    {
        question: "Khi sử dụng Internet, cần tuân thủ điều gì?",
        options: ["Tự do tuyệt đối", "Không cần kiểm soát", "Quy định pháp luật và đạo đức", "Chỉ cần biết dùng"],
        answer: "Quy định pháp luật và đạo đức"
    },
    {
        question: "Đâu là phần mềm dùng để trình chiếu?",
        options: ["Word", "Excel", "PowerPoint", "Paint"],
        answer: "PowerPoint"
    },
    {
        question: "Muốn tìm kiếm thông tin trên Internet, bạn dùng gì?",
        options: ["Trình duyệt web", "Máy in", "Webcam", "Bàn phím"],
        answer: "Trình duyệt web"
    },
    {
        question: "Thông tin cá nhân nên được chia sẻ như thế nào trên mạng?",
        options: ["Công khai mọi nơi", "Chỉ chia sẻ với người tin cậy", "Gửi cho người lạ", "Đăng lên mạng xã hội"],
        answer: "Chỉ chia sẻ với người tin cậy"
    },
    {
        question: "Ứng dụng nào dùng để gọi video?",
        options: ["YouTube", "Zalo", "Facebook", "Google Maps"],
        answer: "Zalo"
    },
    {
        question: "Khi cài đặt phần mềm, bạn nên:",
        options: ["Cài tất cả không kiểm tra", "Đọc kỹ quyền truy cập trước khi chấp nhận", "Cài phần mềm lạ từ Internet", "Không cần kiểm tra gì cả"],
        answer: "Đọc kỹ quyền truy cập trước khi chấp nhận"
    },
    {
        question: "Thiết bị nào có thể chụp ảnh?",
        options: ["Máy giặt", "Bàn phím", "Điện thoại thông minh", "Chuột máy tính"],
        answer: "Điện thoại thông minh"
    },
    {
        question: "Công nghệ nào giúp kết nối không dây giữa các thiết bị gần nhau?",
        options: ["Bluetooth", "USB", "HDMI", "Dây mạng"],
        answer: "Bluetooth"
    },
    {
        question: "Khi điện thoại yêu cầu cập nhật phần mềm, bạn nên:",
        options: ["Luôn từ chối", "Tắt nguồn", "Cập nhật để tăng bảo mật và hiệu năng", "Gỡ ứng dụng"],
        answer: "Cập nhật để tăng bảo mật và hiệu năng"
    },
    {
        question: "“Tin giả” là gì?",
        options: ["Thông tin đúng", "Thông tin sai lệch, bịa đặt", "Thông tin chính thức", "Bài viết hài hước"],
        answer: "Thông tin sai lệch, bịa đặt"
    },
    {
        question: "Ví dụ về hành vi vi phạm pháp luật trên mạng là:",
        options: ["Đăng ảnh cá nhân", "Bình luận tích cực", "Phát tán tin giả, xúc phạm người khác", "Mua hàng online"],
        answer: "Phát tán tin giả, xúc phạm người khác"
    },
    {
        question: "Mật khẩu mạnh nên bao gồm:",
        options: ["Toàn chữ thường", "Tên người thân", "Ký tự đặc biệt, số và chữ", "Ngày sinh"],
        answer: "Ký tự đặc biệt, số và chữ"
    },
    {
        question: "Google Translate là công cụ dùng để:",
        options: ["Tạo ảnh", "Dịch ngôn ngữ", "Chơi game", "Vẽ bản đồ"],
        answer: "Dịch ngôn ngữ"
    },
    {
        question: "Cần làm gì để bảo vệ thiết bị khỏi virus?",
        options: ["Tắt mạng", "Cài phần mềm diệt virus", "Không dùng thiết bị", "Tăng độ sáng màn hình"],
        answer: "Cài phần mềm diệt virus"
    },
    {
        question: "Chia sẻ thông tin sai sự thật trên mạng là:",
        options: ["Được phép", "Không bị sao cả", "Hành vi vi phạm", "Cách kiếm lượt xem"],
        answer: "Hành vi vi phạm"
    },
    {
        question: "Các thiết bị thông minh có thể kết nối với nhau qua:",
        options: ["Internet", "Giấy viết", "Âm thanh", "Mực in"],
        answer: "Internet"
    },
    {
        question: "Tài khoản mạng xã hội nên có:",
        options: ["Thông tin thật", "Ảnh người nổi tiếng", "Không cần thông tin", "Mật khẩu yếu"],
        answer: "Thông tin thật"
    },
    {
        question: "Để nhận tiền trợ cấp online, người dân cần có:",
        options: ["CMND giấy", "Giấy xác nhận viết tay", "Tài khoản ngân hàng hoặc ví điện tử", "Sổ hộ khẩu"],
        answer: "Tài khoản ngân hàng hoặc ví điện tử"
    },
    {
        question: "Mạng xã hội có thể gây hại nếu:",
        options: ["Sử dụng hợp lý", "Sử dụng quá nhiều và thiếu kiểm soát", "Dùng để học tập", "Dùng để chia sẻ thông tin chính thống"],
        answer: "Sử dụng quá nhiều và thiếu kiểm soát"
    },
    {
        question: "Hình thức tấn công phổ biến qua mạng là:",
        options: ["Phishing (giả mạo để đánh cắp thông tin)", "Hút bụi", "Gọi điện thoại", "Chơi game"],
        answer: "Phishing (giả mạo để đánh cắp thông tin)"
    },
    {
        question: "Ứng dụng Zalo có thể dùng để:",
        options: ["Nấu ăn", "Mua đất", "Nhắn tin, gọi điện, gửi tài liệu", "Viết sách"],
        answer: "Nhắn tin, gọi điện, gửi tài liệu"
    },
    {
        question: "Muốn học trực tuyến, bạn cần:",
        options: ["Tivi", "Bảng trắng", "Điện thoại hoặc máy tính có Internet", "Giấy viết"],
        answer: "Điện thoại hoặc máy tính có Internet"
    },
    {
        question: "Đăng nhập tài khoản ở nơi công cộng nên:",
        options: ["Không cần đăng xuất", "Lưu mật khẩu", "Đăng xuất sau khi sử dụng", "Giao máy cho người khác"],
        answer: "Đăng xuất sau khi sử dụng"
    },
    {
        question: "Để đảm bảo an toàn khi dùng mạng xã hội, nên:",
        options: ["Tin mọi thông tin", "Không kiểm tra nguồn", "Chỉ chia sẻ thông tin từ nguồn uy tín", "Đăng bất kỳ gì mình muốn"],
        answer: "Chỉ chia sẻ thông tin từ nguồn uy tín"
    },
    {
        question: "Mục đích của mã OTP là gì?",
        options: ["Làm đẹp giao diện", "Mã dùng 1 lần để xác minh", "Đổi hình nền", "Mở khóa wifi"],
        answer: "Mã dùng 1 lần để xác minh"
    },
    {
        question: "Đâu là ví điện tử phổ biến ở Việt Nam?",
        options: ["TikTok", "Shopee", "MoMo", "Excel"],
        answer: "MoMo"
    },
    {
        question: "Đăng nhập vào tài khoản ngân hàng điện tử nên dùng gì?",
        options: ["Tên người yêu", "Mật khẩu đơn giản", "Mật khẩu mạnh và mã OTP", "Chia sẻ cho người thân"],
        answer: "Mật khẩu mạnh và mã OTP"
    },
    {
        question: "“Tấn công mạng” là:",
        options: ["Chơi game trực tuyến", "Học trực tuyến", "Hành vi xâm nhập, phá hoại qua Internet", "Gửi email bình thường"],
        answer: "Hành vi xâm nhập, phá hoại qua Internet"
    },
    {
        question: "Ứng dụng nào hỗ trợ định vị và chỉ đường?",
        options: ["Excel", "Google Maps", "Facebook", "Zalo"],
        answer: "Google Maps"
    },
    {
        question: "Zalo là ứng dụng của nước nào phát triển?",
        options: ["Nhật Bản", "Mỹ", "Việt Nam", "Hàn Quốc"],
        answer: "Việt Nam"
    },
    {
        question: "Tại sao không nên chia sẻ mật khẩu?",
        options: ["Mất quyền kiểm soát tài khoản", "Giúp người khác dễ dùng", "Không sao cả", "Đỡ mất công nhớ"],
        answer: "Mất quyền kiểm soát tài khoản"
    },
    {
        question: "Ứng dụng nào giúp chỉnh sửa văn bản?",
        options: ["Word", "TikTok", "YouTube", "Paint"],
        answer: "Word"
    },
    {
        question: "Các thiết bị nào sau đây được gọi là thiết bị đầu vào?",
        options: ["Loa", "Bàn phím, chuột", "Màn hình", "Máy in"],
        answer: "Bàn phím, chuột"
    },
    {
        question: "Email rác thường chứa:",
        options: ["Lời mời lừa đảo, quảng cáo", "Tin tức chính thống", "Tài liệu học tập", "Bài tập về nhà"],
        answer: "Lời mời lừa đảo, quảng cáo"
    },
    {
        question: "Hành vi nào là vi phạm đạo đức trên mạng?",
        options: ["Chia sẻ tin đúng", "Giúp đỡ cộng đồng", "Bình luận xúc phạm, phân biệt", "Đọc tin tức"],
        answer: "Bình luận xúc phạm, phân biệt"
    },
    {
        question: "Để xem video hướng dẫn học tập, bạn nên vào đâu?",
        options: ["Google Maps", "Excel", "YouTube", "Zing MP3"],
        answer: "YouTube"
    },
    {
        question: "Khi tài khoản mạng xã hội bị mất quyền truy cập, bạn nên:",
        options: ["Bỏ qua", "Tạo tài khoản mới", "Báo cáo vi phạm và lấy lại qua email", "Nhờ người khác lấy giùm"],
        answer: "Báo cáo vi phạm và lấy lại qua email"
    },
    {
        question: "Ứng dụng nào sau đây giúp họp, học trực tuyến?",
        options: ["Zoom", "Paint", "TikTok", "CapCut"],
        answer: "Zoom"
    },
    {
        question: "“Tin nhắn rác” là:",
        options: ["Tin quan trọng", "Tin từ bạn bè", "Tin lặp lại, quảng cáo không mong muốn", "Tin ngân hàng"],
        answer: "Tin lặp lại, quảng cáo không mong muốn"
    },
    {
        question: "Để kiểm tra độ tin cậy của thông tin, bạn nên:",
        options: ["Đọc nhiều nguồn uy tín", "Tin vào cảm giác", "Hỏi bạn bè", "Xem lượt thích"],
        answer: "Đọc nhiều nguồn uy tín"
    },
    {
        question: "Lợi ích của công nghệ số với người dân là:",
        options: ["Kết nối, học tập, mua sắm tiện lợi", "Tăng chi phí", "Tăng thời gian chờ đợi", "Không có lợi gì"],
        answer: "Kết nối, học tập, mua sắm tiện lợi"
    },
    {
        question: "Để tránh bị lừa đảo qua mạng, bạn cần:",
        options: ["Không cung cấp thông tin cá nhân", "Đọc kỹ các điều khoản dịch vụ", "Tin tưởng vào mọi lời mời", "Cung cấp tài khoản ngân hàng khi được yêu cầu"],
        answer: "Không cung cấp thông tin cá nhân"
    },
    {
        question: "Phần mềm diệt virus giúp bảo vệ thiết bị khỏi:",
        options: ["Nhạc nền", "Virus, phần mềm độc hại", "Video", "Đồ họa"],
        answer: "Virus, phần mềm độc hại"
    },
    {
        question: "Để tăng hiệu suất làm việc trên máy tính, bạn cần:",
        options: ["Dùng nhiều ứng dụng cùng lúc", "Thường xuyên cập nhật phần mềm", "Dùng phần mềm lạ", "Tắt tất cả các ứng dụng"],
        answer: "Thường xuyên cập nhật phần mềm"
    },
    {
        question: "Những thiết bị nào dưới đây không cần kết nối Internet?",
        options: ["Máy tính", "Máy in", "Điện thoại thông minh", "Laptop"],
        answer: "Máy in"
    },
    {
        question: "Cách nào để đảm bảo sự riêng tư trên Internet?",
        options: ["Sử dụng mật khẩu mạnh", "Dùng thông tin thật hết mức", "Chia sẻ mọi thông tin cá nhân", "Mở tất cả các liên kết"],
        answer: "Sử dụng mật khẩu mạnh"
    },
    {
        question: "Các dịch vụ ngân hàng điện tử cho phép người dùng làm gì?",
        options: ["Gửi tiền trực tuyến", "Đọc tin tức", "Chơi game", "Xem video"],
        answer: "Gửi tiền trực tuyến"
    },
    {
        question: "Điều gì là nguy hiểm khi sử dụng Wi-Fi công cộng?",
        options: ["Wi-Fi miễn phí", "Mất kết nối nhanh", "Nguy cơ bị hack, đánh cắp thông tin", "Tín hiệu mạnh"],
        answer: "Nguy cơ bị hack, đánh cắp thông tin"
    },
    {
        question: "Kết nối Bluetooth được sử dụng để:",
        options: ["Truyền tải dữ liệu qua mạng di động", "Kết nối các thiết bị gần nhau mà không cần dây", "Kết nối với điện thoại cố định", "Dùng để truyền hình ảnh từ xa"],
        answer: "Kết nối các thiết bị gần nhau mà không cần dây"
    },
    {
        question: "Bạn cần sử dụng ứng dụng nào để gọi video trực tiếp với người khác?",
        options: ["Facebook", "YouTube", "Google Meet", "Word"],
        answer: "Google Meet"
    },
    {
        question: "Bạn có thể mua hàng trực tuyến ở đâu?",
        options: ["Các website bán hàng", "Chỉ qua cửa hàng vật lý", "Qua quảng cáo trên TV", "Chỉ trên điện thoại"],
        answer: "Các website bán hàng"
    },
    {
        question: "Các trò chơi trực tuyến có thể gây ra tác hại gì?",
        options: ["Giúp nâng cao kỹ năng giao tiếp", "Lãng phí thời gian nếu chơi quá nhiều", "Không ảnh hưởng gì", "Tăng cường trí nhớ"],
        answer: "Lãng phí thời gian nếu chơi quá nhiều"
    },
    {
        question: "Dịch vụ “Cloud storage” là gì?",
        options: ["Lưu trữ dữ liệu trên đám mây, không cần thiết thiết bị vật lý", "Lưu trữ dữ liệu trên ổ cứng của bạn", "Chỉ lưu trữ dữ liệu âm thanh", "Lưu trữ video trực tiếp"],
        answer: "Lưu trữ dữ liệu trên đám mây, không cần thiết thiết bị vật lý"
    },
    {
        question: "Để chia sẻ hình ảnh với bạn bè qua mạng, bạn có thể dùng ứng dụng nào?",
        options: ["Google Photos", "Zalo", "Instagram", "Tất cả các lựa chọn trên"],
        answer: "Tất cả các lựa chọn trên"
    },
    {
        question: "Đâu là nguyên tắc quan trọng khi sử dụng mạng xã hội?",
        options: ["Đăng mọi thứ về mình", "Bảo vệ quyền riêng tư của bản thân", "Chia sẻ mọi thông tin tài chính", "Đọc tất cả thông tin từ một nguồn"],
        answer: "Bảo vệ quyền riêng tư của bản thân"
    },
    {
        question: "Hành vi nào sau đây là vi phạm khi sử dụng Internet?",
        options: ["Mua hàng trực tuyến", "Cung cấp thông tin cá nhân cho người lạ", "Tìm kiếm thông tin giáo dục", "Chia sẻ thông tin với bạn bè"],
        answer: "Cung cấp thông tin cá nhân cho người lạ"
    },
    {
        question: "Ví dụ nào sau đây là sử dụng Internet an toàn?",
        options: ["Đăng nhập tài khoản ngân hàng trên thiết bị công cộng", "Kiểm tra email từ nguồn không rõ", "Đảm bảo mật khẩu mạnh và không chia sẻ", "Dùng ứng dụng không rõ nguồn gốc"],
        answer: "Đảm bảo mật khẩu mạnh và không chia sẻ"
    },
    {
        question: "Những yếu tố nào giúp tạo mật khẩu an toàn?",
        options: ["Chỉ dùng ngày sinh", "Dùng tên người thân", "Kết hợp chữ, số, ký tự đặc biệt", "Đặt mật khẩu dễ nhớ"],
        answer: "Kết hợp chữ, số, ký tự đặc biệt"
    },
    {
        question: "Tạo tài khoản email cần cung cấp thông tin gì?",
        options: ["Tên người dùng và mật khẩu", "Địa chỉ nhà", "Số điện thoại của bạn bè", "Địa chỉ ngân hàng"],
        answer: "Tên người dùng và mật khẩu"
    },
    {
        question: "Tác hại của việc sử dụng mật khẩu yếu là gì?",
        options: ["Không thể đăng nhập vào tài khoản", "Dễ bị hack tài khoản", "Giúp tài khoản dễ nhớ hơn", "Không ảnh hưởng gì"],
        answer: "Dễ bị hack tài khoản"
    },
    {
        question: "Phần mềm chống virus giúp bảo vệ thiết bị khỏi:",
        options: ["Nhạc nền", "Virus, phần mềm độc hại", "Video", "Đồ họa"],
        answer: "Virus, phần mềm độc hại"
    },
    {
        question: "Khi cài đặt phần mềm trên máy tính, bạn cần chú ý điều gì?",
        options: ["Bỏ qua yêu cầu của phần mềm", "Tải phần mềm từ nguồn uy tín", "Cài phần mềm từ bất kỳ website nào", "Tắt tất cả các phần mềm diệt virus"],
        answer: "Tải phần mềm từ nguồn uy tín"
    },
    {
        question: "Các website bán hàng trực tuyến thường yêu cầu thông tin gì?",
        options: ["Chỉ địa chỉ email", "Thông tin thẻ tín dụng và địa chỉ giao hàng", "Chỉ cần tên người mua", "Thông tin tài khoản mạng xã hội"],
        answer: "Thông tin thẻ tín dụng và địa chỉ giao hàng"
    },
    {
        question: "Cần tránh làm gì khi sử dụng dịch vụ ngân hàng điện tử?",
        options: ["Chỉ truy cập qua mạng Wi-Fi bảo mật", "Cung cấp mật khẩu cho người khác", "Kiểm tra các giao dịch ngay", "Lưu mật khẩu trên máy tính"],
        answer: "Cung cấp mật khẩu cho người khác"
    },
    {
        question: "Một trong những mối nguy hiểm trên Internet là:",
        options: ["Gửi email cho bạn bè", "Tải phần mềm từ nguồn không rõ", "Xem video học trực tuyến", "Đọc sách điện tử"],
        answer: "Tải phần mềm từ nguồn không rõ"
    },
    {
        question: "Một số phần mềm tạo sự tiện lợi trong việc quản lý tài chính cá nhân là:",
        options: ["Excel, Google Sheets", "Word, PowerPoint", "Tất cả các phần mềm đồ họa", "Trình duyệt web"],
        answer: "Excel, Google Sheets"
    },
    {
        question: "Để sử dụng Google Drive, bạn cần có:",
        options: ["Tài khoản Google", "Phần mềm độc hại", "Tài khoản ngân hàng", "Máy tính bàn"],
        answer: "Tài khoản Google"
    },
    {
        question: "Thông tin trên mạng có thể sai sự thật nếu:",
        options: ["Được đăng từ một website uy tín", "Chỉ là tin tức mới cập nhật", "Được đăng mà không kiểm chứng", "Được chia sẻ từ người thân"],
        answer: "Được đăng mà không kiểm chứng"
    },
    {
        question: "Chia sẻ tài liệu công việc qua mạng cần chú ý điều gì?",
        options: ["Chia sẻ tất cả các tài liệu với bạn bè", "Đảm bảo tài liệu không chứa thông tin nhạy cảm", "Đảm bảo tài liệu có độ bảo mật thấp", "Không cần kiểm tra trước khi chia sẻ"],
        answer: "Đảm bảo tài liệu không chứa thông tin nhạy cảm"
    },
    {
        question: "Để giữ an toàn khi mua hàng trực tuyến, bạn nên:",
        options: ["Mua hàng từ những website không rõ nguồn gốc", "Kiểm tra độ bảo mật của website", "Cung cấp thông tin thẻ tín dụng cho người bán", "Không kiểm tra thông tin người bán"],
        answer: "Kiểm tra độ bảo mật của website"
    },
    {
        question: "Điều gì nên tránh khi sử dụng mạng xã hội?",
        options: ["Đọc thông tin giáo dục", "Chia sẻ thông tin cá nhân quá mức", "Đăng bài viết sáng tạo", "Chia sẻ thông tin từ nguồn uy tín"],
        answer: "Chia sẻ thông tin cá nhân quá mức"
    },
    {
        question: "Để kiểm soát thời gian sử dụng điện thoại, bạn nên làm gì?",
        options: ["Dùng ứng dụng theo dõi thời gian sử dụng", "Không cần kiểm soát", "Chơi game suốt ngày", "Đọc báo liên tục"],
        answer: "Dùng ứng dụng theo dõi thời gian sử dụng"
    },
    {
        question: "Một trong những lợi ích của việc sử dụng công nghệ số là gì?",
        options: ["Giảm hiệu quả công việc", "Tiết kiệm thời gian và công sức", "Làm việc ít hiệu quả hơn", "Không giúp ích gì"],
        answer: "Tiết kiệm thời gian và công sức"
    }
];