// Tiếng Anh mỗi ngày — từ vựng & câu giao tiếp đơn giản, dùng xen kẽ với tiếng Việt trong sinh hoạt.
// words: [tiếng Anh, nghĩa tiếng Việt]; phrases: [câu tiếng Anh, nghĩa]. Bấm 🔊 trong app để nghe phát âm.
// Bài hát: chỉ chép lời các bài đồng dao tiếng Anh cổ (public domain).
window.DATA_ENGLISH = [
// ===================== 2–3 tuổi =====================
{
  id: "e01", ages: ["2-3", "4-6"], title: "Chào hỏi — Hello!", tags: ["chào hỏi", "buổi sáng"],
  words: [["hello", "xin chào"], ["bye-bye", "tạm biệt"], ["good morning", "chào buổi sáng"], ["good night", "chúc ngủ ngon"], ["mommy", "mẹ"], ["daddy", "ba"]],
  phrases: [["Good morning, baby!", "Chào buổi sáng con yêu!"], ["Say hello!", "Con chào đi!"], ["Bye-bye, Daddy!", "Tạm biệt ba!"], ["Good night. I love you.", "Chúc ngủ ngon. Ba/mẹ thương con."]],
  howto: "Mỗi sáng nói \"Good morning!\" khi bé vừa mở mắt, mỗi tối nói \"Good night!\" sau khi đọc truyện. Vẫy tay khi nói \"bye-bye\". Lặp lại mỗi ngày là bé tự nói theo."
},
{
  id: "e02", ages: ["2-3"], title: "Gia đình — My family", tags: ["gia đình"],
  words: [["mommy", "mẹ"], ["daddy", "ba"], ["baby", "em bé"], ["grandma", "bà"], ["grandpa", "ông"], ["brother", "anh/em trai"], ["sister", "chị/em gái"]],
  phrases: [["Where is Daddy?", "Ba đâu rồi?"], ["Here is Mommy!", "Mẹ đây rồi!"], ["Give Grandma a hug.", "Ôm bà một cái nào."], ["I love you!", "Con thương ba/mẹ!"]],
  howto: "Xem ảnh gia đình, chỉ vào từng người: \"Who is this? — Grandma!\" Chơi ú òa: \"Where is Daddy?… Here he is!\""
},
{
  id: "e03", ages: ["2-3", "4-6"], title: "Cơ thể — Head, shoulders…", tags: ["cơ thể", "vận động"],
  words: [["head", "đầu"], ["eyes", "mắt"], ["nose", "mũi"], ["mouth", "miệng"], ["ears", "tai"], ["hands", "tay"], ["feet", "bàn chân"], ["tummy", "bụng"]],
  phrases: [["Where is your nose?", "Mũi con đâu?"], ["Touch your head!", "Chạm vào đầu nào!"], ["Wash your hands.", "Rửa tay nào."], ["Clap your hands!", "Vỗ tay nào!"]],
  howto: "Khi tắm, khi thay đồ: \"Where is your tummy?\" — bé chỉ vào bụng. Đảo vai: bé hỏi, ba mẹ chỉ (cố ý chỉ sai để bé sửa).",
  song: { title: "Head, Shoulders, Knees and Toes (đồng dao truyền thống)", lyrics: `Head, shoulders, knees and toes, knees and toes
Head, shoulders, knees and toes, knees and toes
And eyes and ears and mouth and nose
Head, shoulders, knees and toes, knees and toes!` }
},
{
  id: "e04", ages: ["2-3", "4-6"], title: "Màu sắc — Colors", tags: ["màu sắc"],
  words: [["red", "đỏ"], ["blue", "xanh dương"], ["yellow", "vàng"], ["green", "xanh lá"], ["pink", "hồng"], ["orange", "cam"], ["white", "trắng"], ["black", "đen"]],
  phrases: [["What color is it?", "Cái này màu gì?"], ["It's red!", "Màu đỏ!"], ["A red car!", "Xe ô tô màu đỏ!"], ["Find something blue.", "Tìm một thứ màu xanh dương."]],
  howto: "Chơi \"I spy\": \"Find something yellow!\" — bé chạy đi tìm đồ màu vàng trong nhà. Rất hợp với bé hiếu động!"
},
{
  id: "e05", ages: ["2-3"], title: "Đếm số 1–5 — Let's count!", tags: ["đếm số"],
  words: [["one", "một"], ["two", "hai"], ["three", "ba"], ["four", "bốn"], ["five", "năm"]],
  phrases: [["Let's count!", "Mình cùng đếm nào!"], ["How many?", "Bao nhiêu?"], ["One more!", "Thêm một nữa!"], ["Ready, set, go!", "Chuẩn bị, sẵn sàng, chạy!"]],
  howto: "Đếm bậc cầu thang khi leo, đếm thìa cơm, đếm ngón tay. Trước khi chạy thi: \"One, two, three — go!\"",
  song: { title: "One, Two, Buckle My Shoe (đồng dao cổ)", lyrics: `One, two, buckle my shoe
Three, four, knock at the door
Five, six, pick up sticks
Seven, eight, lay them straight
Nine, ten, a big fat hen!` }
},
{
  id: "e06", ages: ["2-3", "4-6"], title: "Con vật — Animals", tags: ["con vật", "âm thanh"],
  words: [["dog", "con chó"], ["cat", "con mèo"], ["duck", "con vịt"], ["cow", "con bò"], ["pig", "con lợn"], ["chicken", "con gà"], ["fish", "con cá"], ["bird", "con chim"]],
  phrases: [["What does the dog say?", "Con chó kêu thế nào?"], ["Woof woof!", "Gâu gâu!"], ["The cat says meow.", "Con mèo kêu meo."], ["Look, a bird!", "Nhìn kìa, con chim!"]],
  howto: "Chú ý: tiếng kêu con vật trong tiếng Anh khác tiếng Việt (dog: woof, duck: quack, pig: oink, cow: moo) — bé thấy rất buồn cười!",
  song: { title: "Old MacDonald Had a Farm (đồng dao cổ)", lyrics: `Old MacDonald had a farm, E-I-E-I-O
And on his farm he had a cow, E-I-E-I-O
With a moo moo here and a moo moo there
Here a moo, there a moo, everywhere a moo moo
Old MacDonald had a farm, E-I-E-I-O!

(Đổi con vật: duck – quack, pig – oink, dog – woof…)` }
},
{
  id: "e07", ages: ["2-3"], title: "Ăn uống — Yummy!", tags: ["ăn uống"],
  words: [["milk", "sữa"], ["water", "nước"], ["rice", "cơm"], ["banana", "chuối"], ["apple", "táo"], ["egg", "trứng"], ["spoon", "thìa"], ["bowl", "bát"]],
  phrases: [["Are you hungry?", "Con đói không?"], ["Yummy!", "Ngon quá!"], ["More, please.", "Cho con thêm ạ."], ["All done!", "Ăn xong rồi!"], ["Drink some water.", "Uống chút nước nào."]],
  howto: "Trong bữa ăn, dùng 2–3 câu cố định: \"Yummy!\", \"More, please?\", \"All done!\". Dạy bé làm ký hiệu tay \"more\" (chụm hai đầu ngón tay) và \"all done\" (xòe tay lắc)."
},
{
  id: "e08", ages: ["2-3"], title: "Đồ chơi — Toys", tags: ["vui chơi", "dọn dẹp"],
  words: [["ball", "quả bóng"], ["car", "xe ô tô"], ["blocks", "khối xếp hình"], ["teddy bear", "gấu bông"], ["book", "sách"], ["train", "tàu hỏa"], ["box", "hộp"]],
  phrases: [["Let's play!", "Mình chơi nào!"], ["Throw the ball!", "Ném bóng nào!"], ["My turn, your turn.", "Lượt của ba/mẹ, lượt của con."], ["Clean up time!", "Đến giờ dọn dẹp!"]],
  howto: "Khi dọn đồ chơi hát: \"Clean up, clean up, everybody clean up!\" Chơi lăn bóng và nói \"My turn — your turn\" để tập chờ lượt.",
  song: { title: "Bài hát dọn dẹp (tự chế, hát theo giai điệu bất kỳ)", lyrics: `Clean up, clean up
Everybody, everywhere
Clean up, clean up
Everybody do your share!` }
},
{
  id: "e09", ages: ["2-3", "4-6"], title: "Hành động — Jump! Run!", tags: ["vận động", "hành động"],
  words: [["jump", "nhảy"], ["run", "chạy"], ["walk", "đi bộ"], ["stop", "dừng lại"], ["sit down", "ngồi xuống"], ["stand up", "đứng lên"], ["dance", "nhảy múa"], ["clap", "vỗ tay"]],
  phrases: [["Jump, jump, jump!", "Nhảy, nhảy, nhảy!"], ["Run fast!", "Chạy nhanh!"], ["Stop!", "Dừng!"], ["Let's dance!", "Mình nhảy múa nào!"], ["Can you jump like a frog?", "Con nhảy như ếch được không?"]],
  howto: "Trò \"Simon says\" đơn giản cho bé hiếu động: ba mẹ hô \"Jump!\" — bé nhảy, \"Stop!\" — bé đứng im như tượng. Xả năng lượng mà vẫn học từ."
},
{
  id: "e10", ages: ["2-3"], title: "Giờ tắm — Bath time", tags: ["tắm", "vệ sinh"],
  words: [["bath", "tắm"], ["water", "nước"], ["soap", "xà phòng"], ["bubbles", "bong bóng"], ["towel", "khăn tắm"], ["wet", "ướt"], ["dry", "khô"], ["clean", "sạch"]],
  phrases: [["Bath time!", "Giờ tắm rồi!"], ["Splash, splash!", "Té nước tung tóe!"], ["Wash your hair.", "Gội đầu nào."], ["You're all clean!", "Con sạch sẽ rồi!"]],
  howto: "Tắm là lúc tuyệt vời để nói tiếng Anh vì luôn lặp lại: \"Wash your hands… wash your feet… wash your tummy!\"",
  song: { title: "This Is the Way (đồng dao cổ, giai điệu \"Here We Go Round the Mulberry Bush\")", lyrics: `This is the way we wash our hands
Wash our hands, wash our hands
This is the way we wash our hands
So early in the morning!

(Đổi: brush our teeth, wash our face, comb our hair…)` }
},
{
  id: "e11", ages: ["2-3", "4-6"], title: "Giờ ngủ — Bedtime", tags: ["đi ngủ", "buổi tối"],
  words: [["bed", "giường"], ["pillow", "gối"], ["blanket", "chăn"], ["moon", "mặt trăng"], ["star", "ngôi sao"], ["sleepy", "buồn ngủ"], ["dream", "giấc mơ"]],
  phrases: [["Time for bed.", "Đến giờ ngủ rồi."], ["Are you sleepy?", "Con buồn ngủ chưa?"], ["Close your eyes.", "Nhắm mắt lại nào."], ["Sweet dreams!", "Mơ đẹp nhé!"], ["Good night, moon!", "Chúc ông trăng ngủ ngon!"]],
  howto: "Thêm một câu tiếng Anh vào nghi thức đi ngủ: sau \"Chúc con ngủ ngon\" là \"Good night, sweet dreams!\"",
  song: { title: "Twinkle, Twinkle, Little Star (Jane Taylor, 1806)", lyrics: `Twinkle, twinkle, little star
How I wonder what you are
Up above the world so high
Like a diamond in the sky
Twinkle, twinkle, little star
How I wonder what you are!` }
},
{
  id: "e12", ages: ["2-3", "4-6"], title: "Cảm xúc — Happy, sad", tags: ["cảm xúc"],
  words: [["happy", "vui"], ["sad", "buồn"], ["angry", "tức giận"], ["scared", "sợ"], ["tired", "mệt"], ["hungry", "đói"]],
  phrases: [["Are you happy?", "Con vui không?"], ["I'm happy!", "Con vui!"], ["You look sad.", "Trông con buồn quá."], ["It's okay to be angry.", "Tức giận cũng không sao."], ["Do you need a hug?", "Con cần ôm không?"]],
  howto: "Làm mặt vui/buồn/giận, hỏi bé \"Happy or sad?\". Dùng tiếng Việt khi bé đang thật sự buồn — tiếng Anh dành cho lúc chơi."
},
{
  id: "e13", ages: ["2-3", "4-6"], title: "Lời lễ phép — Please & thank you", tags: ["lễ phép"],
  words: [["please", "làm ơn / xin"], ["thank you", "cảm ơn"], ["sorry", "xin lỗi"], ["you're welcome", "không có gì"], ["excuse me", "xin phép / xin lỗi"]],
  phrases: [["Can I have some, please?", "Cho con xin một ít ạ?"], ["Thank you, Mommy!", "Con cảm ơn mẹ!"], ["You're welcome!", "Không có gì!"], ["I'm sorry.", "Con xin lỗi."]],
  howto: "Mỗi lần đưa đồ cho bé, chờ một chút để bé nói \"thank you\" (hoặc \"cảm ơn\" — cả hai đều được khen!)."
},
{
  id: "e14", ages: ["2-3", "4-6"], title: "Xe cộ — Vehicles", tags: ["xe cộ"],
  words: [["car", "ô tô"], ["bus", "xe buýt"], ["truck", "xe tải"], ["train", "tàu hỏa"], ["plane", "máy bay"], ["boat", "thuyền"], ["bike", "xe đạp"], ["motorbike", "xe máy"]],
  phrases: [["Look, a bus!", "Nhìn kìa, xe buýt!"], ["Beep beep!", "Bim bim!"], ["The plane is flying.", "Máy bay đang bay."], ["Let's go!", "Đi thôi!"]],
  howto: "Khi đi đường, chỉ xe và nói tên tiếng Anh. Chơi đoán: ba mẹ kêu \"choo choo\" — bé đoán \"train!\"",
  song: { title: "Row, Row, Row Your Boat (đồng dao cổ)", lyrics: `Row, row, row your boat
Gently down the stream
Merrily, merrily, merrily, merrily
Life is but a dream!` }
},
{
  id: "e15", ages: ["2-3", "4-6"], title: "Thời tiết — Sunny, rainy", tags: ["thời tiết", "thiên nhiên"],
  words: [["sun", "mặt trời"], ["sunny", "nắng"], ["rain", "mưa"], ["rainy", "trời mưa"], ["wind", "gió"], ["cloud", "mây"], ["hot", "nóng"], ["cold", "lạnh"]],
  phrases: [["It's sunny today!", "Hôm nay trời nắng!"], ["It's raining.", "Trời đang mưa."], ["It's hot!", "Nóng quá!"], ["Put on your raincoat.", "Mặc áo mưa vào."]],
  howto: "Mỗi sáng mở cửa sổ cùng bé: \"How's the weather? — Sunny!\" Một thói quen 10 giây mỗi ngày.",
  song: { title: "Rain, Rain, Go Away (đồng dao cổ)", lyrics: `Rain, rain, go away
Come again another day
Little baby wants to play
Rain, rain, go away!` }
},

// ===================== 4–6 tuổi =====================
{
  id: "e20", ages: ["4-6"], title: "Đếm số 1–20 — Numbers", tags: ["đếm số", "toán"],
  words: [["six", "sáu"], ["seven", "bảy"], ["eight", "tám"], ["nine", "chín"], ["ten", "mười"], ["eleven", "mười một"], ["twelve", "mười hai"], ["twenty", "hai mươi"]],
  phrases: [["How old are you?", "Con mấy tuổi?"], ["I'm five years old.", "Con năm tuổi."], ["How many apples?", "Có bao nhiêu quả táo?"], ["There are ten.", "Có mười quả."]],
  howto: "Đếm số bước chân từ cửa đến bàn, đếm hạt khi ăn. Tập trả lời \"How old are you?\" bằng cả câu."
},
{
  id: "e21", ages: ["4-6"], title: "Hình khối — Shapes", tags: ["hình học", "toán"],
  words: [["circle", "hình tròn"], ["square", "hình vuông"], ["triangle", "hình tam giác"], ["rectangle", "hình chữ nhật"], ["star", "ngôi sao"], ["heart", "trái tim"], ["big", "to"], ["small", "nhỏ"]],
  phrases: [["What shape is it?", "Đây là hình gì?"], ["It's a circle.", "Đây là hình tròn."], ["The window is a square.", "Cửa sổ là hình vuông."], ["Draw a big heart.", "Vẽ một trái tim to."]],
  howto: "Đi \"săn hình\" trong nhà: \"Find a circle!\" (đồng hồ, đĩa), \"Find a rectangle!\" (cửa, sách)."
},
{
  id: "e22", ages: ["4-6", "7-10"], title: "Ngày trong tuần — Days of the week", tags: ["thời gian"],
  words: [["Monday", "thứ Hai"], ["Tuesday", "thứ Ba"], ["Wednesday", "thứ Tư"], ["Thursday", "thứ Năm"], ["Friday", "thứ Sáu"], ["Saturday", "thứ Bảy"], ["Sunday", "Chủ nhật"], ["today", "hôm nay"]],
  phrases: [["What day is it today?", "Hôm nay là thứ mấy?"], ["Today is Monday.", "Hôm nay là thứ Hai."], ["See you tomorrow!", "Hẹn gặp ngày mai!"], ["We go to the park on Sunday.", "Chủ nhật mình đi công viên."]],
  howto: "Mỗi sáng hỏi \"What day is it today?\" và chỉ lên lịch. Gắn mỗi ngày với một hoạt động (Sunday = park day).",
  song: { title: "Days of the Week (hát theo giai điệu \"The Addams Family\" hoặc tự chế)", lyrics: `Sunday, Monday, Tuesday
Wednesday, Thursday, Friday
And then comes Saturday
Seven days a week!` }
},
{
  id: "e23", ages: ["4-6"], title: "Quần áo — Clothes", tags: ["quần áo", "tự lập"],
  words: [["shirt", "áo"], ["pants", "quần dài"], ["shorts", "quần đùi"], ["dress", "váy"], ["shoes", "giày"], ["socks", "tất"], ["hat", "mũ"], ["jacket", "áo khoác"]],
  phrases: [["Get dressed, please.", "Con mặc quần áo nhé."], ["Put on your shoes.", "Đi giày vào."], ["Take off your hat.", "Cởi mũ ra."], ["Which shirt do you want?", "Con muốn mặc áo nào?"], ["The red one!", "Cái màu đỏ!"]],
  howto: "Mỗi sáng cho bé chọn: \"The blue shirt or the yellow shirt?\" Bé trả lời được bằng tiếng Anh thì càng vui."
},
{
  id: "e24", ages: ["4-6"], title: "Trái cây — Fruits", tags: ["ăn uống", "trái cây"],
  words: [["mango", "xoài"], ["orange", "cam"], ["watermelon", "dưa hấu"], ["grapes", "nho"], ["papaya", "đu đủ"], ["strawberry", "dâu tây"], ["coconut", "dừa"], ["pineapple", "dứa"]],
  phrases: [["I like mangoes.", "Con thích xoài."], ["Do you like papaya?", "Con có thích đu đủ không?"], ["Yes, I do. / No, I don't.", "Có ạ. / Không ạ."], ["It's sweet!", "Ngọt quá!"], ["It's sour!", "Chua quá!"]],
  howto: "Khi ăn trái cây, hỏi \"Do you like it?\" — tập trả lời \"Yes, I do / No, I don't\". Đi chợ cho bé gọi tên trái cây."
},
{
  id: "e25", ages: ["4-6"], title: "Ngôi nhà — My house", tags: ["ngôi nhà"],
  words: [["kitchen", "bếp"], ["bedroom", "phòng ngủ"], ["bathroom", "phòng tắm"], ["living room", "phòng khách"], ["door", "cửa"], ["window", "cửa sổ"], ["table", "bàn"], ["chair", "ghế"]],
  phrases: [["Where is Mommy?", "Mẹ đâu rồi?"], ["She's in the kitchen.", "Mẹ ở trong bếp."], ["Open the door, please.", "Con mở cửa giúp nhé."], ["Close the window.", "Đóng cửa sổ lại."]],
  howto: "Chơi trốn tìm và nói tên phòng: \"Is Daddy in the bedroom? No! Is he in the kitchen? Yes!\""
},
{
  id: "e26", ages: ["4-6"], title: "Trái nghĩa — Big & small", tags: ["tính từ"],
  words: [["big", "to"], ["small", "nhỏ"], ["hot", "nóng"], ["cold", "lạnh"], ["fast", "nhanh"], ["slow", "chậm"], ["up", "lên"], ["down", "xuống"], ["open", "mở"], ["close", "đóng"]],
  phrases: [["The elephant is big.", "Con voi to."], ["The ant is small.", "Con kiến nhỏ."], ["Run fast! Walk slow!", "Chạy nhanh! Đi chậm!"], ["Hands up! Hands down!", "Giơ tay lên! Hạ tay xuống!"]],
  howto: "Chơi vận động: \"Fast!\" — chạy nhanh, \"Slow!\" — đi chậm như rùa, \"Up!\" — kiễng chân, \"Down!\" — ngồi xổm."
},
{
  id: "e27", ages: ["4-6"], title: "Vị trí — In, on, under", tags: ["giới từ"],
  words: [["in", "trong"], ["on", "trên"], ["under", "dưới"], ["next to", "bên cạnh"], ["behind", "phía sau"], ["in front of", "phía trước"]],
  phrases: [["Where is the ball?", "Quả bóng ở đâu?"], ["It's under the table.", "Nó ở dưới gầm bàn."], ["Put the book on the shelf.", "Đặt sách lên kệ."], ["The cat is behind the door.", "Con mèo ở sau cánh cửa."]],
  howto: "Giấu gấu bông ở nhiều chỗ, bé tìm rồi nói vị trí. Đảo vai: bé ra lệnh \"Put the car under the chair!\""
},
{
  id: "e28", ages: ["4-6"], title: "Nghề nghiệp — Jobs", tags: ["nghề nghiệp"],
  words: [["doctor", "bác sĩ"], ["teacher", "giáo viên"], ["police officer", "cảnh sát"], ["firefighter", "lính cứu hỏa"], ["farmer", "nông dân"], ["cook", "đầu bếp"], ["driver", "tài xế"], ["engineer", "kỹ sư"]],
  phrases: [["What do you want to be?", "Con muốn làm nghề gì?"], ["I want to be a doctor.", "Con muốn làm bác sĩ."], ["A doctor helps sick people.", "Bác sĩ giúp người bệnh."], ["What does Daddy do?", "Ba làm nghề gì?"]],
  howto: "Chơi đóng vai: bé làm doctor khám cho gấu bông, làm cook nấu ăn đồ chơi. Giới thiệu nghề của ba mẹ bằng tiếng Anh."
},
{
  id: "e29", ages: ["4-6", "7-10"], title: "Hỏi đáp cơ bản — What's this?", tags: ["hỏi đáp", "giao tiếp"],
  words: [["what", "cái gì"], ["where", "ở đâu"], ["who", "ai"], ["this", "cái này"], ["that", "cái kia"], ["name", "tên"]],
  phrases: [["What's this? — It's a pen.", "Đây là gì? — Đây là cái bút."], ["What's your name? — My name is…", "Con tên gì? — Con tên là…"], ["Who is that? — That's my friend.", "Kia là ai? — Đó là bạn con."], ["Where is my bag?", "Cặp của con đâu?"]],
  howto: "Chơi \"hộp bí mật\": bỏ đồ vật vào túi, bé sờ rồi đoán \"What's this?\" — \"It's a…!\" Tập giới thiệu tên khi gặp người mới."
},
{
  id: "e30", ages: ["4-6", "7-10"], title: "Sở thích — I like…", tags: ["sở thích", "giao tiếp"],
  words: [["like", "thích"], ["love", "rất thích / yêu"], ["don't like", "không thích"], ["favorite", "yêu thích nhất"], ["draw", "vẽ"], ["sing", "hát"], ["swim", "bơi"], ["play football", "đá bóng"]],
  phrases: [["I like drawing.", "Con thích vẽ."], ["What's your favorite color?", "Màu con thích nhất là gì?"], ["My favorite animal is the tiger.", "Con vật con thích nhất là con hổ."], ["I don't like spiders!", "Con không thích nhện!"]],
  howto: "Trong bữa tối, mỗi người nói một câu \"I like…\" và \"I don't like…\". Ba mẹ nói trước để làm mẫu."
},
{
  id: "e31", ages: ["4-6"], title: "Thói quen hằng ngày — Daily routine", tags: ["thói quen"],
  words: [["wake up", "thức dậy"], ["brush teeth", "đánh răng"], ["eat breakfast", "ăn sáng"], ["go to school", "đi học"], ["take a bath", "đi tắm"], ["go to bed", "đi ngủ"]],
  phrases: [["Wake up, sleepyhead!", "Dậy thôi, chú mèo lười!"], ["Let's brush our teeth.", "Mình đi đánh răng nào."], ["Time to go to school!", "Đến giờ đi học rồi!"], ["What did you do today?", "Hôm nay con đã làm gì?"]],
  howto: "Dùng đúng câu tiếng Anh đó mỗi ngày vào đúng thời điểm. Sau 2–3 tuần, bé sẽ hiểu mà không cần dịch."
},

// ===================== 7–10 tuổi =====================
{
  id: "e40", ages: ["7-10"], title: "Xem giờ — What time is it?", tags: ["thời gian"],
  words: [["o'clock", "giờ đúng"], ["half past", "rưỡi"], ["quarter", "mười lăm phút"], ["morning", "buổi sáng"], ["afternoon", "buổi chiều"], ["evening", "buổi tối"], ["early", "sớm"], ["late", "muộn"]],
  phrases: [["What time is it?", "Mấy giờ rồi?"], ["It's seven o'clock.", "Bảy giờ đúng."], ["It's half past eight.", "Tám giờ rưỡi."], ["Hurry up, we're late!", "Nhanh lên, mình muộn rồi!"], ["I get up at six thirty.", "Con dậy lúc sáu giờ ba mươi."]],
  howto: "Thay vì nói giờ bằng tiếng Việt, hỏi con \"What time is it?\" và để con đọc đồng hồ kim."
},
{
  id: "e41", ages: ["7-10"], title: "Tháng & mùa — Months & seasons", tags: ["thời gian", "thời tiết"],
  words: [["January", "tháng Một"], ["June", "tháng Sáu"], ["December", "tháng Mười hai"], ["spring", "mùa xuân"], ["summer", "mùa hè"], ["autumn / fall", "mùa thu"], ["winter", "mùa đông"], ["birthday", "sinh nhật"]],
  phrases: [["When is your birthday?", "Sinh nhật con khi nào?"], ["My birthday is in May.", "Sinh nhật con vào tháng Năm."], ["What's your favorite season?", "Con thích mùa nào nhất?"], ["I like summer because I can swim.", "Con thích mùa hè vì được đi bơi."]],
  howto: "Viết sinh nhật cả nhà lên lịch bằng tiếng Anh. Tập trả lời có \"because\" (vì) để nói dài hơn."
},
{
  id: "e42", ages: ["7-10"], title: "Ở trường — At school", tags: ["trường học"],
  words: [["classroom", "lớp học"], ["teacher", "giáo viên"], ["classmate", "bạn cùng lớp"], ["homework", "bài tập về nhà"], ["pencil", "bút chì"], ["eraser", "cục tẩy"], ["ruler", "thước kẻ"], ["subject", "môn học"]],
  phrases: [["May I go to the toilet?", "Con xin phép đi vệ sinh ạ?"], ["Can you help me, please?", "Cô giúp con được không ạ?"], ["Can I borrow your eraser?", "Cho tớ mượn cục tẩy nhé?"], ["How was school today?", "Hôm nay ở trường thế nào?"], ["What's your favorite subject?", "Môn con thích nhất là gì?"]],
  howto: "Mỗi chiều hỏi \"How was school today?\" Chấp nhận con trả lời bằng tiếng Việt xen tiếng Anh — quan trọng là con chịu nói."
},
{
  id: "e43", ages: ["7-10"], title: "Sở thích & thể thao — Hobbies", tags: ["sở thích", "thể thao"],
  words: [["hobby", "sở thích"], ["reading", "đọc sách"], ["cycling", "đạp xe"], ["badminton", "cầu lông"], ["chess", "cờ vua"], ["piano", "đàn piano"], ["often", "thường xuyên"], ["sometimes", "thỉnh thoảng"]],
  phrases: [["What do you do in your free time?", "Lúc rảnh con làm gì?"], ["I often play badminton with my dad.", "Con thường chơi cầu lông với ba."], ["How often do you read?", "Con đọc sách bao lâu một lần?"], ["Let's play chess!", "Mình chơi cờ vua đi!"]],
  howto: "Chơi một môn thể thao cùng con và chỉ dùng tiếng Anh cho các từ trong trận: \"Your turn!\", \"Good shot!\", \"I win!\""
},
{
  id: "e44", ages: ["7-10"], title: "Hỏi đường — Directions", tags: ["hỏi đường", "giao tiếp"],
  words: [["left", "trái"], ["right", "phải"], ["straight", "thẳng"], ["turn", "rẽ"], ["corner", "góc đường"], ["near", "gần"], ["far", "xa"], ["map", "bản đồ"]],
  phrases: [["Excuse me, where is the park?", "Xin lỗi, công viên ở đâu ạ?"], ["Go straight and turn left.", "Đi thẳng rồi rẽ trái."], ["It's on the right.", "Nó ở bên phải."], ["Is it far from here?", "Có xa đây không?"]],
  howto: "Khi đi xe, để con làm \"GPS\": \"Turn left! Go straight!\" Hoặc giấu quà trong nhà và chỉ đường bằng tiếng Anh."
},
{
  id: "e45", ages: ["7-10"], title: "Đi mua sắm — Shopping", tags: ["mua sắm", "tiền"],
  words: [["shop", "cửa hàng"], ["money", "tiền"], ["price", "giá"], ["cheap", "rẻ"], ["expensive", "đắt"], ["buy", "mua"], ["pay", "trả tiền"], ["change", "tiền thối"]],
  phrases: [["How much is it?", "Cái này bao nhiêu tiền?"], ["It's twenty thousand dong.", "Hai mươi nghìn đồng."], ["I'd like this one, please.", "Cho cháu cái này ạ."], ["That's too expensive!", "Đắt quá!"], ["Here you are.", "Của bạn đây."]],
  howto: "Chơi bán hàng ở nhà với tiền thật mệnh giá nhỏ. Con làm người bán, ba mẹ hỏi \"How much is it?\" — vừa học tiếng Anh vừa học toán."
},
{
  id: "e46", ages: ["7-10"], title: "Ở nhà hàng — At a restaurant", tags: ["ăn uống", "giao tiếp"],
  words: [["menu", "thực đơn"], ["order", "gọi món"], ["waiter", "người phục vụ"], ["bill", "hóa đơn"], ["noodles", "mì / phở"], ["juice", "nước ép"], ["spicy", "cay"], ["delicious", "ngon"]],
  phrases: [["Can I see the menu, please?", "Cho tôi xem thực đơn được không?"], ["I'd like a bowl of pho.", "Cho tôi một bát phở."], ["Not too spicy, please.", "Đừng cay quá nhé."], ["Can we have the bill, please?", "Cho chúng tôi xin hóa đơn."], ["It's delicious!", "Ngon quá!"]],
  howto: "Ở nhà, chơi nhà hàng: con làm waiter ghi món, ba mẹ gọi món bằng tiếng Anh. Đi ăn thật thì cho con tập gọi một món."
},
{
  id: "e47", ages: ["7-10"], title: "Sức khỏe — I don't feel well", tags: ["sức khỏe"],
  words: [["headache", "đau đầu"], ["stomachache", "đau bụng"], ["toothache", "đau răng"], ["fever", "sốt"], ["cough", "ho"], ["cold", "cảm lạnh"], ["medicine", "thuốc"], ["rest", "nghỉ ngơi"]],
  phrases: [["What's the matter?", "Con bị sao thế?"], ["I have a headache.", "Con bị đau đầu."], ["I don't feel well.", "Con thấy không khỏe."], ["You should drink water and rest.", "Con nên uống nước và nghỉ ngơi."], ["I feel better now.", "Giờ con thấy khỏe hơn rồi."]],
  howto: "Chơi bác sĩ – bệnh nhân bằng tiếng Anh. Câu \"What's the matter?\" và \"I have a…\" rất hữu ích khi đi du lịch."
},
{
  id: "e48", ages: ["7-10"], title: "Kể chuyện cuối tuần — Last weekend", tags: ["thì quá khứ", "kể chuyện"],
  words: [["went", "đã đi"], ["played", "đã chơi"], ["ate", "đã ăn"], ["saw", "đã thấy"], ["visited", "đã thăm"], ["yesterday", "hôm qua"], ["last weekend", "cuối tuần trước"], ["fun", "vui"]],
  phrases: [["What did you do last weekend?", "Cuối tuần trước con làm gì?"], ["I went to the zoo.", "Con đã đi sở thú."], ["I saw a big elephant.", "Con đã thấy một con voi to."], ["It was really fun!", "Vui lắm!"], ["We visited Grandma.", "Nhà mình đã thăm bà."]],
  howto: "Tối Chủ nhật, mỗi người kể 2–3 câu về cuối tuần bằng tiếng Anh. Ba mẹ sửa nhẹ nhàng bằng cách nhắc lại câu đúng, không chê."
},
{
  id: "e49", ages: ["7-10"], title: "Miêu tả người — Describing people", tags: ["tính từ", "miêu tả"],
  words: [["tall", "cao"], ["short", "thấp"], ["long hair", "tóc dài"], ["glasses", "kính"], ["kind", "tốt bụng"], ["funny", "vui tính"], ["smart", "thông minh"], ["brave", "dũng cảm"]],
  phrases: [["What does your teacher look like?", "Cô giáo con trông thế nào?"], ["She is tall and has long hair.", "Cô cao và có tóc dài."], ["My best friend is very funny.", "Bạn thân con rất vui tính."], ["You are brave!", "Con dũng cảm lắm!"]],
  howto: "Chơi \"Who am I?\": miêu tả một người trong gia đình bằng tiếng Anh, người kia đoán. Khen con bằng các tính từ tích cực (kind, brave)."
},
{
  id: "e50", ages: ["7-10"], title: "Lời đề nghị lịch sự — Can I…?", tags: ["lễ phép", "giao tiếp"],
  words: [["can", "có thể"], ["could", "có thể (lịch sự hơn)"], ["may", "được phép"], ["of course", "tất nhiên"], ["sure", "chắc chắn rồi"], ["borrow", "mượn"], ["help", "giúp"]],
  phrases: [["Can I watch TV after homework?", "Con xem TV sau khi làm bài được không?"], ["Could you help me, please?", "Ba/mẹ giúp con được không ạ?"], ["May I come in?", "Con vào được không ạ?"], ["Of course! / Sorry, not now.", "Tất nhiên rồi! / Xin lỗi, giờ thì chưa được."]],
  howto: "Quy ước vui: một số yêu cầu trong nhà phải hỏi bằng tiếng Anh (ví dụ xin ăn vặt: \"Can I have a snack, please?\")."
},
{
  id: "e51", ages: ["7-10"], title: "Môi trường — Save the Earth", tags: ["môi trường", "thiên nhiên"],
  words: [["environment", "môi trường"], ["recycle", "tái chế"], ["plastic", "nhựa"], ["rubbish / trash", "rác"], ["tree", "cây"], ["save", "tiết kiệm / bảo vệ"], ["energy", "năng lượng"], ["ocean", "đại dương"]],
  phrases: [["Turn off the lights, please.", "Tắt đèn đi con."], ["Don't waste water.", "Đừng lãng phí nước."], ["Put the bottle in the recycling bin.", "Bỏ chai vào thùng tái chế."], ["Let's plant a tree!", "Mình cùng trồng cây nào!"]],
  howto: "Cùng con phân loại rác ở nhà và gọi tên bằng tiếng Anh: plastic, paper, food waste. Con làm \"Energy Police\" nhắc cả nhà tắt đèn."
},
{
  id: "e52", ages: ["7-10"], title: "Lên kế hoạch — Making plans", tags: ["thì tương lai", "giao tiếp"],
  words: [["tomorrow", "ngày mai"], ["next week", "tuần sau"], ["plan", "kế hoạch"], ["going to", "sẽ (dự định)"], ["want to", "muốn"], ["together", "cùng nhau"]],
  phrases: [["What are you going to do tomorrow?", "Ngày mai con định làm gì?"], ["I'm going to visit my friend.", "Con sẽ đi thăm bạn."], ["Let's go swimming on Saturday!", "Thứ Bảy mình đi bơi nhé!"], ["That's a great idea!", "Ý hay đấy!"], ["How about going to the library?", "Hay là mình đi thư viện?"]],
  howto: "Tối thứ Sáu, cả nhà lên kế hoạch cuối tuần bằng tiếng Anh — con được góp ý \"How about…?\""
},
{
  id: "e53", ages: ["7-10"], title: "Gọi điện & video — On the phone", tags: ["giao tiếp", "điện thoại"],
  words: [["call", "gọi điện"], ["speak", "nói chuyện"], ["hold on", "chờ máy"], ["message", "tin nhắn"], ["loud", "to"], ["again", "lại"]],
  phrases: [["Hello, this is Minh speaking.", "Alô, Minh đang nghe ạ."], ["Can I speak to Lan, please?", "Cho cháu nói chuyện với Lan ạ?"], ["Hold on, please.", "Vui lòng chờ máy."], ["Sorry, can you say that again?", "Xin lỗi, bạn nói lại được không?"], ["Talk to you later. Bye!", "Nói chuyện sau nhé. Tạm biệt!"]],
  howto: "Chơi gọi điện thoại đồ chơi bằng tiếng Anh. Câu \"Can you say that again?\" giúp con tự tin khi không nghe rõ."
},
{
  id: "e54", ages: ["7-10"], title: "Cảm xúc nâng cao — How do you feel?", tags: ["cảm xúc"],
  words: [["excited", "hào hứng"], ["nervous", "hồi hộp, lo lắng"], ["proud", "tự hào"], ["bored", "chán"], ["worried", "lo lắng"], ["surprised", "ngạc nhiên"], ["disappointed", "thất vọng"], ["calm", "bình tĩnh"]],
  phrases: [["How do you feel today?", "Hôm nay con cảm thấy thế nào?"], ["I feel nervous about the test.", "Con thấy lo về bài kiểm tra."], ["I'm proud of you.", "Ba/mẹ tự hào về con."], ["Take a deep breath and stay calm.", "Hít thở sâu và giữ bình tĩnh nhé."]],
  howto: "Trước khi ngủ hỏi \"How do you feel today, and why?\" Có thêm từ vựng cảm xúc giúp con hiểu và nói về bản thân tốt hơn (ở cả hai ngôn ngữ)."
}
];
