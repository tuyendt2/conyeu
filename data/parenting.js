// Bài học mỗi ngày cho ba mẹ có con 2–3 tuổi.
// Tổng hợp từ các nguyên tắc phổ biến của nuôi dạy tích cực, phát triển trẻ thơ (AAP, CDC, Harvard Center on the Developing Child, UNICEF).
window.DATA_PARENTING = [
{
  id: "t01", ages: ["2-3"], title: "Bé 2 tuổi chạy nhảy suốt ngày là bình thường", tags: ["hiểu con", "vận động"],
  content: `Trẻ 2–3 tuổi học bằng cơ thể: chạy, leo, ném, nhảy là cách não bé phát triển. Thời gian tập trung của bé thường chỉ khoảng 3–6 phút cho một hoạt động — đó là sinh lý bình thường, không phải "hư" hay "không chịu học".

Vì vậy đừng cố bắt bé ngồi yên nghe truyện. Hãy mang truyện vào lúc bé đang vận động: kể khi đi dạo, khi tắm, khi chơi xe, cho bé "diễn" theo truyện.`,
  tryToday: "Kể một truyện ngắn trong lúc bé đang chơi, không yêu cầu bé ngồi yên. Quan sát xem bé thích đoạn nào nhất."
},
{
  id: "t02", ages: ["2-3"], title: "Trò chuyện \"bóng bàn\" (serve and return)", tags: ["ngôn ngữ", "gắn kết"],
  content: `Nghiên cứu của Harvard cho thấy những lượt trò chuyện qua lại — bé nói/chỉ, ba mẹ đáp lại, bé lại đáp — là "thức ăn" quan trọng nhất cho não bộ trẻ nhỏ, quan trọng hơn cả số từ bé nghe được.

Cách làm: để ý xem bé đang nhìn/chỉ gì → gọi tên nó → chờ bé phản hồi → đáp lại. Ví dụ: Bé chỉ con chó. "À, con chó! Con chó đang vẫy đuôi." Chờ… Bé: "Gâu!" — "Đúng rồi, chó kêu gâu gâu!"`,
  tryToday: "Tắt điện thoại 15 phút, chỉ theo sát sự chú ý của bé và đáp lại mọi thứ bé chỉ hoặc nói."
},
{
  id: "t03", ages: ["2-3"], title: "Nói thêm một chữ (mở rộng câu)", tags: ["ngôn ngữ"],
  content: `Khi bé nói một từ, ba mẹ nhắc lại và thêm 1–2 chữ. Bé: "Xe!" → "Xe đỏ!" → "Xe đỏ chạy nhanh!"

Đừng sửa lỗi kiểu "Nói sai rồi, phải nói là…". Chỉ cần nhắc lại câu đúng một cách tự nhiên: Bé: "Con ăn bánh rồi ạ" (hoặc nói ngọng) → "À, con ăn bánh rồi à? Bánh ngon không?"`,
  tryToday: "Mỗi lần bé nói hôm nay, hãy nhắc lại và thêm đúng một từ mới."
},
{
  id: "t04", ages: ["2-3", "4-6"], title: "Kết nối trước, nhắc nhở sau", tags: ["kỷ luật tích cực", "cảm xúc"],
  content: `Bé không thể nghe lời khi đang mất kết nối với ba mẹ. Trước khi nhắc bé làm gì, hãy ngồi xuống ngang tầm mắt, chạm nhẹ, gọi tên, nói về điều bé đang làm: "Con đang xếp tháp cao quá!" — rồi mới nói: "Còn hai khối nữa là mình đi tắm nhé."

Quát từ xa thường chỉ khiến bé phớt lờ hoặc chống đối.`,
  tryToday: "Mỗi lần cần bé làm gì, hãy đến gần, ngồi xuống ngang tầm mắt bé trước khi nói."
},
{
  id: "t05", ages: ["2-3", "4-6"], title: "Gọi tên cảm xúc cho bé", tags: ["cảm xúc", "hiểu con"],
  content: `Bé 2 tuổi có cảm xúc rất lớn nhưng chưa có từ ngữ để nói ra, nên bé khóc, ném, đánh. Ba mẹ giúp bé bằng cách gọi tên cảm xúc: "Con đang tức vì phải dừng chơi." "Con buồn vì ba đi làm."

Gọi tên không có nghĩa là chiều theo. "Con tức vì không được ăn kẹo nữa. Mẹ hiểu. Kẹo cất rồi. Mình ăn chuối nhé?"

Khi được gọi tên, cảm xúc dịu đi nhanh hơn — và dần dần bé sẽ tự nói được "Con giận!" thay vì đánh.`,
  tryToday: "Gọi tên ít nhất 3 cảm xúc của bé trong ngày (vui, buồn, tức, sợ, mệt…)."
},
{
  id: "t06", ages: ["2-3"], title: "Khi bé ăn vạ (tantrum)", tags: ["cảm xúc", "kỷ luật tích cực"],
  content: `Ăn vạ ở tuổi 2–3 là bình thường: não bé (vùng kiểm soát cảm xúc) chưa trưởng thành. Lúc bé đang "bão", bé không thể nghe giảng giải.

Cách làm:
1. Giữ an toàn (dời đồ nguy hiểm, giữ bé không làm đau mình/người khác).
2. Giữ mình bình tĩnh — thở chậm. Bé mượn sự bình tĩnh của ba mẹ.
3. Nói ít: "Mẹ ở đây. Con đang rất giận."
4. Không nhượng bộ điều đã nói "không" (để bé không học rằng ăn vạ thì được).
5. Khi bé dịu lại: ôm, rồi mới nói chuyện ngắn gọn.`,
  tryToday: "Lần tới bé ăn vạ, chỉ tập trung vào việc thở chậm của chính mình và nói một câu: \"Mẹ/ba ở đây.\""
},
{
  id: "t07", ages: ["2-3", "4-6"], title: "Nói điều bé NÊN làm thay vì \"đừng\"", tags: ["giao tiếp", "kỷ luật tích cực"],
  content: `Não trẻ nhỏ khó xử lý câu phủ định. "Đừng chạy!" — bé nghe thấy "chạy". Hãy nói điều mình muốn:
• "Đừng chạy" → "Đi chậm thôi con."
• "Đừng ném" → "Bóng để ném, xe để chạy."
• "Đừng la" → "Nói nhỏ như con chuột nào."
• "Đừng leo lên bàn" → "Chân để dưới sàn. Muốn leo thì leo lên ghế sofa nhé."`,
  tryToday: "Đếm xem hôm nay mình nói \"đừng/không được\" bao nhiêu lần, và thử đổi 3 lần sang câu \"nên làm\"."
},
{
  id: "t08", ages: ["2-3", "4-6"], title: "Cho bé lựa chọn (trong giới hạn)", tags: ["tự lập", "giao tiếp"],
  content: `Bé 2 tuổi rất muốn tự quyết — đó là lý do bé hay nói "Không!". Hãy cho bé quyền chọn giữa 2 phương án mà cả hai ba mẹ đều chấp nhận:
• "Con muốn mặc áo xanh hay áo vàng?"
• "Con muốn tự đi vào nhà tắm hay mẹ bế?"
• "Mình đánh răng trước hay thay đồ trước?"

Không hỏi "Con có muốn đi tắm không?" nếu câu trả lời "không" là không được chấp nhận.`,
  tryToday: "Áp dụng \"chọn 1 trong 2\" cho 3 việc hay bị bé phản đối nhất."
},
{
  id: "t09", ages: ["2-3"], title: "Báo trước khi chuyển hoạt động", tags: ["thói quen", "kỷ luật tích cực"],
  content: `Bé đang say mê chơi mà bị kéo đi đột ngột thì gần như chắc chắn sẽ khóc. Hãy báo trước:
• "Còn 5 phút nữa là mình đi tắm." (Bé chưa hiểu thời gian, nên dùng mốc cụ thể hơn:)
• "Con chạy xe thêm 3 vòng nữa nhé."
• "Hết bài hát này là mình cất đồ chơi."

Có thể cho bé mang theo một món đồ chơi sang hoạt động mới.`,
  tryToday: "Báo trước mọi lần chuyển hoạt động hôm nay bằng một mốc cụ thể (số vòng, hết bài hát)."
},
{
  id: "t10", ages: ["2-3"], title: "Nếp sinh hoạt cố định giúp bé ngoan hơn", tags: ["thói quen", "giấc ngủ"],
  content: `Trẻ nhỏ cảm thấy an toàn khi biết điều gì sắp xảy ra. Một nếp sinh hoạt ổn định (giờ ăn, giờ ngủ, trình tự trước khi ngủ) giảm rất nhiều cuộc giằng co.

Gợi ý trình tự buổi tối (khoảng 30 phút): tắm → mặc đồ ngủ → đánh răng → đi vệ sinh → đọc truyện/thơ → hát ru → tắt đèn.

Có thể làm một bảng tranh trình tự dán tường để bé tự xem "tiếp theo là gì".`,
  tryToday: "Viết ra trình tự buổi tối của nhà mình và giữ đúng thứ tự đó trong 7 ngày liền."
},
{
  id: "t11", ages: ["2-3", "4-6", "7-10"], title: "Khen nỗ lực, khen cụ thể", tags: ["khen ngợi", "tự tin"],
  content: `"Giỏi quá!" nói mãi sẽ mất tác dụng. Hãy mô tả cụ thể điều bé làm:
• "Con tự đi giày rồi! Con cố gắng mãi đấy."
• "Con chia cho bạn miếng bánh, bạn vui lắm."
• "Con xếp được 5 khối cao thật cao."

Khen nỗ lực (cố gắng, kiên trì) giúp bé không sợ thử thách, hơn là khen "thông minh".`,
  tryToday: "Thay mọi câu \"giỏi quá\" hôm nay bằng một câu mô tả cụ thể điều bé đã làm."
},
{
  id: "t12", ages: ["2-3", "4-6"], title: "Chơi chính là học", tags: ["vui chơi", "phát triển"],
  content: `Với bé 2 tuổi, chơi là cách học hiệu quả nhất: xếp khối học toán và vật lý, chơi đồ hàng học ngôn ngữ và xã hội, leo trèo học kiểm soát cơ thể.

Đồ chơi tốt nhất là đồ chơi "mở": khối gỗ, bóng, xe, đất nặn, nồi xoong, hộp giấy, cát, nước. Đồ chơi bấm nút phát nhạc thì bé chơi "thụ động" hơn.

Ba mẹ không cần dạy chữ, dạy số sớm. Chơi cùng bé là đủ.`,
  tryToday: "Cho bé chơi với một hộp giấy lớn hoặc nồi xoong — xem bé sáng tạo ra trò gì."
},
{
  id: "t13", ages: ["2-3", "4-6"], title: "Màn hình: càng ít càng tốt", tags: ["màn hình", "sức khỏe"],
  content: `WHO và Viện Hàn lâm Nhi khoa Hoa Kỳ (AAP) khuyến nghị: trẻ 2–5 tuổi xem màn hình không quá 1 giờ/ngày, nội dung chất lượng, và tốt nhất có ba mẹ xem cùng, nói chuyện về nội dung.

Không dùng màn hình trong bữa ăn và 1 giờ trước khi ngủ. Không dùng điện thoại để dỗ bé nín như thói quen — bé sẽ không học được cách tự điều chỉnh cảm xúc.

Ba mẹ cũng là tấm gương: hạn chế cầm điện thoại khi ở cạnh con.`,
  tryToday: "Chọn một khung giờ \"không điện thoại\" cho cả nhà (ví dụ bữa tối đến khi bé ngủ)."
},
{
  id: "t14", ages: ["2-3"], title: "Bé chưa biết chia sẻ — đó là bình thường", tags: ["hiểu con", "chia sẻ"],
  content: `Ở 2 tuổi, khái niệm "của mình" vừa hình thành. Bé chưa thể thật sự hiểu chia sẻ. Ép bé đưa đồ chơi cho bạn thường làm bé càng giữ chặt.

Thay vì ép, hãy dạy "lần lượt": "Bạn chơi xong thì đến lượt con." Dùng đồng hồ cát hoặc đếm. Ba mẹ làm mẫu chia sẻ hằng ngày: "Mẹ chia cho con nửa quả cam."

Cho phép bé có vài món "đặc biệt" không phải chia, cất đi khi có bạn đến chơi.`,
  tryToday: "Chơi trò \"lần lượt\" với bé: mỗi người được lăn bóng một lần, nói rõ \"lượt của mẹ – lượt của con\"."
},
{
  id: "t15", ages: ["2-3", "4-6"], title: "Khi bé đánh, cắn hoặc ném", tags: ["kỷ luật tích cực", "hành vi"],
  content: `Đánh, cắn là cách bé 2 tuổi biểu lộ cảm xúc khi chưa đủ lời. Đừng đánh lại bé ("để con biết đau") — việc đó dạy bé rằng đánh là cách giải quyết.

Cách làm:
1. Dừng ngay hành vi, bình tĩnh: "Mẹ không để con đánh. Đánh làm đau."
2. Gọi tên cảm xúc: "Con tức vì bạn lấy xe."
3. Chỉ cách khác: "Con nói: Của tớ! Hoặc gọi mẹ."
4. Quan tâm người bị đánh trước — bé sẽ thấy đánh không giúp được chú ý.`,
  tryToday: "Tập với bé câu ngắn thay cho đánh: \"Của tớ!\", \"Không thích!\", \"Mẹ ơi giúp!\""
},
{
  id: "t16", ages: ["2-3", "4-6", "7-10"], title: "\"Thời gian đặc biệt\" 10 phút mỗi ngày", tags: ["gắn kết", "vui chơi"],
  content: `Dành 10–15 phút mỗi ngày chỉ để chơi với bé theo cách bé muốn: bé dẫn dắt, ba mẹ theo. Không điện thoại, không dạy dỗ, không hỏi bài, không sửa.

Chỉ mô tả và hào hứng: "Con đang cho xe chạy lên dốc… ôi nhanh quá!"

Nhiều nghiên cứu về trị liệu tương tác cha mẹ – con cái (PCIT) cho thấy việc này giảm đáng kể hành vi chống đối, vì bé được "nạp đầy" sự chú ý tích cực.`,
  tryToday: "Đặt hẹn giờ 10 phút, để bé chọn trò chơi và chỉ chơi theo bé."
},
{
  id: "t17", ages: ["2-3", "4-6"], title: "Lặp lại là cách bé học", tags: ["hiểu con", "đọc sách"],
  content: `Bé đòi nghe một truyện 20 lần? Tuyệt vời. Lặp lại giúp bé ghi nhớ từ, đoán trước được diễn biến (tạo cảm giác làm chủ), và dần dần tự kể lại.

Mẹo: lần thứ 10, thử cố ý kể sai một chi tiết ("Con chó kêu… meo meo!") — bé sẽ cười và sửa lại. Hoặc bỏ lửng chữ cuối để bé tự điền.`,
  tryToday: "Kể lại truyện bé thích nhất, và bỏ lửng chữ cuối của mỗi câu để bé điền."
},
{
  id: "t18", ages: ["2-3"], title: "Cho bé tự làm, chấp nhận chậm và bừa", tags: ["tự lập"],
  content: `Bé 2 tuổi muốn tự làm: tự xúc cơm, tự đi giày, tự đổ nước. Ba mẹ làm thì nhanh và sạch hơn, nhưng bé sẽ mất cơ hội tập.

Hãy chuẩn bị môi trường để bé tự làm được: cốc nhỏ, bình nước nhỏ, ghế bậc để rửa tay, móc áo thấp, giày dán. Dành thêm thời gian buổi sáng.

Khi bé làm đổ: "Ồ, đổ rồi. Mình lấy khăn lau nhé" — bình thản, không mắng.`,
  tryToday: "Chọn một việc bé có thể tự làm (đi dép, lấy cốc nước, bỏ quần áo vào giỏ) và kiên nhẫn để bé làm."
},
{
  id: "t19", ages: ["2-3"], title: "Giai đoạn \"Không!\" là dấu hiệu bé đang lớn", tags: ["hiểu con", "tự lập"],
  content: `Bé nói "không" với mọi thứ là bé đang khám phá rằng mình là một con người riêng, có ý muốn riêng. Đây là bước phát triển lành mạnh.

Cách giảm đối đầu: cho lựa chọn, biến việc thành trò chơi ("Ai chạy vào nhà tắm trước nào?"), giảm số lệnh trong ngày, và chọn trận để "chiến" — chỉ kiên quyết với điều liên quan an toàn, sức khỏe, tôn trọng người khác.`,
  tryToday: "Biến một việc bé hay từ chối thành trò chơi (thi chạy, giả làm con vật, đóng vai)."
},
{
  id: "t20", ages: ["2-3", "4-6", "7-10"], title: "Giới hạn rõ ràng, nhất quán và tử tế", tags: ["kỷ luật tích cực"],
  content: `Trẻ cần giới hạn để cảm thấy an toàn. Giới hạn tốt thì: ít (chỉ vài luật quan trọng), rõ (bé hiểu được), nhất quán (hôm nay và ngày mai như nhau, ba và mẹ như nhau), và được nói bằng giọng bình tĩnh.

"Mẹ không để con chạm vào bếp. Bếp nóng." — lặp lại bao nhiêu lần cũng được, không cần quát.

Nếu hôm nay "không" mà mai khóc là được, bé sẽ học khóc nhiều hơn.`,
  tryToday: "Ba mẹ cùng thống nhất 3 luật quan trọng nhất trong nhà, và cách cả hai sẽ phản ứng khi bé vi phạm."
},
{
  id: "t21", ages: ["2-3", "4-6"], title: "Tạm lắng cùng con (time-in) thay vì phạt đứng góc", tags: ["kỷ luật tích cực", "cảm xúc"],
  content: `Với bé 2 tuổi, bắt đứng góc một mình thường khiến bé sợ hãi và cảm thấy bị bỏ rơi hơn là hiểu ra lỗi.

"Time-in": đưa bé ra khỏi tình huống, ngồi cùng bé ở một góc yên tĩnh (có gối, gấu bông, sách), giúp bé thở, gọi tên cảm xúc. Khi bé bình tĩnh, nói ngắn gọn về điều cần làm lần sau.

Mục tiêu của kỷ luật là dạy, không phải làm bé đau khổ.`,
  tryToday: "Chuẩn bị một \"góc bình yên\" trong nhà cùng bé: một chiếc gối, gấu bông, một cuốn sách."
},
{
  id: "t22", ages: ["2-3", "4-6", "7-10"], title: "Ba mẹ cũng được phép mắc lỗi — và xin lỗi con", tags: ["bản thân", "gắn kết"],
  content: `Không có cha mẹ hoàn hảo. Khi mình lỡ quát con, điều quan trọng là "sửa chữa": quay lại, ngồi xuống, nói "Lúc nãy ba quát to, ba xin lỗi. Ba mệt nên nóng. Ba thương con."

Việc này dạy bé: ai cũng có lúc sai, và cách nhận lỗi, làm lành. Sự gắn kết được củng cố sau mỗi lần sửa chữa.`,
  tryToday: "Nếu hôm nay lỡ nóng với con, hãy xin lỗi bé thật ngắn gọn và ôm bé."
},
{
  id: "t23", ages: ["2-3", "4-6", "7-10"], title: "Biết \"ngòi nổ\" của chính mình", tags: ["bản thân", "cảm xúc"],
  content: `Ba mẹ thường nổi nóng khi đói, thiếu ngủ, vội vàng, hoặc khi hành vi của con chạm vào ký ức tuổi thơ của mình.

Hãy để ý: mình hay mất bình tĩnh vào giờ nào, tình huống nào? Có thể chuẩn bị trước: ăn nhẹ trước khi đón con, dậy sớm 15 phút để không vội, thở 3 hơi trước khi phản ứng.

Khi thấy sắp nổ: "Ba cần bình tĩnh một chút" — đứng yên, thở sâu. Đó cũng là bài học cho con.`,
  tryToday: "Ghi lại một lần mình mất bình tĩnh gần đây: lúc đó mình đói/mệt/vội không? Lần sau sẽ làm gì khác?"
},
{
  id: "t24", ages: ["2-3", "4-6", "7-10"], title: "Chăm sóc bản thân không phải là ích kỷ", tags: ["bản thân", "sức khỏe gia đình"],
  content: `"Không thể rót nước từ một chiếc cốc rỗng." Ba mẹ kiệt sức thì khó kiên nhẫn với con.

Những việc nhỏ có ích: ngủ đủ nhất có thể, vận động nhẹ, gặp bạn bè, 15 phút yên tĩnh cho riêng mình mỗi ngày, nhờ ông bà/người thân giúp đỡ.

Nếu thấy buồn chán kéo dài, mất hứng thú, cáu gắt liên tục, mất ngủ hơn 2 tuần — hãy nói chuyện với bác sĩ. Trầm cảm, lo âu ở cha mẹ rất phổ biến và chữa được.`,
  tryToday: "Dành 15 phút hôm nay chỉ cho bản thân, và thay phiên để vợ/chồng cũng có 15 phút như vậy."
},
{
  id: "t25", ages: ["2-3", "4-6", "7-10"], title: "Ba và mẹ cùng một đội", tags: ["gia đình", "vợ chồng"],
  content: `Bé học cách yêu thương và giải quyết mâu thuẫn bằng cách nhìn ba mẹ đối xử với nhau.

• Thống nhất cách dạy trước, bất đồng thì nói riêng, không tranh cãi trước mặt con về cách dạy con.
• Không "phá" lời nhau trước mặt bé ("Mẹ nói không à? Thôi ba cho").
• Để bé thấy ba mẹ cảm ơn, ôm, giúp đỡ nhau.
• Nếu lỡ cãi nhau trước mặt bé, hãy để bé thấy cả lúc làm lành.`,
  tryToday: "Tối nay sau khi bé ngủ, ba mẹ dành 10 phút nói chuyện: tuần này con thế nào, mình muốn cùng thử điều gì."
},
{
  id: "t26", ages: ["2-3", "4-6", "7-10"], title: "Không so sánh con với \"con nhà người ta\"", tags: ["hiểu con", "tự tin"],
  content: `Mỗi bé phát triển theo nhịp riêng. Có bé nói sớm nhưng đi muộn, có bé vận động giỏi nhưng nói chậm. Sự khác biệt vài tháng là bình thường.

So sánh ("Sao bạn A nói được mà con không nói?") làm bé tổn thương và ba mẹ lo lắng không cần thiết.

Chỉ so bé với chính bé hôm qua. Nếu lo về một mốc phát triển cụ thể, hãy hỏi bác sĩ nhi thay vì so với con nhà hàng xóm.`,
  tryToday: "Viết ra 3 điều bé làm được tháng này mà tháng trước chưa làm được."
},
{
  id: "t27", ages: ["2-3"], title: "Các mốc ngôn ngữ ở tuổi 2–3", tags: ["phát triển", "ngôn ngữ"],
  content: `Theo CDC (Hoa Kỳ), khoảng 2 tuổi đa số trẻ: nói được ít nhất 50 từ, ghép 2 từ ("mẹ bế", "xe chạy"), chỉ được đồ vật trong sách khi được hỏi.

Khoảng 2,5 tuổi: nói câu 2–3 từ, nói được nhiều hành động ("ăn", "chạy").
Khoảng 3 tuổi: nói chuyện qua lại ít nhất 2 lượt, hỏi "cái gì/ở đâu/ai", người ngoài hiểu được phần lớn lời bé.

Nếu bé 2 tuổi chưa ghép được 2 từ, không bắt chước từ, hoặc mất kỹ năng đã có — hãy đưa bé đi khám chuyên khoa sớm. Can thiệp sớm rất hiệu quả.`,
  tryToday: "Ghi lại những từ bé nói được trong 1 ngày — bạn sẽ ngạc nhiên đấy."
},
{
  id: "t28", ages: ["2-3"], title: "Đọc sách cùng con: không cần đọc đúng chữ", tags: ["đọc sách", "ngôn ngữ"],
  content: `Với bé 2 tuổi, đọc sách là trò chuyện về tranh, không phải đọc chữ từ đầu đến cuối.

• Để bé chọn sách, lật trang, thậm chí đọc ngược hay bỏ trang.
• Hỏi: "Con mèo đâu?", "Bạn ấy đang làm gì?", "Con có cái này không?"
• Chọn sách bìa cứng, tranh to, ít chữ, có lật mở hoặc chạm.
• Bé bỏ đi giữa chừng cũng được — đọc tiếp, bé vẫn đang nghe.

Đọc 5–10 phút mỗi ngày đã tạo nền tảng ngôn ngữ rất lớn.`,
  tryToday: "Đọc một cuốn sách tranh mà không đọc chữ nào — chỉ hỏi và nói về những gì trong tranh."
},
{
  id: "t29", ages: ["2-3", "4-6", "7-10"], title: "Dạy bé gọi tên cơ thể và quyền riêng tư", tags: ["an toàn", "giáo dục giới tính"],
  content: `Từ 2–3 tuổi, có thể dạy bé:
• Tên đúng các bộ phận cơ thể, kể cả vùng kín (dùng từ đúng, không xấu hổ).
• "Vùng đồ bơi che là vùng riêng tư. Không ai được chạm vào, trừ khi ba mẹ tắm cho con hoặc bác sĩ khám có ba mẹ ở cạnh."
• "Nếu ai làm con khó chịu, con nói 'Không!' và kể với ba mẹ. Con sẽ không bị mắng."
• Tôn trọng bé: không ép bé ôm/hôn người khác nếu bé không muốn (có thể chào, vẫy tay thay thế).`,
  tryToday: "Khi tắm cho bé, gọi tên các bộ phận cơ thể và nói đơn giản về vùng riêng tư."
},
{
  id: "t30", ages: ["2-3"], title: "Đi bô: chờ bé sẵn sàng", tags: ["tự lập", "đi vệ sinh"],
  content: `Phần lớn trẻ sẵn sàng tập đi bô trong khoảng 2–3 tuổi, nhưng không có tuổi "chuẩn". Dấu hiệu sẵn sàng:
• Tã khô ít nhất 2 giờ liền.
• Bé biết báo (bằng lời hoặc cử chỉ) khi đang tè/ị.
• Bé khó chịu khi tã bẩn, thích bắt chước người lớn vào nhà vệ sinh.
• Bé tự kéo quần lên xuống được.

Không ép, không la mắng, không so sánh. Ép sớm thường làm kéo dài thời gian tập. Tạm dừng nếu nhà có biến động lớn (em bé mới, chuyển nhà).`,
  tryToday: "Quan sát và ghi lại xem bé đã có những dấu hiệu sẵn sàng nào."
},
{
  id: "t31", ages: ["2-3"], title: "Kênh năng lượng cho bé hiếu động", tags: ["vận động", "hiểu con"],
  content: `Bé nhiều năng lượng cần được vận động nhiều — WHO khuyến nghị trẻ 1–4 tuổi vận động ít nhất 3 giờ/ngày (rải rác trong ngày), không ngồi một chỗ quá 1 giờ liền.

Ý tưởng: chơi ngoài trời mỗi ngày, đường chướng ngại bằng gối, nhảy theo nhạc, đá bóng, đẩy xe, đi xe chòi chân, leo cầu trượt. Bé được vận động đủ thì dễ ngồi yên hơn lúc ăn và ngủ ngon hơn.

Trước giờ đọc truyện/ăn tối, cho bé chạy nhảy 15 phút rồi mới chuyển sang hoạt động tĩnh.`,
  tryToday: "Làm một đường chướng ngại bằng gối, ghế, hộp giấy trong nhà cho bé bò, nhảy, chui."
},
{
  id: "t32", ages: ["2-3"], title: "Lo âu chia ly là dấu hiệu gắn bó", tags: ["cảm xúc", "hiểu con"],
  content: `Bé khóc khi ba mẹ đi làm hay đi nhà trẻ là vì bé gắn bó an toàn với ba mẹ.

• Luôn chào tạm biệt, đừng lén đi (lén đi làm bé mất niềm tin, càng bám hơn).
• Tạm biệt ngắn gọn, vui vẻ, có nghi thức riêng (ôm 3 cái, đập tay).
• Nói rõ khi nào về bằng mốc bé hiểu: "Ăn chiều xong là mẹ về."
• Về đúng hẹn, và đón bé với thật nhiều niềm vui.`,
  tryToday: "Tạo một nghi thức tạm biệt riêng với bé (ví dụ: ôm – thơm – đập tay – vẫy cửa sổ)."
},
{
  id: "t33", ages: ["2-3", "4-6", "7-10"], title: "Bữa cơm gia đình", tags: ["ăn uống", "gia đình"],
  content: `Ăn cùng nhau, ít nhất một bữa mỗi ngày, giúp bé học ăn đa dạng (bắt chước người lớn), học nói chuyện và cảm thấy thuộc về gia đình.

• Tắt TV, cất điện thoại.
• Ba mẹ quyết định ăn gì, khi nào, ở đâu; bé quyết định ăn bao nhiêu (nguyên tắc chia trách nhiệm của Ellyn Satter).
• Không ép, không dụ thưởng, không dọa. Bữa ăn khoảng 20–30 phút, hết giờ thì dọn.
• Nói chuyện vui: "Hôm nay con chơi gì?"`,
  tryToday: "Ăn tối cùng nhau không có màn hình, mỗi người kể một điều vui trong ngày."
},
{
  id: "t34", ages: ["2-3", "4-6"], title: "Cho bé làm việc nhà nhỏ", tags: ["tự lập", "giúp đỡ"],
  content: `Bé 2–3 tuổi rất thích "giúp": bỏ đồ bẩn vào giỏ, lau bàn, tưới cây, mang thìa ra bàn, nhặt rau, cho cá ăn, xếp tất thành đôi.

Làm việc nhà giúp bé tự tin, phát triển vận động tinh, và cảm thấy mình có ích trong gia đình. Việc có thể chậm và chưa sạch — đó không phải điều quan trọng.

Nói "Cảm ơn con đã giúp" thay vì thưởng quà.`,
  tryToday: "Mời bé giúp một việc nhà hôm nay và cảm ơn bé."
},
{
  id: "t35", ages: ["2-3", "4-6"], title: "Bé sợ hãi: đừng gạt đi", tags: ["cảm xúc", "nỗi sợ"],
  content: `Bé 2–3 tuổi bắt đầu có nhiều nỗi sợ: bóng tối, tiếng máy hút bụi, chó, người lạ. Trí tưởng tượng phát triển nhanh hơn khả năng phân biệt thật – giả.

Đừng nói "Có gì đâu mà sợ!" hay chế giễu. Hãy công nhận: "Tiếng máy to quá, con sợ. Mẹ ôm con." Rồi giúp bé tiếp cận từ từ: nhìn máy hút bụi khi tắt, cho bé bấm nút, đọc sách về chó trước khi gặp chó thật.

Không dùng nỗi sợ để dọa bé ("Không ngủ ông kẹ bắt").`,
  tryToday: "Hỏi bé (hoặc quan sát): con sợ điều gì nhất? Nghĩ một cách giúp bé làm quen dần."
},
{
  id: "t36", ages: ["2-3", "4-6"], title: "Thì thầm khi muốn bé chú ý", tags: ["giao tiếp", "mẹo"],
  content: `Khi nhà ồn ào hoặc bé đang hăng, quát to chỉ làm mọi thứ ồn hơn. Hãy thử… thì thầm. Bé sẽ tò mò và im lặng để nghe.

Các mẹo khác: hát lời nhắc thay vì nói ("Giờ mình đi tắm, đi tắm, đi tắm…"), nói bằng giọng con vật, để một con rối "nhắc" bé.`,
  tryToday: "Lần tới cần bé chú ý, hãy ngồi xuống và thì thầm."
},
{
  id: "t37", ages: ["2-3", "4-6", "7-10"], title: "Cho bé chơi ngoài trời và chơi \"mạo hiểm\" an toàn", tags: ["vận động", "tự tin"],
  content: `Leo trèo, giữ thăng bằng, chạy trên cỏ, nghịch cát, nghịch nước giúp bé phát triển vận động, giác quan và sự tự tin. Trẻ chơi ngoài trời đều đặn còn giảm nguy cơ cận thị.

Thay vì "Cẩn thận! Ngã bây giờ!", hãy nói: "Con đặt chân vào đâu nhỉ?", "Con thấy chắc chưa?", "Bám chặt tay nhé". Ba mẹ ở gần, giám sát, nhưng để bé tự thử.

Luôn giám sát sát sao gần nước, đường xe, chỗ cao trên 1 mét.`,
  tryToday: "Đưa bé ra công viên, để bé tự leo một chỗ vừa sức, chỉ đứng gần và hỏi thay vì nhắc \"cẩn thận\"."
},
{
  id: "t38", ages: ["2-3", "4-6", "7-10"], title: "Mỗi tối nhìn lại: 3 điều tốt về con", tags: ["bản thân", "gắn kết"],
  content: `Não người tự nhiên chú ý vào điều tiêu cực. Cả ngày ba mẹ có thể chỉ nhớ những lần con ăn vạ.

Mỗi tối, viết hoặc nghĩ đến 3 khoảnh khắc đẹp với con: lần con cười, câu nói ngộ nghĩnh, lần con tự làm được một việc. Thói quen biết ơn giúp ba mẹ bớt căng thẳng và nhìn con bằng ánh mắt dịu dàng hơn.

Bạn có thể dùng phần "Ghi chú" trong ứng dụng này để lưu lại những câu nói đáng yêu của con.`,
  tryToday: "Tối nay trước khi ngủ, nghĩ về 3 khoảnh khắc đẹp với con hôm nay."
},
{
  id: "t39", ages: ["2-3", "4-6", "7-10"], title: "Bé học bằng cách bắt chước ba mẹ", tags: ["làm gương"],
  content: `Bé 2 tuổi là "chiếc máy quay": bé học cách nói, cách xử lý cảm xúc, cách đối xử với người khác qua những gì nhìn thấy hằng ngày, nhiều hơn mọi lời dạy.

Muốn bé nói "cảm ơn" → ba mẹ nói cảm ơn với con, với nhau.
Muốn bé ăn rau → ba mẹ ăn rau ngon lành.
Muốn bé ít xem điện thoại → ba mẹ cất điện thoại.
Muốn bé bình tĩnh → ba mẹ thở sâu khi bực.`,
  tryToday: "Chọn một thói quen muốn con có, và tự mình làm thật rõ ràng trước mặt bé hôm nay."
},
{
  id: "t40", ages: ["2-3", "4-6", "7-10"], title: "Ôm và chạm: ngôn ngữ yêu thương", tags: ["gắn kết", "yêu thương"],
  content: `Ôm, vuốt lưng, bế, xoa bóp nhẹ giúp cơ thể bé giảm hormone căng thẳng và cảm thấy an toàn. Bé được ôm nhiều không bị "hư", mà ngược lại tự tin khám phá thế giới hơn vì biết luôn có chỗ dựa.

Thử: ôm 20 giây khi đón bé, mát-xa chân sau khi tắm, "bánh mì kẹp" (ba và mẹ cùng ôm bé ở giữa).`,
  tryToday: "Ôm bé ít nhất 5 lần hôm nay, mỗi lần đủ lâu (khoảng 20 giây)."
}
];
