// Đồng dao, ca dao, hát ru và dân ca (văn hóa dân gian — đọc/hát tự do),
// cùng danh sách bài hát thiếu nhi nổi tiếng (chỉ ghi tên, tác giả và gợi ý động tác, mở YouTube để nghe).
window.DATA_SONGS = [
{
  id: "m01", ages: ["2-3", "4-6"], title: "Dung dăng dung dẻ", kind: "Đồng dao", tags: ["vận động", "đi dạo", "buổi sáng"],
  content: `Dung dăng dung dẻ
Dắt trẻ đi chơi
Đến ngõ nhà trời
Lạy cậu lạy mợ
Cho cháu về quê
Cho dê đi học
Cho cóc ở nhà
Cho gà bới bếp
Xì xà xì xụp
Ngồi thụp xuống đây!`,
  howto: "Nắm tay bé, vung tay đung đưa và bước theo nhịp. Đến câu cuối cả hai cùng ngồi thụp xuống. Bé hiếu động sẽ thích lặp lại cả chục lần."
},
{
  id: "m02", ages: ["2-3", "4-6"], title: "Chi chi chành chành", kind: "Đồng dao", tags: ["trò chơi tay", "phản xạ"],
  content: `Chi chi chành chành
Cái đanh thổi lửa
Con ngựa chết trương
Ba vương ngũ đế
Chấp chế đi tìm
Ù à ù ập
Ập!`,
  howto: "Ba mẹ xòe lòng bàn tay, bé đặt ngón trỏ vào giữa. Đến chữ \"Ập!\" ba mẹ nắm tay lại, bé phải rút ngón tay ra thật nhanh. Rèn phản xạ rất tốt."
},
{
  id: "m03", ages: ["2-3", "4-6"], title: "Nu na nu nống", kind: "Đồng dao", tags: ["trò chơi chân", "ngồi yên"],
  content: `Nu na nu nống
Cái cống nằm trong
Cái ong nằm ngoài
Củ khoai chấm mật
Phật ngồi phật khóc
Con cóc nhảy ra
Con gà ú ụ
Nhà mụ thổi xôi
Nhà tôi nấu chè
Tay xòe chân rụt!`,
  howto: "Ngồi duỗi chân cạnh nhau, ba mẹ vỗ nhẹ lần lượt từng bàn chân theo nhịp. Chân nào trúng chữ cuối thì co lại. Hợp lúc cần bé ngồi yên vài phút."
},
{
  id: "m04", ages: ["2-3", "4-6"], title: "Kéo cưa lừa xẻ", kind: "Đồng dao", tags: ["vận động", "gắn kết"],
  content: `Kéo cưa lừa xẻ
Ông thợ nào khỏe
Về ăn cơm vua
Ông thợ nào thua
Về bú tí mẹ.`,
  howto: "Ngồi đối diện, nắm hai tay nhau, kéo qua kéo lại như cưa gỗ. Bé thích ngả người ra sau thật xa — giữ tay bé chắc chắn."
},
{
  id: "m05", ages: ["2-3", "4-6"], title: "Tập tầm vông", kind: "Đồng dao", tags: ["trò chơi đoán", "tư duy"],
  content: `Tập tầm vông
Tay không tay có
Tập tầm vó
Tay có tay không
Tay nào có, tay nào không?
Tay nào không, tay nào có?`,
  howto: "Giấu một đồ vật nhỏ (nắp chai, viên bi to — tránh vật bé có thể nuốt) trong một tay, đưa hai nắm tay ra cho bé đoán. Sau đó đổi vai để bé giấu."
},
{
  id: "m06", ages: ["2-3", "4-6"], title: "Con vỏi con voi", kind: "Đồng dao", tags: ["con vật", "vận động", "cơ thể"],
  content: `Con vỏi con voi
Cái vòi đi trước
Hai chân trước đi trước
Hai chân sau đi sau
Còn cái đuôi đi sau rốt
Tôi xin kể nốt
Cái chuyện con voi.`,
  howto: "Bé bò bốn chân làm voi, một tay đưa ra làm vòi. Ba mẹ đọc chậm, bé di chuyển đúng bộ phận được nhắc tới."
},
{
  id: "m07", ages: ["2-3", "4-6"], title: "Con mèo mà trèo cây cau", kind: "Đồng dao", tags: ["con vật", "hài hước"],
  content: `Con mèo mà trèo cây cau
Hỏi thăm chú chuột đi đâu vắng nhà
Chú chuột đi chợ đường xa
Mua mắm mua muối giỗ cha chú mèo.`,
  howto: "Ngón tay làm mèo \"trèo\" từ chân lên tới đầu bé. Đến câu cuối giả giọng chuột chít chít rồi cù nhẹ."
},
{
  id: "m08", ages: ["2-3", "4-6"], title: "Con kiến mà leo cành đa", kind: "Đồng dao", tags: ["trò chơi tay", "cù lét"],
  content: `Con kiến mà leo cành đa
Leo phải cành cụt, leo ra leo vào
Con kiến mà leo cành đào
Leo phải cành cụt, leo vào leo ra.`,
  howto: "Hai ngón tay làm kiến bò dọc cánh tay bé, \"leo ra leo vào\" thì bò lên xuống. Kết thúc bằng cù nhẹ ở nách."
},
{
  id: "m09", ages: ["2-3", "4-6"], title: "Lúa ngô là cô đậu nành", kind: "Đồng dao", tags: ["rau củ", "vòng lặp"],
  content: `Lúa ngô là cô đậu nành
Đậu nành là anh dưa chuột
Dưa chuột là ruột dưa gang
Dưa gang là nàng dưa hấu
Dưa hấu là cậu lúa ngô
Lúa ngô là cô đậu nành…`,
  howto: "Bài đọc vòng tròn mãi không hết — vừa đi vòng tròn quanh phòng vừa đọc. Khi đi chợ, chỉ cho bé thấy ngô, dưa chuột, dưa hấu thật."
},
{
  id: "m10", ages: ["2-3", "4-6"], title: "Cái Bống là cái bống bang", kind: "Đồng dao", tags: ["giúp đỡ", "yêu mẹ"],
  content: `Cái Bống là cái bống bang
Khéo sảy khéo sàng cho mẹ nấu cơm
Mẹ Bống đi chợ đường trơn
Bống ra gánh đỡ chạy cơn mưa ròng.`,
  howto: "Giả làm động tác sảy gạo (lắc rổ), gánh hàng. Sau đó rủ bé giúp một việc nhỏ trong bếp: rửa rau, lấy thìa."
},
{
  id: "m11", ages: ["2-3", "4-6"], title: "Bà còng đi chợ trời mưa", kind: "Đồng dao", tags: ["tử tế", "trung thực"],
  content: `Bà còng đi chợ trời mưa
Cái tôm cái tép đi đưa bà còng
Đưa bà đến quãng đường cong
Đưa bà vào tận ngõ trong nhà bà
Tiền bà trong túi rơi ra
Tép tôm nhặt được trả bà mua rau.`,
  howto: "Ba mẹ đi khom lưng làm bà còng, bé làm tôm tép dắt tay. Nói với bé: nhặt được đồ của người khác thì trả lại."
},
{
  id: "m12", ages: ["2-3", "4-6"], title: "Con gà cục tác lá chanh", kind: "Đồng dao", tags: ["con vật", "gia vị", "bếp"],
  content: `Con gà cục tác lá chanh
Con lợn ủn ỉn mua hành cho tôi
Con chó khóc đứng khóc ngồi
Bà ơi đi chợ mua tôi đồng riềng.`,
  howto: "Giả tiếng gà, lợn, chó. Nếu trong bếp có lá chanh, hành, riềng thì cho bé ngửi — học mùi rất thú vị."
},
{
  id: "m13", ages: ["2-3", "4-6"], title: "Một ông sao sáng", kind: "Đồng dao", tags: ["đếm số", "buổi tối"],
  content: `Một ông sao sáng
Hai ông sáng sao
Ba ông sao sáng
Bốn ông sáng sao
Năm ông sao sáng
Sáu ông sáng sao
…
Tôi đố anh nào
Một hơi nói hết!`,
  howto: "Giơ ngón tay đếm theo từng câu. Buổi tối mở cửa sổ cùng bé tìm sao thật. Với bé 2 tuổi, đếm đến 5 là đủ."
},
{
  id: "m14", ages: ["2-3", "4-6", "7-10"], title: "Thằng Bờm", kind: "Đồng dao", tags: ["hài hước", "vần điệu"],
  content: `Thằng Bờm có cái quạt mo
Phú ông xin đổi ba bò chín trâu
Bờm rằng: Bờm chẳng lấy trâu
Phú ông xin đổi một xâu cá mè
Bờm rằng: Bờm chẳng lấy mè
Phú ông xin đổi một bè gỗ lim
Bờm rằng: Bờm chẳng lấy lim
Phú ông xin đổi đôi chim đồi mồi
Bờm rằng: Bờm chẳng lấy mồi
Phú ông xin đổi nắm xôi, Bờm cười!`,
  howto: "Bé lắc đầu mỗi câu \"Bờm chẳng lấy\" và cười to ở câu cuối. Dùng cái quạt thật để diễn."
},
{
  id: "m15", ages: ["2-3", "4-6"], title: "Rồng rắn lên mây", kind: "Đồng dao", tags: ["trò chơi nhóm", "vận động"],
  content: `Rồng rắn lên mây
Có cây lúc lắc
Có nhà điểm binh
Hỏi thăm thầy thuốc
Có nhà hay không?`,
  howto: "Cả nhà xếp hàng ôm eo nhau làm rồng rắn, đi uốn lượn quanh nhà. Một người làm \"thầy thuốc\" đứng chờ. Chơi cuối tuần khi có ông bà, anh chị."
},
{
  id: "m16", ages: ["2-3", "4-6"], title: "Ông giẳng ông giăng", kind: "Đồng dao", tags: ["trăng", "buổi tối"],
  content: `Ông giẳng ông giăng
Xuống chơi với tôi
Có bầu có bạn
Có ván cơm xôi
Có nồi cơm nếp
Có nệp bánh chưng
…
Có trâu cày ruộng
Có muống thả ao
Ông sao trên trời.`,
  howto: "Đọc khi ngắm trăng buổi tối. Chỉ lên trăng và hỏi bé: \"Ông trăng tròn hay khuyết?\""
},
{
  id: "m17", ages: ["2-3", "4-6"], title: "Thằng Cuội ngồi gốc cây đa", kind: "Đồng dao", tags: ["trăng", "trung thu"],
  content: `Thằng Cuội ngồi gốc cây đa
Để trâu ăn lúa gọi cha ời ời
Cha còn cắt cỏ trên trời
Mẹ còn cưỡi ngựa đi mời quan viên
Ông thì cầm bút cầm nghiên
Ông thì cầm tiền đi chuộc lá đa.`,
  howto: "Hợp dịp Trung thu. Kể thêm cho bé chú Cuội ngồi trên cung trăng, rồi cùng làm đèn lồng giấy."
},
{
  id: "m18", ages: ["2-3", "4-6"], title: "Bắc kim thang", kind: "Dân ca Nam Bộ", tags: ["hát", "vui nhộn", "con vật"],
  content: `Bắc kim thang cà lang bí rợ
Cột qua kèo là kèo qua cột
Chú bán dầu qua cầu mà té
Chú bán ếch ở lại làm chi
Con le le đánh trống thổi kèn
Con bìm bịp thổi tò te tí te.`,
  howto: "Giai điệu rất vui. Đến câu \"đánh trống\" thì gõ nồi/xoong, \"thổi tò te\" thì làm kèn bằng tay. Mở YouTube \"Bắc kim thang\" để nghe giai điệu."
},
{
  id: "m19", ages: ["2-3"], title: "Cái ngủ mày ngủ cho lâu", kind: "Hát ru", tags: ["ru ngủ", "buổi tối"],
  content: `Ầu ơ…
Cái ngủ mày ngủ cho lâu
Mẹ mày đi cấy đồng sâu chưa về
Bắt được con giếc con trê
Cầm cổ lôi về cho cái ngủ ăn.
Ầu ơ…`,
  howto: "Hát thật chậm, kéo dài chữ \"Ầu ơ\", vỗ nhẹ lưng bé theo nhịp. Không cần hát hay — giọng ba mẹ là âm thanh bé yêu nhất."
},
{
  id: "m20", ages: ["2-3"], title: "Gió mùa thu mẹ ru con ngủ", kind: "Hát ru", tags: ["ru ngủ", "buổi tối", "yêu thương"],
  content: `Ầu ơ…
Gió mùa thu mẹ ru con ngủ
Năm canh chầy thức đủ vừa năm.
Ầu ơ…
Ru con con ngủ cho ngoan
Để mẹ đi chợ mua mang con về.
Ầu ơ…`,
  howto: "Ôm bé, đung đưa nhẹ. Có thể thay lời bằng tên bé: \"Ru [tên bé] [tên bé] ngủ cho ngoan…\""
},
{
  id: "m21", ages: ["2-3", "4-6", "7-10"], title: "Công cha như núi Thái Sơn", kind: "Ca dao", tags: ["gia đình", "biết ơn"],
  content: `Công cha như núi Thái Sơn
Nghĩa mẹ như nước trong nguồn chảy ra
Một lòng thờ mẹ kính cha
Cho tròn chữ hiếu mới là đạo con.`,
  howto: "Bé chưa hiểu hết nghĩa, nhưng nghe nhịp lục bát rất tốt cho ngôn ngữ. Giải thích đơn giản: \"Ba thương con cao như núi, mẹ thương con nhiều như nước.\""
},
{
  id: "m22", ages: ["2-3", "4-6", "7-10"], title: "Bầu ơi thương lấy bí cùng", kind: "Ca dao", tags: ["đoàn kết", "anh em"],
  content: `Bầu ơi thương lấy bí cùng
Tuy rằng khác giống nhưng chung một giàn.

Nhiễu điều phủ lấy giá gương
Người trong một nước phải thương nhau cùng.`,
  howto: "Cho bé xem quả bầu và quả bí thật. Nói: \"Con và bạn khác nhau nhưng mình vẫn thương nhau.\""
},

// --- Bài hát thiếu nhi nổi tiếng: chỉ ghi tên & gợi ý; mở YouTube để nghe ---
{
  id: "m30", ages: ["2-3", "4-6"], title: "Cả nhà thương nhau", kind: "Bài hát thiếu nhi", author: "Phan Văn Minh", tags: ["gia đình", "hát", "vỗ tay"],
  content: "Bài hát về ba, mẹ và con thương yêu nhau — giai điệu ngắn, dễ thuộc, hợp với bé 2 tuổi.",
  howto: "Chỉ vào ba, mẹ, con khi hát tới từng người. Kết thúc bằng một cái ôm cả nhà.", youtube: "Cả nhà thương nhau Phan Văn Minh"
},
{
  id: "m31", ages: ["2-3", "4-6"], title: "Rửa mặt như mèo", kind: "Bài hát thiếu nhi", author: "Hàn Ngọc Bích", tags: ["vệ sinh", "con vật", "hát"],
  content: "Bài hát vui về chú mèo lười rửa mặt nên bị đau mắt — dạy bé rửa mặt sạch sẽ.",
  howto: "Hát lúc rửa mặt buổi sáng. Bé làm động tác mèo rửa mặt bằng tay, rồi rửa mặt thật bằng khăn.", youtube: "Rửa mặt như mèo Hàn Ngọc Bích"
},
{
  id: "m32", ages: ["2-3", "4-6"], title: "Chú ếch con", kind: "Bài hát thiếu nhi", author: "Phan Nhân", tags: ["con vật", "vận động", "hát"],
  content: "Bài hát về chú ếch con học bài, kêu ộp ộp — vui tươi, nhiều tiếng kêu.",
  howto: "Ngồi xổm nhảy như ếch mỗi lần có tiếng \"ộp\". Rất hợp bé hiếu động xả năng lượng buổi sáng.", youtube: "Chú ếch con Phan Nhân"
},
{
  id: "m33", ages: ["2-3", "4-6"], title: "Một con vịt", kind: "Bài hát thiếu nhi", author: "Kim Duyên", tags: ["con vật", "cơ thể", "hát"],
  content: "Bài hát quen thuộc về chú vịt có hai cái cánh, kêu cạp cạp — giúp bé học các bộ phận cơ thể con vật.",
  howto: "Vẫy hai tay làm cánh, chụm tay làm mỏ kêu \"cạp cạp\". Hát đủ một lượt khoảng 20 giây — dùng làm bài hát khi rửa tay.", youtube: "Một con vịt Kim Duyên"
},
{
  id: "m34", ages: ["2-3", "4-6"], title: "Ba ngọn nến lung linh", kind: "Bài hát thiếu nhi", author: "Ngọc Lễ", tags: ["gia đình", "buổi tối", "hát"],
  content: "Bài hát dịu dàng so sánh ba, mẹ, con như ba ngọn nến thắp sáng một mái nhà.",
  howto: "Giơ ba ngón tay làm ba ngọn nến. Hợp hát buổi tối trước khi ngủ.", youtube: "Ba ngọn nến lung linh Ngọc Lễ"
},
{
  id: "m35", ages: ["2-3", "4-6"], title: "Cháu yêu bà", kind: "Bài hát thiếu nhi", author: "Xuân Giao", tags: ["ông bà", "yêu thương", "hát"],
  content: "Bài hát ngắn về tình cảm của cháu dành cho bà.",
  howto: "Hát rồi gọi video cho bà, để bé hát tặng bà (dù chỉ vài chữ).", youtube: "Cháu yêu bà Xuân Giao"
},
{
  id: "m36", ages: ["2-3", "4-6"], title: "Bàn tay mẹ", kind: "Bài hát thiếu nhi", author: "Bùi Đình Thảo", tags: ["yêu mẹ", "hát"],
  content: "Bài hát về đôi bàn tay mẹ chăm sóc con mỗi ngày.",
  howto: "Áp bàn tay bé vào tay mẹ, so xem tay ai to hơn. Kể cho bé nghe hôm nay tay mẹ đã làm gì cho con.", youtube: "Bàn tay mẹ Bùi Đình Thảo"
},
{
  id: "m37", ages: ["2-3", "4-6"], title: "Quả gì", kind: "Bài hát thiếu nhi", author: "Xanh Xanh", tags: ["trái cây", "đố vui", "hát"],
  content: "Bài hát đố vui về các loại quả — bé đoán tên quả qua đặc điểm.",
  howto: "Bày vài loại trái cây thật, hát đến quả nào thì bé chỉ quả đó. Sau đó cùng ăn trái cây.", youtube: "Quả gì Xanh Xanh"
},
{
  id: "m38", ages: ["2-3", "4-6"], title: "Đàn vịt con", kind: "Bài hát thiếu nhi", author: "Nhạc Hungary, lời Việt", tags: ["con vật", "vận động", "hát"],
  content: "Bài hát về đàn vịt con đi lạch bạch theo mẹ.",
  howto: "Cả nhà xếp hàng đi lạch bạch như đàn vịt, ba/mẹ làm vịt mẹ đi đầu.", youtube: "Đàn vịt con thiếu nhi"
}
];
