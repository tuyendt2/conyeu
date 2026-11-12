// Kho truyện kể cho bé 2–3 tuổi.
// Truyện ngắn (2–5 phút), nhiều âm thanh, động tác để bé hiếu động có thể vừa nghe vừa "diễn".
window.DATA_STORIES = [
{
  id: "s01", ages: ["2-3", "4-6"], title: "Củ cải khổng lồ", tags: ["vận động", "đoàn kết", "buổi sáng"], duration: 3,
  lesson: "Cùng nhau góp sức thì việc khó mấy cũng làm được.",
  content: `Ông trồng một củ cải nhỏ xíu. Ông tưới nước: rào rào rào. Củ cải lớn lên, lớn lên… lớn ơi là lớn!

Ông nắm lá củ cải, kéo: "Hò dô ta! Hò dô ta!" — củ cải không lên.

Ông gọi bà. Bà ôm ông, ông nắm củ cải: "Hò dô ta! Hò dô ta!" — củ cải vẫn không lên.

Bà gọi cháu. Cháu ôm bà, bà ôm ông, ông nắm củ cải: "Hò dô ta!" — vẫn không lên.

Cháu gọi chó Mực: "Gâu gâu!" Chó Mực gọi mèo Mướp: "Meo meo!" Mèo Mướp gọi chuột Nhắt: "Chít chít!"

Chuột nhỏ xíu chạy tới, ôm mèo, mèo ôm chó, chó ôm cháu, cháu ôm bà, bà ôm ông, ông nắm củ cải…

"Một, hai, ba… HÒ DÔ TA!" — BỤP! Củ cải bật lên, cả nhà ngã lăn ra, cười khanh khách.

Tối đó cả nhà nấu canh củ cải, ai cũng được một bát to. Ngon ơi là ngon!`,
  howto: "Cho bé nắm tay ba/mẹ và cùng kéo mỗi lần hô \"Hò dô ta\". Đến chữ BỤP thì cả hai ngã nhẹ xuống nệm. Bé hiếu động sẽ đòi kể lại nhiều lần — cứ kể!",
  questions: ["Ai là người nhỏ nhất đến giúp?", "Con giả tiếng chó/mèo/chuột được không?", "Ở nhà con giúp ai việc gì?"]
},
{
  id: "s02", ages: ["2-3", "4-6"], title: "Ba chú heo con", tags: ["chăm chỉ", "âm thanh", "buổi tối"], duration: 5,
  lesson: "Làm việc cẩn thận, chăm chỉ sẽ giữ được mình an toàn.",
  content: `Có ba chú heo con: Heo Út, Heo Giữa và Heo Anh.

Heo Út muốn đi chơi nhanh, nên làm nhà bằng rơm: sột soạt, xong rồi!
Heo Giữa làm nhà bằng gỗ: cộc cộc cộc, xong rồi!
Heo Anh làm nhà bằng gạch: cạch… cạch… cạch… lâu lắm mới xong, nhưng rất chắc.

Một hôm Sói tới. Sói gõ cửa nhà rơm: "Cho ta vào!" — "Không cho!"
Sói hít một hơi thật sâu và thổi: PHÙÙÙ! Nhà rơm bay mất. Heo Út chạy sang nhà Heo Giữa.

Sói tới nhà gỗ: PHÙÙÙ… PHÙÙÙ! Nhà gỗ đổ. Hai chú heo chạy sang nhà Heo Anh.

Sói tới nhà gạch: PHÙÙÙ… PHÙÙÙ… PHÙÙÙ! Nhà gạch vẫn đứng yên. Sói thổi mệt quá, thở hổn hển rồi bỏ đi mất.

Ba anh em heo ôm nhau: "Lần sau mình cùng làm nhà gạch thật chắc nhé!" Rồi cả ba cùng ăn cơm, cùng đi ngủ, ấm áp và an toàn.`,
  howto: "Bé đóng vai Sói, thổi PHÙÙÙ thật mạnh (tập thở rất tốt). Ba mẹ làm ngôi nhà bằng gối để bé thổi \"đổ\". Kể chậm phần nhà gạch.",
  questions: ["Nhà nào chắc nhất?", "Con thổi mạnh như Sói được không?", "Nhà mình làm bằng gì?"]
},
{
  id: "s03", ages: ["2-3", "4-6"], title: "Rùa và Thỏ", tags: ["kiên trì", "vận động", "buổi sáng"], duration: 3,
  lesson: "Chậm mà chắc, cố gắng đến cùng sẽ thành công.",
  content: `Thỏ chạy rất nhanh: tung tăng, tung tăng! Rùa đi rất chậm: lạch bạch… lạch bạch…

Thỏ cười: "Rùa ơi, chạy thi không?" Rùa gật đầu: "Được thôi!"

"Một, hai, ba — chạy!" Thỏ vụt đi như gió. Rùa bò từng bước, từng bước.

Thỏ chạy xa rồi, quay lại không thấy Rùa đâu: "Ha, Rùa chậm quá. Mình ngủ một lát đã." Thỏ nằm dưới gốc cây, ngáy: khò… khò…

Rùa vẫn bò, không dừng lại: lạch bạch, lạch bạch. Bò qua gốc cây, bò qua bãi cỏ, bò tới vạch đích!

Thỏ tỉnh dậy, chạy thật nhanh — nhưng Rùa đã về trước rồi. Mọi người vỗ tay: "Hoan hô Rùa!"

Thỏ đỏ mặt: "Rùa giỏi quá. Mình xin lỗi vì đã chê bạn." Từ đó Thỏ và Rùa thành đôi bạn thân.`,
  howto: "Chơi luôn: bé làm Thỏ chạy quanh phòng, ba mẹ làm Rùa bò. Đến đoạn Thỏ ngủ, bé nằm xuống ngáy \"khò khò\" — ba mẹ bò tới đích.",
  questions: ["Ai chạy nhanh? Ai đi chậm?", "Vì sao Rùa thắng?", "Thỏ đã nói gì với Rùa?"]
},
{
  id: "s04", ages: ["2-3"], title: "Bạn Sâu Răng và bàn chải thần kỳ", tags: ["đánh răng", "thói quen", "buổi tối"], duration: 3,
  lesson: "Đánh răng sáng và tối để răng chắc khỏe.",
  content: `Trong miệng bé có hai hàng răng trắng tinh, xếp hàng ngay ngắn như những chú lính nhỏ.

Tối nay bé ăn bánh ngọt xong, mấy vụn bánh còn dính trên răng. Bạn Sâu Răng bé xíu mò tới: "Hí hí, có bánh ngọt! Mình sẽ đục một cái lỗ để ở!" Cộc cộc cộc…

Răng kêu lên: "Ối, cứu với!"

Bé nghe thấy. Bé cầm bàn chải, bóp một chút xíu kem, rồi: chải chải trên, chải chải dưới, chải bên trái, chải bên phải, chải mặt trong… xoẹt xoẹt xoẹt!

Bạn Sâu Răng trượt chân: "Ối trơn quá!" Bé súc miệng: ọc ọc ọc… phù! Sâu Răng trôi tuột ra ngoài.

Hàng răng cười tươi: "Cảm ơn bé! Bé là siêu anh hùng của chúng mình!"

Bé soi gương, nhe răng: "Í í í!" Răng trắng sáng lấp lánh.`,
  howto: "Kể ngay trong lúc đánh răng. Ba mẹ giả giọng Sâu Răng trốn ở góc răng nào thì chải góc đó. Cho bé kiểm tra răng ba mẹ nữa.",
  questions: ["Sâu Răng thích ăn gì?", "Con chải răng mấy lần một ngày?", "Con nhe răng cho ba/mẹ xem nào!"]
},
{
  id: "s05", ages: ["2-3"], title: "Gấu con đi ngủ", tags: ["đi ngủ", "thói quen", "buổi tối"], duration: 3,
  lesson: "Đi ngủ có trình tự giúp bé yên tâm, ngủ ngon.",
  content: `Trời tối rồi. Ông mặt trời đã về nhà. Gấu con vẫn muốn chơi.

Mẹ Gấu nói: "Gấu con ơi, tới giờ chuẩn bị đi ngủ rồi."

Gấu con cất xe đồ chơi vào thùng: cạch. Cất bóng: bộp.
Gấu con tắm: ào ào. Thơm phức!
Gấu con đánh răng: xoẹt xoẹt.
Gấu con đi tè, rồi rửa tay.
Gấu con mặc đồ ngủ, chọn một cuốn sách.

Mẹ đọc sách. Gấu con ngáp: "Oaaap…"

Gấu con chúc ngủ ngon: "Chúc mẹ ngủ ngon. Chúc ba ngủ ngon. Chúc xe ô tô ngủ ngon. Chúc ông trăng ngủ ngon."

Mẹ Gấu hôn lên trán: "Mẹ thương con."
Gấu con nhắm mắt, thở chậm… hít vào… thở ra… và ngủ thật ngon.

Suỵt… Gấu con ngủ rồi.`,
  howto: "Kể bằng giọng nhỏ dần, chậm dần. Thay việc của Gấu con bằng đúng trình tự đi ngủ ở nhà mình. Cuối truyện để bé tự chúc ngủ ngon các đồ vật.",
  questions: ["Gấu con làm gì trước khi ngủ?", "Con muốn chúc ai ngủ ngon?"]
},
{
  id: "s06", ages: ["2-3", "4-6"], title: "Hai chú dê qua cầu", tags: ["nhường nhịn", "hợp tác"], duration: 3,
  lesson: "Biết nhường nhau thì ai cũng được việc; tranh giành thì cả hai cùng thiệt.",
  content: `Có một cây cầu nhỏ, hẹp ơi là hẹp, bắc qua con suối.

Dê Đen đi từ bên này. Dê Trắng đi từ bên kia. Hai bạn gặp nhau giữa cầu.

Dê Đen: "Tránh ra cho tôi đi trước!"
Dê Trắng: "Không, tôi đi trước!"
Hai bạn húc nhau: cộp! cộp! … Ùm! Ùm! Cả hai rơi xuống suối, ướt sũng, lạnh run.

Hôm sau, có Dê Vàng và Dê Nâu cũng gặp nhau giữa cầu.
Dê Vàng nói: "Bạn ơi, cầu hẹp quá. Mình nằm xuống, bạn bước qua lưng mình nhé."
Dê Nâu nói: "Cảm ơn bạn!" rồi nhẹ nhàng bước qua.

Thế là cả hai bạn đều qua cầu an toàn, còn vẫy tay chào nhau: "Tạm biệt bạn!"`,
  howto: "Làm cây cầu bằng một dải gối/băng dính trên sàn. Ba mẹ và bé là hai chú dê. Lần đầu chơi \"húc nhẹ rồi ngã\", lần sau tập nhường nhau qua cầu.",
  questions: ["Dê Đen và Dê Trắng bị làm sao?", "Dê Vàng đã làm gì?", "Khi con và bạn cùng muốn một đồ chơi, mình làm sao?"]
},
{
  id: "s07", ages: ["2-3", "4-6"], title: "Sư tử và chú chuột nhắt", tags: ["tử tế", "giúp đỡ"], duration: 3,
  lesson: "Ai cũng có thể giúp người khác, dù nhỏ bé.",
  content: `Sư tử đang ngủ trưa: khò… khò… Một chú chuột nhắt chạy qua, vấp vào mũi Sư tử.

Sư tử tỉnh dậy, chụp lấy chuột: "GRÀOO! Ai dám đánh thức ta?"
Chuột run run: "Xin lỗi ông Sư tử, tha cho cháu. Có ngày cháu sẽ giúp ông."
Sư tử bật cười: "Chuột bé tí mà giúp ta à? Thôi, đi đi!"

Ít hôm sau, Sư tử bị mắc vào một tấm lưới. Sư tử vùng vẫy, gầm lên: "GRÀOO! Cứu với!"

Chuột nghe thấy, chạy tới: lon ton, lon ton. Chuột lấy răng gặm lưới: rắc rắc rắc… Lưới đứt một lỗ, Sư tử chui ra.

Sư tử nói: "Cảm ơn bạn chuột! Bạn nhỏ mà giỏi quá."
Từ đó Sư tử và chuột là bạn thân.`,
  howto: "Bé làm Sư tử gầm GRÀOO (bé rất thích!), ba mẹ làm chuột. Dùng một chiếc chăn làm lưới, ba mẹ \"gặm\" để giải cứu bé.",
  questions: ["Sư tử kêu thế nào?", "Ai đã cứu Sư tử?", "Hôm nay con giúp được ai?"]
},
{
  id: "s08", ages: ["2-3", "4-6"], title: "Chú vịt con xám", tags: ["tự tin", "yêu thương bản thân"], duration: 4,
  lesson: "Mỗi người một vẻ; bé luôn đáng yêu theo cách của mình.",
  content: `Vịt mẹ ấp một ổ trứng. Tách! Tách! Tách! Những chú vịt con vàng óng chui ra: "Cạp cạp!"

Quả trứng to nhất nở sau cùng. Ra một chú vịt màu xám, to hơn, cổ dài hơn.

Các bạn cười: "Sao bạn khác bọn tớ thế?" Vịt xám buồn lắm, đi một mình ra hồ.

Mùa đông lạnh, vịt xám co ro bên bờ hồ. Vịt xám cố gắng tập bơi, tập vỗ cánh mỗi ngày.

Mùa xuân tới, vịt xám nhìn xuống mặt nước. Ôi! Trong nước là một con thiên nga trắng, cổ dài, cánh đẹp. Đó chính là mình!

Một đàn thiên nga bay tới: "Bạn ơi, bay cùng chúng mình nhé!"

Thiên nga nhỏ dang cánh, bay lên cao, cao mãi. Nó không còn buồn nữa, vì nó biết: mình khác các bạn, nhưng mình vẫn đẹp.`,
  howto: "Bé đi lạch bạch như vịt, rồi ở cuối truyện dang tay \"bay\" quanh phòng. Nhấn mạnh câu: \"Con khác bạn, nhưng con vẫn tuyệt vời.\"",
  questions: ["Vịt con kêu thế nào?", "Vịt xám lớn lên thành con gì?", "Con có gì đặc biệt nào?"]
},
{
  id: "s09", ages: ["2-3", "4-6"], title: "Cô bé quàng khăn đỏ (bản nhẹ nhàng)", tags: ["an toàn", "vâng lời"], duration: 5,
  lesson: "Không đi theo, không nói chuyện riêng với người lạ; đi đâu cũng nói với ba mẹ.",
  content: `Có một cô bé hay quàng chiếc khăn màu đỏ, nên ai cũng gọi là Khăn Đỏ.

Mẹ dặn: "Con mang bánh sang cho bà nhé. Đi thẳng đường lớn, đừng đi vào rừng, đừng nói chuyện với người lạ."

Khăn Đỏ đi được một đoạn thì gặp Sói. Sói ngọt ngào: "Cháu đi đâu đấy? Vào rừng hái hoa với chú đi!"
Khăn Đỏ mải nhìn hoa, quên lời mẹ, đi theo một đoạn. Sói chạy tắt đến nhà bà trước, giả làm bà nằm trên giường.

Khăn Đỏ vào nhà: "Bà ơi, sao tai bà to thế?" — "Để bà nghe cháu rõ hơn."
"Sao mắt bà to thế?" — "Để bà nhìn cháu rõ hơn."
"Sao miệng bà to thế?" — "Để… ĂN THỊT CHÁU!"

Khăn Đỏ hét to: "CỨU VỚI!" Bác thợ săn đi ngang nghe thấy, chạy vào đuổi Sói đi mất. Bà thì đang trốn an toàn trong tủ.

Khăn Đỏ ôm bà: "Từ nay cháu sẽ nhớ lời mẹ dặn: không đi theo người lạ."`,
  howto: "Đoạn \"sao tai bà to thế\" cho bé chỉ vào tai, mắt, miệng của mình. Tập cho bé hét to \"CỨU VỚI!\" và chạy về với ba mẹ — kỹ năng an toàn thật.",
  questions: ["Mẹ dặn Khăn Đỏ điều gì?", "Nếu người lạ rủ con đi, con làm gì?", "Tai, mắt, miệng của con đâu?"]
},
{
  id: "s10", ages: ["2-3"], title: "Chú xe tải chăm chỉ", tags: ["xe cộ", "chăm chỉ", "buổi sáng"], duration: 3,
  lesson: "Làm việc giúp người khác là điều rất vui.",
  content: `Ở công trường có chú Xe Tải màu vàng. Mỗi sáng chú thức dậy: "Bim bim! Chào buổi sáng!"

Bác Máy Xúc múc cát: xúc xúc xúc, đổ vào thùng Xe Tải: rào rào rào.
Xe Tải chở cát đi: brừm brừm brừm. Lên dốc: brừừừm… cố lên! Xuống dốc: vèo!

Chú đổ cát xuống chỗ xây nhà: rầm rầm! Bác Xe Lu lăn cho phẳng: ì ạch, ì ạch.

Đến trưa, Xe Tải mệt rồi. Chú vào trạm đổ xăng: ọc ọc ọc. Rồi lại chạy tiếp.

Chiều tối, ngôi nhà mới đã có móng thật chắc. Mọi người vỗ tay: "Cảm ơn Xe Tải!"

Xe Tải về bến, tắt đèn: "Bim! Chúc mọi người ngủ ngon." Và chú ngủ một giấc thật say.`,
  howto: "Dùng xe đồ chơi của bé để diễn. Bé chở \"cát\" (đồ chơi nhỏ) từ góc này sang góc kia. Kết thúc bằng việc cho xe \"về bến\" = dọn đồ chơi vào thùng.",
  questions: ["Xe tải kêu thế nào?", "Xe tải chở gì?", "Con thích xe gì nhất?"]
},
{
  id: "s11", ages: ["2-3", "4-6"], title: "Xe cứu hỏa dũng cảm", tags: ["xe cộ", "dũng cảm", "an toàn"], duration: 3,
  lesson: "Lửa rất nguy hiểm; khi có cháy phải gọi người lớn ngay.",
  content: `Ở trạm cứu hỏa có chú Xe Cứu Hỏa màu đỏ, có cái thang dài và vòi nước to.

Reng reng reng! Có tiếng chuông báo cháy. Các chú lính cứu hỏa đội mũ, nhảy lên xe.
Xe Cứu Hỏa chạy thật nhanh: "Te-ta te-ta! Te-ta te-ta!" Các xe khác tránh sang bên nhường đường.

Tới nơi, khói bốc lên mù mịt. Chú dựng thang lên cao: cót két cót két.
Chú phun nước: XÌÌÌÌ… XÌÌÌÌ… Lửa nhỏ dần, nhỏ dần rồi tắt hẳn.

Một chú mèo con trên mái nhà kêu: "Meo meo!" Chú lính leo thang, bế mèo con xuống an toàn.

Mọi người vỗ tay: "Cảm ơn Xe Cứu Hỏa!"
Xe Cứu Hỏa về trạm, rửa sạch sẽ, sẵn sàng giúp mọi người lần sau.`,
  howto: "Bé chạy quanh nhà kêu \"te-ta te-ta\", dùng tay làm vòi phun \"xììì\". Nhân tiện dặn: bé không chạm vào bếp, bật lửa, ổ điện.",
  questions: ["Xe cứu hỏa kêu thế nào?", "Xe cứu hỏa màu gì?", "Con có được chơi với lửa không?"]
},
{
  id: "s12", ages: ["2-3"], title: "Mèo con và đôi bàn tay sạch", tags: ["rửa tay", "vệ sinh"], duration: 3,
  lesson: "Rửa tay trước khi ăn và sau khi đi vệ sinh để không bị ốm.",
  content: `Mèo con chơi ngoài vườn cả buổi: đào đất, nhặt lá, sờ chú sâu. Bàn tay lấm lem.

Mẹ gọi: "Mèo con ơi, vào ăn cơm!" Mèo con chạy vào, định bốc cá ăn ngay.

Mẹ nói: "Khoan đã! Trên tay con có những bạn vi khuẩn bé xíu, mắt không nhìn thấy. Nếu ăn vào, con sẽ đau bụng."

Mèo con chạy tới bồn rửa: mở vòi nước — ào ào.
Xoa xà phòng: lùng bùng bong bóng!
Xoa lòng bàn tay, xoa mu bàn tay, xoa từng ngón tay, xoa móng tay, xoa cổ tay.
Xả nước: vi khuẩn trôi đi hết — "Tạm biệt vi khuẩn!"
Lau khô bằng khăn.

Mèo con giơ tay lên: "Mẹ ơi xem này, sạch bong!" Mẹ thơm lên má Mèo con. Cả nhà cùng ăn cơm ngon lành.`,
  howto: "Kể ngay ở bồn rửa tay. Hát một bài ngắn (ví dụ \"Một con vịt\") trong lúc xoa xà phòng — đủ khoảng 20 giây.",
  questions: ["Khi nào mình phải rửa tay?", "Con xoa xà phòng thế nào?", "Vi khuẩn đi đâu rồi?"]
},
{
  id: "s13", ages: ["2-3"], title: "Gà trống gáy chào buổi sáng", tags: ["buổi sáng", "thức dậy", "con vật"], duration: 2,
  lesson: "Buổi sáng thức dậy vui vẻ, chào mọi người.",
  content: `Trời còn tối. Ông mặt trời vẫn đang ngủ sau núi.

Chú Gà Trống mở mắt, vươn cổ, vỗ cánh: phạch phạch phạch… "Ò Ó O O!"

Ông mặt trời nghe thấy, dụi mắt, ló lên: "Chào Gà Trống!"
Chim sẻ thức dậy: "Chíp chíp!"
Bò thức dậy: "Ụm bò!"
Vịt thức dậy: "Cạp cạp!"
Heo thức dậy: "Ụt ịt!"
Mèo duỗi người: "Meo meo!"

Còn ai chưa dậy nhỉ? À, có một bạn nhỏ trong chăn…
Gà Trống gáy thật to: "Ò Ó O O! Bé ơi dậy thôi!"
Bé mở mắt, vươn vai: "Chào buổi sáng!"`,
  howto: "Kể buổi sáng khi bé vừa thức. Mỗi con vật thì để bé đoán tiếng kêu. Cuối truyện cả nhà cùng vươn vai thật cao, tập vài động tác thể dục.",
  questions: ["Gà trống gáy thế nào?", "Con bò kêu sao?", "Sáng nay con chào ai rồi?"]
},
{
  id: "s14", ages: ["2-3"], title: "Ông mặt trời đi ngủ", tags: ["đi ngủ", "buổi tối", "thiên nhiên"], duration: 2,
  lesson: "Ngày và đêm thay nhau; đêm là lúc mọi người nghỉ ngơi.",
  content: `Cả ngày ông mặt trời chiếu nắng cho cây lớn, cho quần áo khô, cho bé đi chơi.

Chiều rồi, ông mặt trời mệt. Ông chuyển sang màu cam, rồi màu đỏ, rồi từ từ đi xuống sau núi.

"Chúc mọi người ngủ ngon nhé!" — ông nói.

Chim bay về tổ. Gà vào chuồng. Hoa khép cánh lại.
Chị Mây kéo chiếc chăn màu tím. Bầu trời tối dần.

Bà Trăng thức dậy, treo chiếc đèn tròn lên cao. Các ngôi sao nhỏ thắp đèn: lấp lánh, lấp lánh.

"Bé ơi," bà Trăng thì thầm, "đến giờ ngủ rồi. Bà sẽ canh cho bé ngủ ngon. Sáng mai ông mặt trời sẽ quay lại chơi với bé."

Bé nhắm mắt lại… thở thật chậm… và ngủ.`,
  howto: "Tắt bớt đèn khi kể. Hai tay làm mặt trời từ trên cao hạ xuống. Giọng kể nhỏ dần.",
  questions: ["Mặt trời đi đâu rồi?", "Buổi tối trên trời có gì?"]
},
{
  id: "s15", ages: ["2-3", "4-6"], title: "Gấu con chia quà", tags: ["chia sẻ", "tình bạn"], duration: 3,
  lesson: "Chia sẻ làm niềm vui nhân lên.",
  content: `Gấu con được bà cho một hũ mật ong thơm phức. Gấu con ôm chặt: "Của mình! Của mình hết!"

Thỏ đi qua: "Gấu ơi, thơm quá!" — Gấu con quay lưng đi.
Sóc đi qua: "Gấu ơi, cho mình nếm với!" — Gấu con lắc đầu.

Gấu con ngồi ăn một mình. Ăn mãi, ăn mãi… nhưng chẳng có ai để nói chuyện, chẳng có ai để cười cùng. Gấu con thấy buồn buồn.

Gấu con nghĩ một lúc, rồi chạy đi gọi: "Thỏ ơi! Sóc ơi! Lại đây ăn mật cùng mình!"

Ba bạn ngồi thành vòng tròn. Mỗi bạn một thìa. "Ngon quá!" Thỏ cười, Sóc cười, Gấu con cười to nhất.

Thỏ mang cà rốt tới, Sóc mang hạt dẻ tới. Bữa tiệc nhỏ vui ơi là vui.

Gấu con nói: "Chia cho bạn, mình còn vui hơn!"`,
  howto: "Dùng đồ ăn vặt thật (vài miếng trái cây): bé chia cho ba, mẹ, gấu bông. Đừng ép bé chia đồ chơi yêu thích — với bé 2 tuổi, chia sẻ cần tập dần.",
  questions: ["Lúc đầu Gấu con vui hay buồn?", "Gấu con đã chia cho ai?", "Con chia cho ba/mẹ miếng táo được không?"]
},
{
  id: "s16", ages: ["2-3", "4-6"], title: "Đom đóm nhỏ và bóng tối", tags: ["nỗi sợ", "đi ngủ", "buổi tối"], duration: 3,
  lesson: "Bóng tối không đáng sợ; ba mẹ luôn ở gần bé.",
  content: `Ở bìa rừng có một chú Đom Đóm nhỏ. Chú sợ bóng tối lắm.

Tối đến, Đom Đóm nhỏ trốn dưới chiếc lá: "Tối quá, con sợ!"
Mẹ Đom Đóm ôm chú: "Con ơi, con nhìn kìa, bụng con có một chiếc đèn nhỏ đấy."

Đom Đóm nhỏ nhìn xuống — bụng sáng lên: lóe… lóe… Ồ!

Chú bay ra ngoài. Chú thấy bác Ếch: "Ộp ộp, chào Đom Đóm!" Thấy bạn Dế: "Re re re, chào bạn!" Thấy bà Cú: "Cú cú, ngủ ngon nhé!"

"À, ban đêm cũng có nhiều bạn quá," Đom Đóm nhỏ nghĩ. "Bóng tối chỉ là lúc mọi thứ đi ngủ thôi."

Chú bay về nằm cạnh mẹ, chiếc đèn nhỏ sáng dịu dàng. Mẹ thì thầm: "Mẹ luôn ở đây." Đom Đóm nhỏ ngủ ngon lành.`,
  howto: "Tắt đèn, dùng đèn pin nhỏ làm đom đóm bay quanh phòng. Nếu bé sợ tối, để đèn ngủ nhỏ và nói rõ ba mẹ ở đâu.",
  questions: ["Đom Đóm nhỏ sợ gì?", "Ban đêm có những bạn nào?", "Ai luôn ở cạnh con?"]
},
{
  id: "s17", ages: ["2-3", "4-6"], title: "Núi lửa nhỏ trong bụng", tags: ["cảm xúc", "tức giận", "thở"], duration: 3,
  lesson: "Tức giận là bình thường; mình thở sâu để bình tĩnh lại, không đánh, không ném.",
  content: `Khủng long con đang xếp tháp. Bạn Khủng long Xanh đi qua, làm đổ tháp: rầm!

Khủng long con thấy trong bụng nóng lên, nóng lên, như một ngọn núi lửa nhỏ: ục ục ục… Chân dậm dậm, tay nắm chặt, muốn hét thật to: "GRÀÀÀ!"

Mẹ Khủng long tới, ngồi xuống bên cạnh: "Mẹ thấy con đang tức giận. Tháp bị đổ, con buồn lắm phải không?"

Khủng long con gật đầu.

Mẹ nói: "Mình cùng làm núi lửa nguội nhé. Hít vào bằng mũi thật sâu, như ngửi bông hoa… Thở ra bằng miệng thật chậm, như thổi nến… phùùù."
Một lần… hai lần… ba lần.

Núi lửa trong bụng nguội dần, nguội dần.

Khủng long Xanh chạy lại: "Xin lỗi bạn, mình không cố ý." Hai bạn cùng xếp lại tháp, còn cao hơn lúc trước!`,
  howto: "Tập \"ngửi hoa – thổi nến\" cùng bé khi bé đang vui, để lúc bé giận còn nhớ. Có thể dậm chân thật mạnh 3 lần thay cho đánh/ném.",
  questions: ["Khi tức giận, bụng Khủng long con thế nào?", "Mình thổi nến thế nào nhỉ?", "Khi nào con thấy tức giận?"]
},
{
  id: "s18", ages: ["2-3", "4-6"], title: "Ba chú dê và con quỷ dưới cầu", tags: ["dũng cảm", "âm thanh", "vận động"], duration: 4,
  lesson: "Bình tĩnh và nghĩ cách thì vượt qua được điều khó.",
  content: `Có ba chú dê: Dê Bé, Dê Vừa, Dê Lớn. Bên kia cầu có đồi cỏ non xanh mướt. Nhưng dưới cầu có một con quỷ lông lá rất hay cáu.

Dê Bé đi qua cầu: lộp cộp, lộp cộp.
Quỷ gầm: "Ai đi trên cầu của ta?" — "Dạ, Dê Bé ạ. Cháu bé lắm, anh cháu đi sau to hơn nhiều." — "Thế thì đi đi!"

Dê Vừa đi qua: lộc cộc, lộc cộc.
"Ai đi trên cầu của ta?" — "Dạ, Dê Vừa ạ. Anh cháu đi sau còn to hơn." — "Đi đi!"

Dê Lớn đi qua: CỘP! CỘP! CỘP!
"Ai đi trên cầu của ta?" — "TA LÀ DÊ LỚN!" Dê Lớn cúi sừng húc một cái: bụp! Quỷ rơi tõm xuống suối, bơi mất tăm, không bao giờ quay lại nữa.

Ba chú dê lên đồi, ăn cỏ non no căng bụng: nhóp nhép, nhóp nhép.`,
  howto: "Bước chân trên sàn theo 3 mức to nhỏ: lộp cộp nhỏ, lộc cộc vừa, CỘP CỘP thật mạnh. Bé thích giậm chân, rất hợp với bé hiếu động.",
  questions: ["Dê nào đi trước?", "Con giậm chân như Dê Lớn nào!", "Ba chú dê ăn gì?"]
},
{
  id: "s19", ages: ["2-3"], title: "Bàn tay nhỏ giúp mẹ", tags: ["dọn dẹp", "tự lập", "giúp đỡ"], duration: 2,
  lesson: "Bé lớn rồi, bé tự cất đồ chơi và giúp ba mẹ việc nhỏ.",
  content: `Bé có hai bàn tay nhỏ. Bàn tay nhỏ biết làm gì nhỉ?

Bàn tay nhỏ biết vẫy: "Chào ba đi làm!"
Bàn tay nhỏ biết vỗ: bốp bốp bốp!
Bàn tay nhỏ biết cầm thìa: tự xúc cơm ăn.

Chơi xong, đồ chơi nằm khắp nhà. Xe ô tô nằm dưới gầm ghế, khối gỗ nằm cạnh cửa, gấu bông nằm úp mặt.
Đồ chơi nói: "Bé ơi, tụi mình muốn về nhà!"

Bàn tay nhỏ nhặt xe ô tô: brừm, về thùng! Nhặt khối gỗ: cạch cạch, về hộp! Bế gấu bông: lên giường!

Mẹ nhìn quanh: "Ôi, nhà gọn quá! Ai dọn thế này?"
Bé giơ hai bàn tay nhỏ lên: "Con dọn đấy!"
Mẹ ôm bé: "Cảm ơn con. Bàn tay nhỏ giỏi quá!"`,
  howto: "Kể xong là \"thi\" dọn đồ chơi: bật một bài hát, dọn xong trước khi hết bài. Khen cụ thể: \"Con cất xe vào thùng rồi!\"",
  questions: ["Bàn tay con biết làm gì?", "Xe ô tô ở nhà nào?", "Mình dọn cùng nhau nhé?"]
},
{
  id: "s20", ages: ["2-3", "4-6"], title: "Hạt mầm nhỏ", tags: ["kiên nhẫn", "thiên nhiên", "buổi sáng"], duration: 2,
  lesson: "Cái gì cũng cần thời gian để lớn — như bé vậy.",
  content: `Bé và mẹ gieo một hạt đậu nhỏ vào chậu đất.

Bé hỏi: "Bao giờ cây lớn hả mẹ?" — "Mình chờ nhé."

Ngày thứ nhất: bé tưới nước — tưới tưới tưới. Chưa thấy gì.
Ngày thứ hai: ông mặt trời chiếu nắng. Vẫn chưa thấy gì.
Ngày thứ ba: bé ghé sát nhìn… Ồ! Một mầm xanh nhỏ xíu nhú lên, cong cong như dấu hỏi.

Mầm xanh vươn vai, mở ra hai chiếc lá non. Ngày nào bé cũng tưới, cây cũng lớn thêm một chút, một chút.

Mẹ nói: "Cây cũng như con. Ăn ngoan, ngủ ngoan, mỗi ngày lớn thêm một chút."

Bé đứng cạnh chậu cây, kiễng chân: "Con cũng lớn rồi!"`,
  howto: "Bé ngồi co tròn như hạt mầm, từ từ \"mọc\" lên, dang tay thành lá. Có thể gieo hạt đậu thật trong cốc giấy để bé quan sát mỗi ngày.",
  questions: ["Cây cần gì để lớn?", "Con lớn bằng cách nào?", "Mình trồng một cây thật nhé?"]
},
{
  id: "s21", ages: ["2-3"], title: "Ếch con và cơn mưa", tags: ["thiên nhiên", "âm thanh", "con vật"], duration: 2,
  lesson: "Mưa giúp cây cối và muôn loài; mình mặc áo mưa để không ướt.",
  content: `Trời oi oi. Ếch con ngồi trên lá sen: "Ộp ộp, nóng quá!"

Chị Mây xám kéo tới. Gió thổi: vù vù vù. Sấm kêu: ùng oàng!
Rồi mưa rơi: tí tách… tí tách… lộp độp… lộp độp… rào rào rào!

Ếch con nhảy lên vui sướng: "Ộp ộp! Mưa rồi!"
Hoa sen uống nước, cây lúa uống nước. Cá bơi lượn: tung tăng.
Bạn Vịt mặc áo không thấm nước, bơi cạp cạp.

Bé ngồi trong nhà nhìn ra cửa sổ. Bé hỏi: "Con ra chơi được không?" Mẹ nói: "Đợi hết sấm, mình mặc áo mưa, đi ủng rồi ra nhảy vũng nước nhé!"

Mưa tạnh. Cầu vồng hiện lên bảy màu. Bé và Ếch con cùng nhảy: bì bõm, bì bõm!`,
  howto: "Làm âm thanh mưa bằng tay: gõ ngón tay (tí tách), vỗ đùi (lộp độp), xoa tay (rào rào). Bé nhảy như ếch quanh phòng.",
  questions: ["Mưa rơi kêu thế nào?", "Ếch kêu sao?", "Trời mưa con mặc gì?"]
},
{
  id: "s22", ages: ["2-3", "4-6", "7-10"], title: "Cậu bé Gióng ăn khỏe lớn nhanh", tags: ["truyện dân gian", "ăn uống", "dũng cảm"], duration: 4,
  lesson: "Ăn ngoan thì khỏe mạnh, lớn nhanh, làm được nhiều việc tốt.",
  content: `Ngày xưa, ở làng Gióng có một cậu bé lên ba tuổi mà chưa biết nói, chưa biết cười, chỉ nằm im.

Một hôm, có giặc kéo đến. Nhà vua cho sứ giả đi tìm người tài giúp nước.
Nghe tiếng sứ giả, cậu bé bỗng ngồi dậy, nói: "Mẹ ơi, mời sứ giả vào đây!" Cậu xin vua một con ngựa sắt, một cây roi sắt và một bộ áo giáp.

Từ hôm đó, cậu ăn rất khỏe. Cơm nấu nồi nào hết nồi ấy, cà mấy quả hết mấy quả. Bà con hàng xóm góp gạo, góp rau. Cậu lớn nhanh như thổi: vươn vai một cái — lớn bằng cái cây!

Ngựa sắt đến, Gióng vươn vai, mặc giáp, nhảy lên ngựa. Ngựa hí vang: "Hí hí!" và phun lửa. Gióng phi ngựa: cộp cộp cộp, đánh tan giặc.

Đánh giặc xong, Gióng cưỡi ngựa bay lên trời. Mọi người nhớ ơn, gọi là Thánh Gióng.`,
  howto: "Đến chữ \"vươn vai\" cả nhà vươn vai thật cao. Bé cưỡi \"ngựa\" là chân ba hoặc gối ôm. Kể trước giờ ăn để bé \"ăn khỏe như Gióng\" — nhưng đừng ép ăn.",
  questions: ["Gióng ăn nhiều để làm gì?", "Con vươn vai như Gióng nào!", "Hôm nay con ăn món gì?"]
},
{
  id: "s23", ages: ["2-3", "4-6"], title: "Tích Chu đi tìm nước cho bà", tags: ["truyện dân gian", "yêu thương ông bà"], duration: 4,
  lesson: "Thương ông bà, quan tâm chăm sóc người thân.",
  content: `Ngày xưa có cậu bé tên Tích Chu ở với bà. Bà rất thương Tích Chu, cái gì ngon cũng dành cho cháu.

Nhưng Tích Chu chỉ mải chơi. Bà gọi: "Tích Chu ơi, bà khát nước quá!" — Tích Chu vẫn chạy nhảy, không nghe.

Bà khát quá, hóa thành một con chim, bay lên trời.
Tích Chu khóc: "Bà ơi, bà đừng đi! Cháu sẽ thương bà!"
Chim nói: "Bà khát quá, không còn ai cho bà uống nước."

Tích Chu đi tìm nước suối tiên. Cậu đi xa lắm, qua đồi, qua núi, mệt nhưng không bỏ cuộc. Bà Tiên thương cậu, cho cậu một bát nước thần.

Tích Chu chạy về, gọi: "Bà ơi, bà uống nước đi!" Chim uống nước xong, hóa lại thành bà.

Tích Chu ôm bà thật chặt: "Từ nay cháu sẽ chăm sóc bà!"`,
  howto: "Sau truyện, cho bé mang một cốc nước cho ông/bà hoặc ba/mẹ. Có thể gọi video cho ông bà và để bé nói \"Con thương bà\".",
  questions: ["Bà muốn gì?", "Tích Chu đã làm gì?", "Con mang nước cho ba/mẹ được không?"]
},
{
  id: "s24", ages: ["2-3", "4-6"], title: "Khỉ con biết nói cảm ơn", tags: ["lễ phép", "giao tiếp"], duration: 2,
  lesson: "Nói \"cảm ơn\", \"xin lỗi\", \"làm ơn\" là những từ kỳ diệu.",
  content: `Khỉ con muốn ăn chuối. Khỉ con hét: "Đưa chuối đây!" Bác Voi nhíu mày, không đưa.

Mẹ Khỉ thì thầm: "Con thử nói những từ kỳ diệu xem."

Khỉ con khoanh tay: "Bác Voi ơi, cho cháu xin quả chuối ạ."
Bác Voi cười, lấy vòi hái cho Khỉ con một nải chuối: "Đây cháu!"
Khỉ con: "Cháu cảm ơn bác ạ!"

Khỉ con vừa ăn vừa chạy, va vào bạn Hươu: bịch!
Khỉ con nói ngay: "Xin lỗi bạn Hươu!" Hươu cười: "Không sao đâu."

Khỉ con chia cho Hươu một quả chuối. Hươu nói: "Cảm ơn bạn!"

Tối về, Khỉ con kể với mẹ: "Mẹ ơi, những từ kỳ diệu linh nghiệm thật đấy!"`,
  howto: "Chơi \"cửa hàng chuối\": bé phải nói \"cho con xin\" mới mua được, nhận được thì nói \"con cảm ơn\". Ba mẹ cũng nói cảm ơn/xin lỗi với bé hằng ngày để bé bắt chước.",
  questions: ["Những từ kỳ diệu là gì?", "Khi va vào bạn, mình nói gì?", "Con nói \"cảm ơn\" thử nào!"]
},
{
  id: "s25", ages: ["2-3"], title: "Bé tập đi bô", tags: ["đi vệ sinh", "tự lập"], duration: 2,
  lesson: "Đi bô là một bước lớn — từ từ thôi, không sao nếu chưa kịp.",
  content: `Bé có một chiếc bô mới màu xanh. Chiếc bô nói: "Chào bé! Mình là bạn Bô. Khi nào bé buồn tè, buồn ị thì gọi mình nhé!"

Gấu bông cũng muốn tập. Gấu bông ngồi lên bô — mẹ giả tiếng: "Tè tè… xong rồi!"

Bé chơi xe một lúc. Ôi, bụng thấy buồn buồn. Bé nhớ ra: "Mẹ ơi, con buồn tè!"
Bé chạy tới, kéo quần xuống, ngồi lên bô. Tè tè tè… xong rồi!

Mẹ vỗ tay: "Giỏi quá! Con tự đi bô rồi!" Bé rửa tay: ào ào.

Hôm sau bé mải chơi, bị ướt quần một chút. Bé hơi buồn. Mẹ ôm bé: "Không sao đâu con, ai mới tập cũng thế. Lần sau mình thử lại nhé."

Bạn Bô cười: "Mình luôn đợi bé!"`,
  howto: "Chỉ dùng khi bé đã có dấu hiệu sẵn sàng (xem bài Dạy con về đi bô). Cho gấu bông \"đi bô\" trước. Không la mắng khi bé tè dầm.",
  questions: ["Khi buồn tè con gọi ai?", "Gấu bông đi bô chưa?", "Đi bô xong mình làm gì?"]
},
{
  id: "s26", ages: ["2-3"], title: "Voi con tắm", tags: ["tắm", "con vật", "vui chơi"], duration: 2,
  lesson: "Tắm rửa sạch sẽ thì thơm tho, dễ chịu.",
  content: `Voi con chơi ngoài đồng cả ngày, lăn lộn trong bùn: bì bõm, bì bõm. Người lấm lem hết!

Mẹ Voi nói: "Đi tắm thôi con!"
Voi con chạy ra suối. Voi con hút nước bằng vòi: rột rột rột…
Rồi phun lên lưng: phụt! phụt! Phun lên đầu: phụt! Phun sang mẹ: phụt phụt!
Mẹ Voi cười, phun lại: ào!

Cá con bơi tới: "Cho mình tắm cùng!" Vịt con bơi tới: "Cạp cạp, cho mình nữa!"

Voi con kỳ cọ hai tai to, kỳ cọ bốn chân, kỳ cọ cái đuôi nhỏ.
Tắm xong, Voi con sạch bóng, thơm tho.

Mẹ Voi lau khô cho con. Voi con ôm mẹ: "Tắm vui quá mẹ ơi!"`,
  howto: "Kể trong bồn tắm, dùng cốc nhựa làm vòi voi. Gọi tên từng bộ phận khi kỳ cọ: tai, cổ, bụng, chân — vừa vui vừa học từ.",
  questions: ["Voi con tắm bằng gì?", "Con kỳ cọ tai chưa?", "Con thích tắm không?"]
},
{
  id: "s27", ages: ["2-3", "4-6"], title: "Kiến chăm chỉ và Ve sầu", tags: ["chăm chỉ", "chia sẻ"], duration: 3,
  lesson: "Chăm chỉ chuẩn bị, và tử tế giúp đỡ bạn khi bạn cần.",
  content: `Mùa hè nắng vàng. Ve sầu đứng trên cành hát cả ngày: "Ve ve ve…"

Đàn kiến thì chăm chỉ: một bạn khiêng hạt gạo, một bạn khiêng mẩu bánh, xếp hàng đi về tổ: một hai, một hai.

Ve sầu cười: "Kiến ơi, chơi với tớ đi, làm gì cho mệt!"
Kiến đáp: "Bọn tớ để dành thức ăn cho mùa đông."

Mùa đông đến, gió lạnh: hu hu hu. Cây trụi lá. Ve sầu đói bụng, run cầm cập, đến gõ cửa nhà Kiến: cốc cốc cốc.

Kiến mở cửa: "Vào đây cho ấm!" Kiến chia cho Ve sầu một hạt gạo.
Ve sầu cảm ơn: "Năm sau tớ sẽ chăm chỉ như các bạn. Và tớ sẽ hát cho các bạn nghe khi các bạn làm việc!"

Từ đó, mùa hè nào đàn kiến cũng vừa làm vừa nghe Ve sầu hát. Vui ơi là vui.`,
  howto: "Bé làm kiến khiêng đồ chơi xếp hàng \"một hai, một hai\" về hộp. Ba mẹ làm Ve sầu hát.",
  questions: ["Kiến làm gì vào mùa hè?", "Ve sầu kêu thế nào?", "Kiến có cho Ve sầu vào nhà không?"]
},
{
  id: "s28", ages: ["2-3", "4-6"], title: "Gà con tìm mẹ", tags: ["gia đình", "con vật", "an toàn"], duration: 2,
  lesson: "Khi bị lạc, đứng yên một chỗ và gọi to tên ba mẹ.",
  content: `Gà mẹ dẫn đàn con đi kiếm ăn: "Cục cục, các con theo mẹ!" Đàn gà con: "Chíp chíp!"

Gà con Út mải đuổi theo chú bướm vàng, đi xa, xa mãi. Quay lại — không thấy mẹ đâu!

Gà con Út hỏi Vịt: "Bác có thấy mẹ cháu không?" — "Cạp cạp, không thấy."
Hỏi Chó: "Bác có thấy mẹ cháu không?" — "Gâu gâu, không thấy."

Gà con nhớ lời mẹ dặn: "Nếu lạc, con đứng yên một chỗ và gọi to." Gà con đứng yên dưới gốc cây, gọi thật to: "Mẹ ơi! Chíp chíp! Mẹ ơi!"

Gà mẹ nghe tiếng, chạy tới: "Cục cục! Con đây rồi!" Gà mẹ xòe cánh ôm con vào lòng, ấm áp.

Từ đó Gà con Út luôn đi gần mẹ.`,
  howto: "Chơi trốn tìm nhẹ nhàng: tập cho bé đứng yên và gọi to \"Ba ơi/Mẹ ơi\". Dạy bé nói tên ba mẹ (tên thật, không chỉ \"ba\", \"mẹ\").",
  questions: ["Gà con bị lạc làm gì?", "Ba con tên là gì? Mẹ con tên là gì?", "Đi chợ con phải đi thế nào?"]
},
{
  id: "s29", ages: ["4-6", "7-10"], title: "Sự tích cây vú sữa (kể ngắn)", tags: ["truyện dân gian", "yêu thương mẹ"], duration: 4,
  lesson: "Mẹ luôn thương con; con hãy biết thương và nghe lời mẹ.",
  content: `Ngày xưa, có một cậu bé ham chơi. Một lần bị mẹ nhắc, cậu giận dỗi bỏ đi chơi xa.

Mẹ ở nhà ngày nào cũng ra cổng đứng chờ con: "Con ơi, về với mẹ…"

Cậu bé đi chơi mãi, đến khi đói và rét mới nhớ đến mẹ. Cậu chạy về nhà gọi: "Mẹ ơi! Mẹ ơi!" — nhưng không thấy mẹ đâu.

Cậu ôm cây xanh trong vườn, khóc. Bỗng cây run run, nở ra những bông hoa trắng, rồi kết thành những quả tròn, xanh óng.
Một quả rơi vào tay cậu. Cậu cắn một miếng — có dòng sữa trắng ngọt thơm như sữa mẹ.
Lá cây một mặt xanh, một mặt đỏ như mắt mẹ khóc chờ con. Cây xòe tán, ôm lấy cậu như vòng tay mẹ.

Cậu bé hiểu ra: mẹ thương con biết bao nhiêu. Người ta gọi đó là cây vú sữa.`,
  howto: "Truyện hơi buồn — kể bằng giọng nhẹ, kết thúc bằng cái ôm thật chặt: \"Mẹ luôn ở đây với con.\" Nếu có quả vú sữa, cho bé nếm thử.",
  questions: ["Mẹ chờ cậu bé ở đâu?", "Quả vú sữa có gì?", "Con ôm mẹ một cái nào!"]
},
{
  id: "s30", ages: ["2-3"], title: "Chuyến tàu đồ chơi", tags: ["xe cộ", "đếm số", "vận động"], duration: 3,
  lesson: "Học đếm và gọi tên màu sắc, con vật.",
  content: `Tu tu! Chuyến tàu nhỏ chuẩn bị chạy. Tàu có năm toa.

Toa số một màu đỏ: chở bạn Mèo — "Meo meo!"
Toa số hai màu vàng: chở bạn Chó — "Gâu gâu!"
Toa số ba màu xanh lá: chở bạn Ếch — "Ộp ộp!"
Toa số bốn màu xanh dương: chở bạn Cá — "Ụp ụp!" (cá thở bong bóng)
Toa số năm màu tím: còn trống… Ai lên nhỉ? À, bé lên tàu!

"Tu tu! Xình xịch, xình xịch!" Tàu chạy qua cánh đồng, qua cây cầu, chui vào đường hầm: tối thui! — rồi ra ngoài: sáng trưng!

Ga cuối cùng: "Kíttt!" Tàu dừng lại. Các bạn xuống tàu: một, hai, ba, bốn, năm. Đủ cả rồi!

"Tạm biệt tàu nhỏ!" Tàu kêu: "Tu tu! Hẹn gặp lại!"`,
  howto: "Cả nhà xếp hàng làm đoàn tàu, tay đặt lên vai người trước, đi quanh nhà \"xình xịch\". Chui qua gầm bàn làm đường hầm. Đếm ngón tay theo số toa.",
  questions: ["Tàu có mấy toa?", "Toa màu đỏ chở ai?", "Con lên toa màu gì?"]
}
];
