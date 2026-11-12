// Thơ ngắn cho bé 2–3 tuổi (sáng tác cho ứng dụng này — đọc, in, chia sẻ tự do).
// Thể thơ 4–5 chữ, vần dễ, gắn với thói quen hằng ngày. Đọc nhiều lần, bỏ lửng chữ cuối để bé tự điền.
window.DATA_POEMS = [
{
  id: "p01", ages: ["2-3"], title: "Chào buổi sáng", tags: ["buổi sáng", "thức dậy"],
  content: `Ông mặt trời thức dậy
Chiếu nắng vàng khắp nơi
Bé mở mắt ra rồi
Vươn vai cao, cao vút.

Chào ba một cái hôn
Chào mẹ một cái ôm
Ngày mới vui, vui lắm
Bé cười tươi chào ngày!`,
  howto: "Đọc khi bé vừa thức. Vươn vai cùng bé ở câu \"cao, cao vút\", rồi hôn, ôm thật."
},
{
  id: "p02", ages: ["2-3"], title: "Đánh răng", tags: ["đánh răng", "thói quen"],
  content: `Bàn chải xinh xinh
Kem thơm một chút
Chải lên, chải xuống
Chải trong, chải ngoài.

Súc miệng ọc ọc
Nhổ ra: phì phì!
Răng trắng tinh khôi
Bé cười: hi hi!`,
  howto: "Đọc từng câu theo đúng động tác đánh răng. Bỏ lửng \"hi …\" để bé cười nói tiếp."
},
{
  id: "p03", ages: ["2-3"], title: "Rửa tay", tags: ["rửa tay", "vệ sinh"],
  content: `Mở vòi nước chảy
Xà phòng xoa xoa
Bong bóng bay ra
Lòng tay, mu tay.

Từng ngón xoa đều
Vi khuẩn chạy đi
Lau khô tay nhé
Ăn cơm thôi nào!`,
  howto: "Đọc ở bồn rửa. Đọc 2 lần là đủ khoảng 20 giây rửa tay."
},
{
  id: "p04", ages: ["2-3"], title: "Bé ăn cơm", tags: ["ăn uống", "tự lập"],
  content: `Bát cơm thơm phức
Có cá, có rau
Bé cầm thìa nhé
Xúc nào, xúc mau.

Một thìa cho bé
Lớn nhanh, cao cao
Rơi đâu nhặt đó
Không sao, không sao!`,
  howto: "Khuyến khích bé tự xúc, chấp nhận rơi vãi. Không ép, không dọa — để bé tự quyết ăn bao nhiêu."
},
{
  id: "p05", ages: ["2-3"], title: "Cất đồ chơi", tags: ["dọn dẹp", "thói quen"],
  content: `Ô tô về bến
Gấu về giường êm
Bóng lăn về góc
Khối gỗ về hộp.

Đồ chơi ngủ rồi
Nhà gọn ghê chưa
Ai dọn đấy nhỉ?
À — bé đấy mà!`,
  howto: "Đọc khi dọn đồ chơi, mỗi câu cất một món. Câu cuối chỉ vào bé và khen."
},
{
  id: "p06", ages: ["2-3"], title: "Bé tắm", tags: ["tắm", "vệ sinh"],
  content: `Nước ấm ào ào
Bé vào chậu tắm
Kỳ cổ, kỳ tai
Kỳ tay, kỳ chân.

Té nước lách tách
Vịt nhựa bơi theo
Tắm xong thơm phức
Mẹ thơm cái nào!`,
  howto: "Gọi tên từng bộ phận khi kỳ cọ — bé học từ vựng về cơ thể."
},
{
  id: "p07", ages: ["2-3"], title: "Đi ngủ thôi", tags: ["đi ngủ", "buổi tối"],
  content: `Trăng lên cao rồi
Sao lấp lánh sáng
Gà đã vào chuồng
Chim đã về tổ.

Bé ôm gấu bông
Chăn đắp ấm êm
Mắt nhắm lại nhé
Ngủ ngon, bé yêu.`,
  howto: "Giọng nhỏ dần, chậm dần. Đọc như một nghi thức cuối cùng mỗi tối — cùng một bài nhiều đêm liền giúp bé dễ vào giấc."
},
{
  id: "p08", ages: ["2-3", "4-6"], title: "Xe ô tô", tags: ["xe cộ", "âm thanh"],
  content: `Ô tô màu đỏ
Chạy trên đường xa
Bim bim, bim bim
Tránh đường cho nha.

Gặp đèn đỏ: dừng
Đèn xanh: đi tiếp
Bé ngồi ghế sau
Thắt dây an toàn!`,
  howto: "Bé cầm vô lăng tưởng tượng. Dạy luật đơn giản: đỏ dừng, xanh đi. Nhắc an toàn khi đi xe."
},
{
  id: "p09", ages: ["2-3", "4-6"], title: "Mưa rơi", tags: ["thiên nhiên", "âm thanh"],
  content: `Tí tách, tí tách
Mưa rơi trên mái
Lộp độp, lộp độp
Mưa rơi trên lá.

Ếch kêu ộp ộp
Vịt bơi cạp cạp
Cây xanh uống nước
Cảm ơn mưa nhé!`,
  howto: "Làm tiếng mưa bằng ngón tay gõ lên bàn. Đọc khi trời mưa, cùng bé đứng nhìn qua cửa sổ."
},
{
  id: "p10", ages: ["2-3"], title: "Ba của con", tags: ["gia đình", "ba"],
  content: `Ba cao thật cao
Công con lên vai
Con nhìn thấy hết
Cây, nhà, mây bay.

Ba làm ngựa nhé
Con cưỡi lên lưng
Tay ba to lắm
Ôm con thật chặt.`,
  howto: "Ba đọc và làm đúng: công bé lên vai, làm ngựa cho bé cưỡi. Gắn kết ba – con rất tốt."
},
{
  id: "p11", ages: ["2-3"], title: "Mẹ ơi", tags: ["gia đình", "mẹ", "yêu thương"],
  content: `Mẹ ơi, mẹ ơi
Con thương mẹ lắm
Thương bằng trời cao
Thương bằng biển rộng.

Mẹ hôn má trái
Mẹ hôn má phải
Con hôn lại mẹ
Chụt, chụt, chụt nào!`,
  howto: "Dang tay thật rộng ở \"trời cao\", \"biển rộng\". Kết thúc bằng hôn qua lại."
},
{
  id: "p12", ages: ["2-3"], title: "Con gà trống", tags: ["con vật", "buổi sáng"],
  content: `Con gà trống nhỏ
Mào đỏ chót chót
Đuôi dài cong cong
Gáy vang: ò ó!

Gà mái cục tác
Gà con chíp chíp
Cả nhà gà con
Đi tìm thóc ăn.`,
  howto: "Bé làm mào gà bằng bàn tay đặt trên đầu, gáy \"ò ó o\". Chỉ gà trong sách tranh."
},
{
  id: "p13", ages: ["2-3", "4-6"], title: "Khi con giận", tags: ["cảm xúc", "tức giận", "thở"],
  content: `Khi con giận dữ
Bụng nóng như lửa
Con dậm chân nhé
Một, hai, ba nào.

Hít hoa thơm ngát
Thổi nến phù phù
Giận bay đi mất
Mẹ ôm con nào.`,
  howto: "Tập lúc bé đang vui để khi bé giận còn nhớ. Đọc chậm, làm theo: dậm chân, hít vào, thổi ra."
},
{
  id: "p14", ages: ["2-3", "4-6"], title: "Trăng tròn", tags: ["trăng", "buổi tối"],
  content: `Ông trăng tròn tròn
Như cái đĩa vàng
Treo trên trời cao
Soi sáng đường làng.

Bé vẫy tay chào
Ông trăng mỉm cười
Ông theo bé về
Đến tận nhà thôi.`,
  howto: "Đọc khi đi dạo buổi tối. Bé sẽ rất thích phát hiện \"ông trăng đi theo mình\"."
},
{
  id: "p15", ages: ["2-3"], title: "Bé đi bô", tags: ["đi vệ sinh", "tự lập"],
  content: `Buồn tè, buồn ị
Bé gọi mẹ ơi
Ngồi lên bô nhé
Xong rồi, xong rồi!

Kéo quần lên nào
Rửa tay sạch sẽ
Bé lớn thật rồi
Giỏi ghê, giỏi ghê!`,
  howto: "Đọc mỗi lần bé ngồi bô. Không ép bé ngồi lâu quá 3–5 phút."
},
{
  id: "p16", ages: ["2-3", "4-6"], title: "Đếm ngón tay", tags: ["đếm số", "cơ thể"],
  content: `Một ngón cái to
Hai ngón trỏ chỉ
Ba ngón giữa dài
Bốn ngón áp út
Năm ngón út xinh.

Năm ngón một tay
Hai tay mười ngón
Vỗ tay bốp bốp
Bé đếm giỏi chưa!`,
  howto: "Cầm từng ngón tay bé khi đọc. Cuối bài vỗ tay thật to."
},
{
  id: "p17", ages: ["2-3", "4-6"], title: "Cảm ơn", tags: ["lễ phép", "biết ơn"],
  content: `Bà cho quả chuối
Bé nói cảm ơn
Bạn cho mượn xe
Bé nói cảm ơn.

Lỡ va vào bạn
Bé nói xin lỗi
Lời hay ý đẹp
Ai cũng thương bé.`,
  howto: "Sau đó chơi đóng vai: ba mẹ đưa đồ, bé tập nói \"con cảm ơn\" khoanh tay."
},
{
  id: "p18", ages: ["2-3", "4-6"], title: "Thể dục buổi sáng", tags: ["vận động", "buổi sáng"],
  content: `Tay giơ lên cao
Tay dang ra ngang
Cúi xuống chạm chân
Đứng lên thật thẳng.

Nhảy như con thỏ
Bò như con mèo
Bay như con chim
Khỏe ơi là khỏe!`,
  howto: "Làm đúng từng động tác. Bài thể dục 2 phút rất hợp cho bé hiếu động mỗi sáng."
}
];
