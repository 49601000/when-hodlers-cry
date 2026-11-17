var j=Object.defineProperty;var H=(t,e,s)=>e in t?j(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s;var l=(t,e,s)=>H(t,typeof e!="symbol"?e+"":e,s);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const a of n)if(a.type==="childList")for(const u of a.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&i(u)}).observe(document,{childList:!0,subtree:!0});function s(n){const a={};return n.integrity&&(a.integrity=n.integrity),n.referrerPolicy&&(a.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?a.credentials="include":n.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(n){if(n.ep)return;n.ep=!0;const a=s(n);fetch(n.href,a)}})();const F=`// ============================================================
// ホドラーのなく頃に 第1章「消える流動性」
// スペース版 (hodoranonakuqing-ni) の埋め込み台本データ var S (全83ノード) を
// 本エンジン記法へ機械変換したもの。ラベル名は原作ノードIDをそのまま使用。
// 変換時の対応・簡略化は docs/SPECIFICATION.md の「第1章移植」節を参照。
// ============================================================

@label p0
// scene: SEC — 着任の日
@bg sec_hq
@ticker BTC $97,240 -0.4% | ETH $3,412 -0.9% | 強欲指数 74 · 強欲 | 連鎖清算 $182M
6月。ワシントンD.C.。
蝉の声と、取引所の稼働音が、同じ音量で鳴っていた。

@label p1
その日、ポール・アトキンスは SEC——米証券取引委員会の委員長に着任した。

@label p2
@show atkins smile center
atkins(smile): よし……今日からここが俺の戦場だ。市場の番人として、投資家を守る。それが俺の仕事だ！

@label p3
意気揚々と執務室のドアを開けた、そのときだった。

@label p4
@show atkins smile left
@show selig smile right
@sound blip
selig(smile): あっ！　来た来た来た！　新しい委員長だ！　ねえねえ、ほんとに来たんだね？　かな？　かな？

@label p5
atkins(serious): えっ、あ……君は？

@label p6
selig(smile): マイケル・セリグ。CFTC——商品先物取引委員会の委員長だよ。今日からお隣さんだね。よろしくね、アトキンス委員長！

@label p7
@hide atkins
@show selig smile center
selig(smile): あ、それからそれから！　この書類の束、見て？　規制のドラフトなんだけど……かわいいよね。かわいいものはね、お持ち帰りしたくなっちゃうんだ。

@label p8
@show atkins serious left
@show selig smile right
atkins(serious): （お、お持ち帰り……？　公文書を……？）
atkins: ……はは、個性的な人だな。

@label p9
// scene: 議事堂 — 市場の「部活」
@bg capitol
@hide selig
@hide atkins
@show lummis smile center
@sound blip
lummis(smile): おう、新入りはこっちだ！　シンシア・ルミス、上院議員。あたしらの「市場を明るくする会」へようこそ！

@label p10
@show atkins serious left
@show lummis smile right
atkins(serious): 市場を明るくする……会？

@label p11
@hide atkins
@show lummis smile left
@show selig default right
lummis(smile): 規制当局も議員もトレーダーも、立場を超えて集まる茶話会さ。ルールは一つ。負けたヤツには——罰ゲームだ！

@label p12
@hide selig
@show saylor smile right
saylor(smile): ……初めまして、委員長。マイケル・セイラーです。私はただ、ビットコインを信じているだけの男ですよ。静かに、深く、ね。

@label p13
@hide lummis
@show atkins default left
atkins(default): （この人……笑ってるのに、目が全然笑ってない。信仰って、こういう顔をするのか）

@label p14
// scene: 茶話会 — 平穏な日々
@bg club
@hide saylor
@hide atkins
@show lummis default left
@show tomlee smile right
@sound blip
tomlee(smile): おーっほっほっほ！　聞きました？　私の新予想。ETH は年末に 15,000 ドル。罠……じゃなくて、贈り物ですわ！

@label p15
@hide lummis
@show atkins serious left
atkins(serious): トム・リーさん……その予想、外れたらどうするんです？

@label p16
@hide atkins
@show tomlee smile center
tomlee(smile): 外れる？　私の予想に「外れる」という言葉はありませんの。あるのは……仕掛けが発動するタイミングの違いだけですわ。おーっほっほっほ！

@label p17
@hide tomlee
@show cz default center
cz(default): …………。

@label p18
@show atkins default left
@show cz default right
atkins(default): あんたは……CZ さん、だよな。巨大取引所の創業者。どうしてそんなに黙ってるんだ？

@label p19
@hide atkins
@show cz default center
cz(default): ……別に。……この光景も、もう何度見たか分からないから。

@label p20
@show atkins serious left
@show cz default right
atkins(serious): 何度……？　俺たち、今日が初対面のはずじゃ……

@label p21
@hide atkins
@show cz default center
cz(default): ……気のせいだよ。さ、笑って。平穏な日は、平穏なうちに笑っておくものだ。……長くは続かないから。

@label p22
@clear
@ticker BTC $97,240 -0.4% | ETH $3,412 -0.9% | 強欲指数 71 · 強欲 | 連鎖清算 $182M
その言葉の意味を、俺はまだ知らなかった。
——このとき、画面の隅のティッカーが、一瞬だけ赤く点滅した気がした。

@label c1q
@show lummis smile center
lummis(smile): よし新入り、歓迎のミニゲームだ！　「明日の BTC は上がるか下がるか」。外したら罰ゲーム。さあ、どっちに賭ける？
@choice
- 「上がる」に賭ける ― 根拠はない。だが委員長の勘だ。 -> c1up
- 「下がる」に賭ける ― 慎重に。市場は甘くない。 -> c1down
- 賭けそのものを断る ― 規制当局が賭け事とは何事か。 -> c1no
@endchoice

@label c1up
@show lummis smile left
@show selig smile right
@set trust += 1
selig(smile): わあ、委員長は強気なんだね！　かわいいチャートは上がるチャート。私もそっちがいいな。かな？　かな？
@jump m1

@label c1down
@hide selig
@show lummis smile center
lummis(smile): ほう、堅実だな新入り！　だが市場ってのはな、堅実なヤツから順に置いていくんだぜ？
@jump m1

@label c1no
@show lummis smile left
@show cz default right
@set susp += 1
cz(default): ……賢明だ。賭けなければ、失わない。……まあ、賭けなくても失う夜は来るんだけど。
@jump m1

@label m1
// scene: SEC執務室 — 数日後
@bg office
@clear
数日が過ぎた。茶話会は陽気で、市場は穏やかで、俺はすっかりこの街に馴染んでいた。
——異変は、まず「板」から始まった。

@label m2
@show atkins default center
@ticker BTC $96,880 -0.8% | ETH $3,412 -0.9% | 強欲指数 71 · 強欲 | 連鎖清算 $182M
atkins(default): ……ん？　この取引所、買い板が薄くないか？　いや、薄いどころか……消えてる？

@label m3
主要取引所のオーダーブック。さっきまで山のように積まれていた買い注文が、忽然と消えていた。価格はまだ動いていない。なのに、支えだけがない。

@label m4
@hide atkins
@show dimon serious center
@sound blip
dimon(serious): おい委員長、その顔は「気づいた」顔だな。ジェイミー・ダイモンだ。銀行の人間が言うのもなんだが……今夜は、妙だ。

@label m5
@show atkins serious left
@show dimon serious right
atkins(serious): ダイモンさんまで……。何か知ってるんですか？

@label m6
@hide atkins
@show dimon serious center
dimon(serious): 知ってるのは「誰も何も言わない」という事実だけだ。流動性が消える夜は、決まって静かだ。……気をつけな、委員長。疑うべきは価格じゃない、人だ。

@label m7
// scene: 帰路 — 夜のワシントン
// (原作: 月のオーバーレイ演出 — エンジン未対応のため省略)
@bg night
@hide dimon
@show sbf serious center
@sound tension
sbf(serious): あうあう……あ、あの……すみません……。

@label m8
// (原作: 月のオーバーレイ演出 — エンジン未対応のため省略)
@show atkins serious left
@show sbf serious right
atkins(serious): だ、誰だ！？　……って、SBF！？　あんた、もう表舞台には……！

@label m9
// (原作: 月のオーバーレイ演出 — エンジン未対応のため省略)
@hide atkins
@show sbf serious center
sbf(serious): あう……ごめんなさい、ごめんなさい……。ぼ、僕は止められないんです。いつも、そばで見ていることしか……。で、でも今夜は言いに来ました。……「板が消えるのは、始まり」なんです。あのときも、そうでした……。

@label m10
// (原作: 月のオーバーレイ演出 — エンジン未対応のため省略)
@hide sbf
@show atkins serious center
atkins(serious): あのとき……？　おい、待て！　消えるな！

@label m11
// (原作: 月のオーバーレイ演出 — エンジン未対応のため省略)
@clear
@syndrome 3
振り返ったとき、街灯の下には誰もいなかった。
ただ、蝉の声だけが、やけに大きく聞こえた。

@label m12
// scene: SEC執務室 — 深夜
@bg office
@show atkins default center
atkins(default): ……落ち着け。データを見よう。流動性が消えた時刻、消えた取引所、消えた金額。偶然で済む話かどうかは、数字が教えてくれる。
@choice
- データ室で注文履歴を洗う ― 数字は嘘をつかない。はずだ。 -> d1
- セリグに電話して様子を聞く ― 隣の委員長の勘は鋭い。 -> d2
- ルミスに会って茶話会の様子を探る ― あの会の空気は、市場そのものだ。 -> d3
@endchoice

@label d1
@set clue1 = true
atkins(serious): ……あった。消えた買い注文は全部、同一時刻・同一パターン。自然な撤退じゃない。誰かが「号令」で引いたんだ。……しかも、この撤退パターンの記録、3年前の暴落の夜と寸分違わない。

@label d1b

——3年前の暴落と、同じ指紋。
@jump n1

@label d2
@hide atkins
@show selig smile center
@set trust += 1
selig(smile): もしもし委員長！　夜中に電話なんて、かわいいね。……うん、板のこと？　知ってるよ。だって私、今日の午後ずっと見てたもん。かわいいチャートが、痩せていくの。……ねえ委員長。痩せたんじゃないよ。誰かに、食べられてるんだよ。
@jump n1

@label d3
@bg club
@hide selig
@show lummis default center
@set trust += 1
lummis(default): おう委員長、こんな夜に。……板の話か。あたしも気になってる。ただな、この会の連中は誰も騒がない。それが一番おかしいんだ。嵐の前は、ベテランほど静かになる。
@jump n1

@label n1
// scene: アトキンス宅 — 真夜中の電話
@bg home
@clear
@ticker BTC $94,120 -3.2% | ETH $3,412 -0.9% | 強欲指数 52 · 中立 | 連鎖清算 $182M
その夜。私邸の電話が鳴った。午前2時。こんな時間にかけてくる相手は、市場か、悪夢か、どちらかだ。

@label n2
@show selig default center
@sound tension
selig(default): ……委員長？　起きてる？　ねえ、聞いて。……「ウス」って、知ってる？

@label n3
@hide selig
@show atkins serious center
atkins(serious): ウス……？　何の話だ、セリグ。

@label n4
@hide atkins
@show selig default center
selig(default): 市場の噂だよ。「流動性が消えた理由を知ってるのは、最初から計画していた人間だけ」……だって。ねえ委員長。……委員長は、私を信じてる？　かな？　かな？

@label n5
@hide selig
@show atkins serious center
atkins(serious): （なぜ今、そんなことを聞く……？　こいつの声は笑っているのに、電話の向こうの空気が、氷みたいに冷たい）

@label n6
@hide atkins
@show warren serious center
@sound blip
warren(serious): ——その電話、代わってもらえるかしら。エリザベス・ウォーレンよ。委員長、夜分に失礼ね。

@label n7
@show atkins serious left
@show warren serious right
atkins(serious): ウォーレン議員！？　なぜセリグの電話に……！

@label n8
@hide atkins
@show warren serious center
warren(serious): あら、驚くところはそこ？　私はずっと観察しているの。この市場の参加者は全員、症候群のキャリアよ。L3、L4、そして……L5。あなたも例外じゃない。解剖すれば、分かるわ。

@label n9
@sound tension
warren(serious): 「Operation E.W.」——その名前を聞く日が来たら、思い出して。恐怖はね、設計できるのよ。じゃあ、おやすみなさい、委員長。良い……暴落を。

@label n10
@hide warren
@show atkins serious center
@syndrome 4
atkins(serious): ツー、ツー、ツー……。
atkins: ……なんだ、今のは。なんで俺は、手が震えてるんだ。……ウォーレン。セリグ。CZ の言葉。「何度やっても同じ夜」。——みんな、何か隠してる。

@label n11
@clear
@ticker BTC $94,120 -3.2% | ETH $3,412 -0.9% | 強欲指数 52 · 中立 | 連鎖清算 $310M
その夜から、俺の中で何かが静かに壊れ始めた。
価格が下がるたび、押し目買いのボタンの上に、指が勝手に伸びるようになった。

@label c2q
// scene: SEC執務室 — 翌朝
@bg office
@show atkins serious center
atkins(serious): （誰を信じる？　誰も信じられないなら、俺はどうすればいい……）
@choice
- 仲間を信じる。茶話会の全員を執務室に呼ぶ ― 一人の疑心より、全員の本音だ。 -> t1
- 誰も信じない。自分だけで真相を追う ― 信じた者が、最初に裏切る。 -> s1
- CZに直接会いに行く ― 「何度やっても」の意味を聞く。 -> z1
@endchoice

@label t1
@set trust += 2
@hide atkins
@show lummis default left
@show selig default right
lummis(default): 全員集合とは珍しいな、委員長。……その顔、昨夜の電話の話だな。いいぜ、全部話そう。あたしらが隠してたのは「計画」じゃない。「恐怖」だ。誰もが次の暴落を恐れて、板を引っ込めてたんだ。

@label t2
@hide lummis
@show selig smile center
@set clue1 = true
selig(smile): 委員長、私ね、かわいいものをお持ち帰りするのが趣味だけど……本当はね、「怖いもの」も集めてるんだ。暴落の記録、全部。……ほら、これ。3年前の夜と今夜の板の形、重ねてみて？　……同じだよ。かな？　かな？

@label t3
@hide selig
@show atkins serious center
atkins(serious): ……本当だ。寸分違わない。ということは、これは自然な恐怖じゃない。誰かが恐怖を「再演」してる……ウォーレンの言った、Operation E.W.……！
@jump f1

@label s1
@set susp += 2
atkins(serious): （誰の言葉も信じられない。セリグの笑顔も、ルミスの豪快さも、全部「仕掛け」に見える。……なら、俺一人で確かめる。監視カメラの記録、入館ログ、全部だ）

@label s2
@sound alert
atkins(serious): ……入館ログ。暴落の夜、執務室フロアに入った人間の記録が……消されてる？　違う。最初から「なかった」ことになってる。……誰だ。誰がここまで……。

@label s3
@hide atkins
@show sbf serious center
@sound tension
sbf(serious): あうあう……委員長……。そ、その探し方は、危ないです……。疑えば疑うほど、進んじゃうんです。あの症候群が……。僕は見てきました。何度も、何度も……。

@label s4
@show atkins serious left
@show sbf serious right
@set susp += 1
atkins(serious): SBF……！　なぜここに。……「何度も」って、どういう意味だ！　CZ も同じことを言った。お前たち、何を知ってる！？
@jump f1

@label z1
@set clue2 = true
// (原作: 月のオーバーレイ演出 — エンジン未対応のため省略)
@bg night
@hide sbf
@hide atkins
@show cz default center
cz(default): ……来ると思ったよ、委員長。……いいよ、少しだけ話そう。「この6月」は、もう何度目か分からない。市場が崩れて、みんな L5 になって、世界が終わって……気づくと、また着任の日だ。

@label z2
// (原作: 月のオーバーレイ演出 — エンジン未対応のため省略)
@show atkins serious left
@show cz default right
atkins(serious): ……ループ……してる、って言うのか？　そんな非科学的な……

@label z3
// (原作: 月のオーバーレイ演出 — エンジン未対応のため省略)
@hide atkins
@show cz default center
cz(default): 非科学的？　市場なんて、元々そうだろ。同じ強欲で上がって、同じ恐怖で崩れて、同じ後悔で眠る。……僕はただ、それを「自覚して」繰り返してるだけだ。

@label z4
// (原作: 月のオーバーレイ演出 — エンジン未対応のため省略)
@set trust += 1
cz(default): ……一つだけ忠告。ウォーレンの計画は本物だ。でも、彼女一人じゃ惨劇は完成しない。惨劇が完成するのは——主人公が、誰も信じられなくなったときだ。……委員長、あんた自身のことだよ。
@jump f1

@label f1
// scene: その夜 — 連鎖清算
@bg crash
@clear
@ticker BTC $81,540 -16.1% | ETH $2,690 -21.3% | 強欲指数 9 · 極度の恐怖 | 連鎖清算 $1.9B
@syndrome 5
@sound alert
そして、その夜が来た。
午後11時47分。一つの取引所で大口の売りが炸裂し、清算は連鎖し、価格は滝のように落ち始めた。

@label f2
@show hayes serious center
@sound tension
hayes(serious): なんだこの清算の連鎖は……！　俺のポジションが——あああ、嘘だろ！？　誰か止めろ、誰か——！

@label f3
@hide hayes
@show cramer serious center
@sound blip
cramer(serious): 売れ！　全部売れと言ったはずだ！！　リー！　お前の 15,000 ドルはどうした！　答えろ、リー！！

@label f4
@hide cramer
@show tomlee serious center
tomlee(serious): お、おーっほっほ……ほ、ほら、これは罠の発動タイミングが早まっただけで……わ、私は悪くありませんわ……！　仕掛けたのは私でも、踏んだのは市場の皆さんで……！

@label f5
@hide tomlee
@show dimon serious center
dimon(serious): 委員長！　聞こえるか！　これは自然な暴落じゃない。売りの出所が人工的だ。……だがな、もっと怖いのは価格じゃない。全員の目が、もう「L5 の目」になってることだ！

@label f6
@hide dimon
@show atkins serious center
atkins(serious): （頭の中で声がする。売るな。買え。押し目だ。いや——誰も信じるな。鍵を守れ。資産を守れ。ドアを閉めろ。閉めて、閉めて、閉めて——）

@label f7
@hide atkins
@show sanders serious center
@sound blip
sanders(serious): アトキンス委員長！　しっかりしなさい！　傷ついた投資家を救う方法は、ドアを閉めることじゃない。人を信じる力を、最後の一つだけ残しておくことだ！

@label f8
@hide sanders
@show atkins serious center
atkins(serious): ……俺は……俺は、どうすれば……！
@choice
- ドアを閉める。誰の声も聞かない ― 鍵と資産だけが、俺の味方だ。 -> bad1
- 執務室のドアを開け、仲間を中に入れる ― 信じる力を、最後の一つだけ。 -> good1
- CZに電話する。「何度目でも、終わらせよう」 ― ループを知る者と、ループを断つ。 -> good2
@endchoice

@label bad1
@bg void
@sound alert
atkins(serious): ……そうだ。閉める。全部閉める。取引も、ドアも、心も。……ハードウェアウォレットを抱いてれば、俺は安全だ。誰も俺を清算できない。誰も……誰も……。

@label bad2
@clear
その夜、SEC委員長の執務室のドアは、二度と開かなかった。
市場は崩壊し、48時間後——世界中の参加者が L5 に達した。

@label bad3
@show cz default center
cz(default): ……また、この結末か。……いいよ。もう一度だ。もう一度、6月から。……今度こそ、誰か、彼を信じさせてあげて。
ドアは、開かなかった
疑心が完成した夜、惨劇も完成した。だがこの物語はループする。CZ の言う通り、また6月の着任日から始まる。今度は——誰かを信じる選択が、世界を変えるかもしれない。
@end bad BAD END

@label good1
@bg office
@hide cz
@show lummis smile left
@show selig default center
@show saylor default right
lummis(smile): 委員長！　ドアを開けたな！　よし、全員で板を支えるぞ。罰ゲーム回避だ、気合入れろ！

@label good1b
@hide lummis
@hide saylor
@set clue3 = true
selig(smile): 委員長が信じてくれたから、私も怖いのを全部見せるね。これ、ウォーレンの事務所から「お持ち帰り」しちゃった資料。……Operation E.W. の実施計画書だよ。
@jump good3

@label good2
@hide selig
@show cz serious center
@set clue3 = true
cz(serious): ……委員長から電話が来たのは、初めてだ。何周しても、彼は一人でドアを閉めた。……あんた、今回の世界線は「当たり」かもしれない。——いいよ、全部話す。計画の実物も、見せよう。
@jump good3

@label good3
@hide cz
@show warren serious center
warren(serious): ……あら。計画書が、もう表に出てしまったのね。……ふふ、いいわ。今夜の惨劇は中止よ。恐怖は「皆が孤立したとき」にだけ完成する設計だったから。——あなたたちがドアを開けた時点で、私の負け。

@label good4
@hide warren
@show atkins default center
@ticker BTC $88,930 -8.6% | ETH $2,690 -21.3% | 強欲指数 31 · 恐怖 | 連鎖清算 $1.9B
@syndrome 2
atkins(default): ……終わったのか、今夜は。……ウォーレン、聞かせろ。Operation E.W. の全貌を。そして——「繰り返される6月」のことも。

@label good5
// scene: 夜明け — 議事堂
@bg capitol
@hide atkins
@show cz smile center
cz(smile): ……夜が明けたね。何度繰り返しても、朝日は同じで、でも少しだけ違って見える。……委員長、次の世界線では、創始者の話をしよう。消えた男——サトシ・ナカモトの話を。
夜明け — 第1章 完
今夜の惨劇は回避された。だが Operation E.W. の全貌と、「繰り返される6月」の謎はまだ深い。第2章「消えた創始者」へ——サトシ・ナカモトを巡る物語は「章と物語」であらすじを公開中。
@end clear CHAPTER 1 CLEAR
`;class m extends Error{constructor(e,s){super(`line ${s}: ${e}`),this.line=s}}function C(t){const e=t.trim();return e==="true"?!0:e==="false"?!1:/^-?\d+(\.\d+)?$/.test(e)?Number(e):e.startsWith('"')&&e.endsWith('"')||e.startsWith("'")&&e.endsWith("'")?e.slice(1,-1):e}function M(t,e){const s=t.trim();if(s.startsWith("!"))return{flag:s.slice(1).trim(),op:"falsy"};const i=s.match(/^([A-Za-z0-9_]+)\s*(==|!=|>=|<=|>|<)\s*(.+)$/);if(i)return{flag:i[1],op:i[2],value:C(i[3])};if(/^[A-Za-z0-9_]+$/.test(s))return{flag:s,op:"truthy"};throw new m(`invalid condition: ${t}`,e)}const q=["left","center","right"];function D(t){const e=[],s=new Map,i=t.split(/\r?\n/);let n=0;for(;n<i.length;){const a=n+1,u=i[n];n++;const c=u.trim();if(c===""||c.startsWith("//"))continue;if(c.startsWith("@")){const f=c.indexOf(" "),p=f===-1?c.slice(1):c.slice(1,f),d=f===-1?"":c.slice(f+1).trim();switch(p){case"label":{if(!d)throw new m("@label needs a name",a);s.has(d)||s.set(d,e.length),e.push({type:"label",name:d,line:a});break}case"bg":e.push({type:"bg",id:d,line:a});break;case"show":{const r=d.split(/\s+/).filter(Boolean);if(!r[0])throw new m("@show needs a character id",a);const b=q.includes(r[2]??"")?r[2]:"center";e.push({type:"show",charId:r[0],expression:r[1]??"default",position:b,line:a});break}case"outfit":{const r=d.split(/\s+/).filter(Boolean);if(r.length<2)throw new m("@outfit syntax: @outfit charId outfitId",a);e.push({type:"outfit",charId:r[0],outfit:r[1],line:a});break}case"hide":e.push({type:"hide",charId:d.split(/\s+/)[0]??"",line:a});break;case"clear":e.push({type:"clear",line:a});break;case"ticker":e.push({type:"ticker",text:d,line:a});break;case"syndrome":{const r=Number(d);if(!Number.isInteger(r)||r<0||r>5)throw new m("@syndrome level must be an integer 0-5",a);e.push({type:"syndrome",level:r,line:a});break}case"sound":e.push({type:"sound",name:d.split(/\s+/)[0]??"",line:a});break;case"set":{const r=d.match(/^([A-Za-z0-9_]+)\s*(\+?=)\s*(.+)$/);if(!r)throw new m("@set syntax: @set flag = value | @set flag += value",a);e.push({type:"set",flag:r[1],value:C(r[3]),op:r[2]==="+="?"add":"set",line:a});break}case"jump":{const r=d.match(/^([A-Za-z0-9_]+)(?:\s+if\s+(.+))?$/);if(!r)throw new m("@jump syntax: @jump label [if condition]",a);e.push({type:"jump",label:r[1],condition:r[2]?M(r[2],a):void 0,line:a});break}case"choice":{const r=[];let b=!1;for(;n<i.length;){const x=n+1,k=i[n].trim();if(n++,k===""||k.startsWith("//"))continue;if(k==="@endchoice"){b=!0;break}const w=k.match(/^-\s+(.+?)\s*->\s*([A-Za-z0-9_]+)$/);if(!w)throw new m("choice option syntax: - text -> label",x);r.push({text:w[1],label:w[2],line:x})}if(!b)throw new m("@choice block is not closed with @endchoice",a);if(r.length===0)throw new m("@choice needs at least one option",a);e.push({type:"choice",options:r,line:a});break}case"end":{const r=d.match(/^(clear|bad)(?:\s+(.*))?$/i);r?e.push({type:"end",kind:(r[2]??"").trim()||r[1].toUpperCase(),endKind:r[1].toLowerCase(),line:a}):e.push({type:"end",kind:d||"END",endKind:"none",line:a});break}default:throw new m(`unknown directive @${p}`,a)}continue}const h=c.match(/^([a-z][a-z0-9_]*)(?:\(([a-z0-9_]+)\))?:\s*(.*)$/);h?e.push({type:"dialogue",charId:h[1],expression:h[2],text:h[3],line:a}):e.push({type:"narration",text:c,line:a})}return{nodes:e,labels:s}}class R{constructor(){l(this,"ctx",null);l(this,"ambienceNodes",[]);l(this,"ambienceOn",!1)}ensure(){if(typeof window>"u")return null;if(!this.ctx)try{this.ctx=new AudioContext}catch{return null}return this.ctx.state==="suspended"&&this.ctx.resume(),this.ctx}tone(e,s,i,n=.06,a,u=0){const c=this.ensure();if(!c)return;const h=c.currentTime+u,f=c.createOscillator(),p=c.createGain();f.type=i,f.frequency.setValueAtTime(e,h),a&&f.frequency.exponentialRampToValueAtTime(a,h+s),p.gain.setValueAtTime(n,h),p.gain.exponentialRampToValueAtTime(1e-4,h+s),f.connect(p).connect(c.destination),f.start(h),f.stop(h+s)}play(e){switch(e){case"blip":this.tone(880,.07,"square",.03);break;case"alert":this.tone(420,.45,"sawtooth",.07,110);break;case"chime":this.tone(660,.18,"sine",.06),this.tone(990,.25,"sine",.06,void 0,.12);break;case"tension":this.tone(98,.8,"triangle",.09,92);break}}toggleAmbience(){const e=this.ensure();if(!e)return!1;if(this.ambienceOn)return this.ambienceNodes.forEach(s=>{try{s.stop()}catch{}}),this.ambienceNodes=[],this.ambienceOn=!1,!1;for(const s of[6200,7450]){const i=e.createOscillator(),n=e.createGain(),a=e.createOscillator(),u=e.createGain();i.type="sine",i.frequency.value=s,n.gain.value=.006,a.frequency.value=13,u.gain.value=.004,a.connect(u).connect(n.gain),i.connect(n).connect(e.destination),i.start(),a.start(),this.ambienceNodes.push(i,a)}return this.ambienceOn=!0,!0}}const y="default",E="default";function W(t,e,s){const i=t.outfits[e],n=t.outfits[y];return(i==null?void 0:i.expressions[s])??(i==null?void 0:i.expressions[E])??(n==null?void 0:n.expressions[s])??(n==null?void 0:n.expressions[E])}const _="whc-save-v1";function P(t,e){if(!t)return!0;const s=e[t.flag];switch(t.op){case"truthy":return!!s;case"falsy":return!s;case"==":return s===t.value;case"!=":return s!==t.value;case">=":return typeof s=="number"&&typeof t.value=="number"&&s>=t.value;case"<=":return typeof s=="number"&&typeof t.value=="number"&&s<=t.value;case">":return typeof s=="number"&&typeof t.value=="number"&&s>t.value;case"<":return typeof s=="number"&&typeof t.value=="number"&&s<t.value}}class Z{constructor(e,s,i,n=document,a={}){l(this,"flags",{});l(this,"backlog",[]);l(this,"auto",!1);l(this,"skip",!1);l(this,"index",0);l(this,"shown",new Map);l(this,"outfits",new Map);l(this,"bg",null);l(this,"syndrome",0);l(this,"ticker","");l(this,"typing",!1);l(this,"fullText","");l(this,"typeTimer",null);l(this,"autoTimer",null);l(this,"audio",new R);l(this,"el",{});l(this,"dialogueEl",null);l(this,"advanceHandler",()=>this.onAdvanceClick());l(this,"endFired",!1);var u;this.script=e,this.characters=s,this.bgFiles=i,this.options=a;for(const c of["bg","tint","ticker-text","stage","name","text","choices","backlog-panel","backlog-list","syndrome-meter","end-screen","end-kind"]){const h=n.querySelector("#"+c);if(!h)throw new Error(`missing DOM element #${c}`);this.el[c]=h}this.dialogueEl=this.el.text.parentElement,(u=this.dialogueEl)==null||u.addEventListener("click",this.advanceHandler)}dispose(){var e;this.clearTimers(),this.auto=!1,this.skip=!1,(e=this.dialogueEl)==null||e.removeEventListener("click",this.advanceHandler)}charName(e){var s;return((s=this.characters.characters.find(i=>i.id===e))==null?void 0:s.name)??e}charDef(e){return this.characters.characters.find(s=>s.id===e)}start(){this.index=0,this.endFired=!1,this.hideEnd(),this.el.choices.style.display="none",this.el.choices.innerHTML="",this.el["backlog-panel"].style.display="none",this.step()}renderStage(){const e=this.el.stage;e.innerHTML="";for(const s of this.shown.values()){const i=this.charDef(s.charId);if(!i)continue;const n=document.createElement("img");n.src="./"+(W(i,s.outfit,s.expression)??""),n.alt=i.name,n.className="char pos-"+s.position,e.appendChild(n)}}renderBg(){this.el.bg.style.backgroundImage=this.bg&&this.bgFiles[this.bg]?`url(${"./"+this.bgFiles[this.bg]})`:""}renderSyndrome(){this.el["syndrome-meter"].textContent=this.syndrome>=3?`ホドラー症候群 L${this.syndrome}`:"",this.el.tint.style.opacity=this.syndrome>=3?String((this.syndrome-2)*.22):"0"}renderTicker(){this.el["ticker-text"].textContent=this.ticker}renderBacklog(){this.el["backlog-list"].innerHTML=this.backlog.map(e=>'<div class="bl-row"><b></b><span></span></div>').join(""),[...this.el["backlog-list"].children].forEach((e,s)=>{e.querySelector("b").textContent=this.backlog[s].speaker,e.querySelector("span").textContent=this.backlog[s].text})}step(){for(this.clearTimers();this.index<this.script.nodes.length;){const e=this.script.nodes[this.index];switch(e.type){case"label":this.index++;break;case"bg":this.bg=e.id,this.renderBg(),this.index++;break;case"show":this.shown.set(e.charId,{charId:e.charId,expression:e.expression,position:e.position,outfit:this.outfits.get(e.charId)??y}),this.renderStage(),this.index++;break;case"outfit":{this.outfits.set(e.charId,e.outfit);const s=this.shown.get(e.charId);s&&(s.outfit=e.outfit,this.renderStage()),this.index++;break}case"hide":this.shown.delete(e.charId),this.renderStage(),this.index++;break;case"clear":this.shown.clear(),this.renderStage(),this.index++;break;case"ticker":this.ticker=e.text,this.renderTicker(),this.index++;break;case"syndrome":this.syndrome=e.level,this.renderSyndrome(),this.index++;break;case"sound":this.audio.play(e.name),this.index++;break;case"set":{if(e.op==="add"){const s=this.flags[e.flag];this.flags[e.flag]=(typeof s=="number"?s:0)+(typeof e.value=="number"?e.value:0)}else this.flags[e.flag]=e.value;this.index++;break}case"jump":{if(P(e.condition,this.flags)){const s=this.script.labels.get(e.label);if(s===void 0)return;this.index=s}else this.index++;break}case"dialogue":case"narration":this.showLine(e);return;case"choice":this.showChoices(e);return;case"end":this.showEnd(e.kind,e.endKind);return}}this.showEnd("END","none")}showLine(e){if(e.type==="dialogue"&&e.expression){const a=this.shown.get(e.charId);a&&(a.expression=e.expression,this.renderStage())}const s=e.type==="dialogue"?this.charName(e.charId):"";this.el.name.textContent=s,this.backlog.push({speaker:s,text:e.text}),this.renderBacklog(),this.fullText=e.text;const i=this.el.text;if(this.skip){i.textContent=e.text,this.typing=!1,this.autoTimer=window.setTimeout(()=>this.advance(),40);return}this.typing=!0,i.textContent="";let n=0;this.typeTimer=window.setInterval(()=>{n++,i.textContent=this.fullText.slice(0,n),n>=this.fullText.length&&this.finishTyping()},24)}finishTyping(){this.typeTimer&&(clearInterval(this.typeTimer),this.typeTimer=null),this.el.text.textContent=this.fullText,this.typing=!1,this.auto&&(this.autoTimer=window.setTimeout(()=>this.advance(),1100))}showChoices(e){this.el.name.textContent="",this.el.text.textContent="";const s=this.el.choices;s.innerHTML="",s.style.display="flex";for(const i of e.options){const n=document.createElement("button");n.textContent=i.text,n.className="choice-btn",n.addEventListener("click",()=>{this.audio.play("blip"),s.style.display="none",s.innerHTML="";const a=this.script.labels.get(i.label);a!==void 0&&(this.index=a,this.step())}),s.appendChild(n)}}showEnd(e,s){var i,n;this.el["end-kind"].textContent=e,this.el["end-screen"].style.display="flex",this.endFired||(this.endFired=!0,(n=(i=this.options).onEnd)==null||n.call(i,{kind:e,endKind:s}))}hideEnd(){this.el["end-screen"].style.display="none"}onAdvanceClick(){if(this.el.choices.style.display!=="flex"){if(this.typing){this.finishTyping();return}this.advance()}}advance(){this.index++,this.step()}clearTimers(){this.typeTimer&&(clearInterval(this.typeTimer),this.typeTimer=null),this.autoTimer&&(clearTimeout(this.autoTimer),this.autoTimer=null),this.typing=!1}toggleBacklog(){const e=this.el["backlog-panel"];e.style.display=e.style.display==="block"?"none":"block"}toggleAuto(){return this.auto=!this.auto,this.auto&&!this.typing&&(this.autoTimer=window.setTimeout(()=>this.advance(),600)),this.auto}toggleSkip(){return this.skip=!this.skip,this.skip}save(){const e={index:this.index,flags:this.flags,shown:[...this.shown.values()],bg:this.bg,syndrome:this.syndrome,ticker:this.ticker,backlog:this.backlog,episodeId:this.options.episodeId??null,outfits:Object.fromEntries(this.outfits)};localStorage.setItem(_,JSON.stringify(e))}load(){const e=localStorage.getItem(_);if(!e)return!1;const s=JSON.parse(e);if((s.episodeId??null)!==(this.options.episodeId??null))return!1;this.flags=s.flags??{},this.outfits=new Map(Object.entries(s.outfits??{})),this.shown=new Map(s.shown.map(n=>[n.charId,{...n,outfit:n.outfit??this.outfits.get(n.charId)??y}]));for(const n of this.shown.values())this.outfits.set(n.charId,n.outfit);this.bg=s.bg,this.syndrome=s.syndrome,this.ticker=s.ticker,this.backlog=s.backlog??[],this.hideEnd(),this.renderBg(),this.renderStage(),this.renderSyndrome(),this.renderTicker(),this.renderBacklog(),this.index=s.index;const i=this.script.nodes[this.index];return i&&(i.type==="dialogue"||i.type==="narration")?(this.backlog.pop(),this.showLine(i)):this.step(),!0}}const S="whc_progress_v1";function v(){try{return typeof localStorage<"u"?localStorage:null}catch{return null}}function $(t=v()){if(!t)return new Set;try{const e=t.getItem(S);if(!e)return new Set;const s=JSON.parse(e);return new Set(Array.isArray(s.cleared)?s.cleared.filter(i=>typeof i=="string"):[])}catch{return new Set}}function J(t,e=v()){if(!e)return;const s={cleared:[...t]};try{e.setItem(S,JSON.stringify(s))}catch{}}function V(t,e,s){return s!=="clear"||t.has(e)?new Set(t):new Set([...t,e])}function G(t,e,s=v()){const i=V($(s),t,e);return e==="clear"&&J(i,s),i}function K(t,e,s=!1){const i=[...t].sort((a,u)=>a.order-u.order);if(s)return i;const n=[];for(const a of i)if(n.push(a),!e.has(a.id))break;return n}const U=[{id:"atkins",name:"ポール・アトキンス",color:"#2e5f8a",initials:"PA",outfits:{default:{expressions:{default:"assets/characters/atkins_default.svg",smile:"assets/characters/atkins_default.svg",serious:"assets/characters/atkins_default.svg"}},alt:{expressions:{default:"assets/characters/atkins_alt_default.svg",smile:"assets/characters/atkins_alt_smile.svg",serious:"assets/characters/atkins_alt_serious.svg"}}}},{id:"selig",name:"マイケル・セリグ",color:"#7a3b69",initials:"MS",outfits:{default:{expressions:{default:"assets/characters/selig_default.svg",smile:"assets/characters/selig_default.svg",serious:"assets/characters/selig_default.svg"}}}},{id:"lummis",name:"シンシア・ルミス",color:"#2f7a4f",initials:"CL",outfits:{default:{expressions:{default:"assets/characters/lummis_default.svg",smile:"assets/characters/lummis_default.svg",serious:"assets/characters/lummis_default.svg"}}}},{id:"saylor",name:"マイケル・セイラー",color:"#b06a1b",initials:"SY",outfits:{default:{expressions:{default:"assets/characters/saylor_default.svg",smile:"assets/characters/saylor_default.svg",serious:"assets/characters/saylor_default.svg"}}}},{id:"cz",name:"CZ",color:"#8a2e2e",initials:"CZ",outfits:{default:{expressions:{default:"assets/characters/cz_default.svg",smile:"assets/characters/cz_default.svg",serious:"assets/characters/cz_default.svg"}}}},{id:"tomlee",name:"トム・リー",color:"#4f4fa8",initials:"TL",outfits:{default:{expressions:{default:"assets/characters/tomlee_default.svg",smile:"assets/characters/tomlee_default.svg",serious:"assets/characters/tomlee_default.svg"}}}},{id:"sbf",name:"SBF",color:"#555f6e",initials:"SBF",outfits:{default:{expressions:{default:"assets/characters/sbf_default.svg",smile:"assets/characters/sbf_default.svg",serious:"assets/characters/sbf_default.svg"}}}},{id:"warren",name:"エリザベス・ウォーレン",color:"#6e2f4f",initials:"EW",outfits:{default:{expressions:{default:"assets/characters/warren_default.svg",smile:"assets/characters/warren_default.svg",serious:"assets/characters/warren_default.svg"}}}},{id:"hayes",name:"アーサー・ヘイズ",color:"#2e5d5d",initials:"AH",outfits:{default:{expressions:{default:"assets/characters/hayes_default.svg",smile:"assets/characters/hayes_smile.svg",serious:"assets/characters/hayes_serious.svg"}}}},{id:"dimon",name:"ジェイミー・ダイモン",color:"#44403a",initials:"JD",outfits:{default:{expressions:{default:"assets/characters/dimon_default.svg",smile:"assets/characters/dimon_default.svg",serious:"assets/characters/dimon_default.svg"}}}},{id:"sanders",name:"バーニー・サンダース",color:"#6b5a3e",initials:"BS",outfits:{default:{expressions:{default:"assets/characters/sanders_default.svg",smile:"assets/characters/sanders_smile.svg",serious:"assets/characters/sanders_serious.svg"}}}},{id:"cramer",name:"ジム・クレイマー",color:"#7a3a1e",initials:"JC",outfits:{default:{expressions:{default:"assets/characters/cramer_default.svg",smile:"assets/characters/cramer_default.svg",serious:"assets/characters/cramer_default.svg"}}}},{id:"fink",name:"ラリー・フィンク",color:"#37474f",initials:"LF",outfits:{default:{expressions:{default:"assets/characters/fink_default.svg",smile:"assets/characters/fink_default.svg",serious:"assets/characters/fink_default.svg"}}}}],Y={characters:U},X=[{id:"office_day",name:"ワシントンのオフィス（昼）",file:"assets/backgrounds/office_day.svg"},{id:"market_night",name:"暴落する市場（夜）",file:"assets/backgrounds/market_night.svg"},{id:"sec_hq",name:"SEC本部",file:"assets/backgrounds/sec_hq.svg"},{id:"capitol",name:"議事堂",file:"assets/backgrounds/capitol.svg"},{id:"club",name:"茶話会の部屋",file:"assets/backgrounds/club.svg"},{id:"office",name:"SEC執務室",file:"assets/backgrounds/office.svg"},{id:"home",name:"アトキンス宅",file:"assets/backgrounds/home.svg"},{id:"night",name:"夜のワシントン",file:"assets/backgrounds/night.svg"},{id:"crash",name:"暴落する市場",file:"assets/backgrounds/crash.svg"},{id:"void",name:"闇（ループ）",file:"assets/backgrounds/void.svg"}],Q={backgrounds:X},ee=[{id:"ep01",order:1,scenario:"episodes/ep01/scenario.txt",subtitle:"鬼隠し編",title:"第1章「消える流動性」"}],se={episodes:ee},ne=`// ============================================================
// WHEN HODLERS CRY — dev engine demo scenario (original mini demo)
// 本編の台本ではない。エンジン全機能の動作確認用サンプル。
// ============================================================

@label start
@bg office_day
@ticker BTC $97,200 ▲1.2% | ETH $3,410 ▼0.4% | 流動性は今日も薄い…
@syndrome 3
@show atkins default center
@show selig default right
夏のワシントン。新しい職場の初日は、妙に静かだった。
atkins: 着任早々で悪いが、聞きたいことがある。昨夜、市場から流動性が消えた件だ。
selig: ひゃっ!? ぼ、僕は何も知らないよ？ …多分。
atkins(serious): その「多分」が一番怪しいんだよなあ。

@choice
- セリグを信じる -> trust_route
- セリグを疑う -> suspect_route
@endchoice

@label trust_route
@set trust = 1
@set clue = 1
@sound chime
selig(smile): ありがとう！ じゃあ、これを見せちゃう。昨夜の注文記録だよ。
atkins: …なるほど。消えたんじゃない。誰かが「移した」のか。
@jump merge

@label suspect_route
@set suspicion = 1
@sound tension
selig(serious): そ、そんな目で見ないでよ…。僕だって怖いんだから。
atkins: 悪い。だが全員が少しずつ何かを隠している。それだけは確かだ。
@jump merge

@label merge
@ticker BTC $95,800 ▼1.4% | 市場にざわめき | 出来高は通常の3倍
@syndrome 4
@show warren serious left
warren: 委員会は午後に開かれる。それまでに説明を用意なさい。
atkins: 午後に、か。時間がないな。

@choice
- 記録を徹底的に調べる -> investigate
- 一度帰って頭を冷やす -> go_home
@endchoice

@label investigate
@set evidence = 1
@hide warren
atkins: あった。移転先のウォレットは、委員会の資料に載っているものと同じだ。
selig: つまり、身内が…？
@jump verdict

@label go_home
@bg market_night
@hide warren
@hide selig
帰宅した夜、スマートフォンの通知が止まらなかった。
@jump verdict

@label verdict
@jump showdown if evidence == 1
@jump bad_end

@label showdown
@bg office_day
@syndrome 3
@sound chime
@outfit atkins alt
@show atkins smile center
アトキンスは勝負服に着替えていた。委員会への気合いは十分だ。
atkins: 資料は揃った。午後の委員会で、全部表に出そう。
selig(smile): うん。嘘のない市場にしようね。
今日の惨劇は、回避できた。…今日のところは。
@end clear NORMAL END

@label bad_end
@bg market_night
@syndrome 5
@sound alert
@show atkins serious center
証拠のないまま朝を迎えた。画面の中では、赤い線がどこまでも落ちていく。
atkins: しまった…。もう一度だ。もう一度、最初から…！
世界は、静かに巻き戻った。
@end bad BAD END
`,te=Object.assign({"../content/episodes/ep01/scenario.txt":F}),ie=Y,ae=Q,re=se.episodes,L={};for(const t of ae.backgrounds)L[t.id]=t.file;const z=new URLSearchParams(location.search),oe=z.get("unlock")==="all",I=z.get("scenario")==="demo",O=document.querySelector("#episode-select"),T=document.querySelector("#episode-list"),A=document.querySelector("#game");let o=null;function le(t){const e=te["../content/"+t.scenario];if(e===void 0)throw new Error(`episodes.json: scenario file not found for ${t.id}: content/${t.scenario}`);return e}function N(t,e,s){o==null||o.dispose(),O.style.display="none",A.style.display="";const i=new Z(D(t),ie,L,document,{episodeId:e,onEnd:s});o=i,i.start()}function B(){o==null||o.dispose(),o=null,A.style.display="none",O.style.display="";const t=$();T.innerHTML="";for(const e of K(re,t,oe)){const s=document.createElement("button");s.className="episode-btn";const i=document.createElement("span");if(i.className="ep-title",i.textContent=e.title,s.appendChild(i),e.subtitle){const n=document.createElement("span");n.className="ep-subtitle",n.textContent=e.subtitle,s.appendChild(n)}if(t.has(e.id)){const n=document.createElement("span");n.className="ep-cleared",n.textContent="CLEARED",s.appendChild(n)}s.addEventListener("click",()=>{N(le(e),e.id,({endKind:n})=>{G(e.id,n)})}),T.appendChild(s)}}const g=(t,e)=>{var s;return(s=document.querySelector("#"+t))==null?void 0:s.addEventListener("click",e)};g("btn-backlog",()=>o==null?void 0:o.toggleBacklog());g("btn-auto",t=>{o&&t.currentTarget.classList.toggle("active",o.toggleAuto())});g("btn-skip",t=>{o&&t.currentTarget.classList.toggle("active",o.toggleSkip())});g("btn-save",()=>o==null?void 0:o.save());g("btn-load",()=>o==null?void 0:o.load());g("btn-ambience",t=>{o&&t.currentTarget.classList.toggle("active",o.audio.toggleAmbience())});g("btn-restart",()=>{I?location.reload():B()});document.addEventListener("keydown",t=>{(t.key===" "||t.key==="Enter")&&(t.preventDefault(),o==null||o.onAdvanceClick())});I?(document.querySelector("#btn-restart").textContent="タイトルへ（リロード）",N(ne,"demo")):B();"serviceWorker"in navigator&&window.addEventListener("load",()=>{navigator.serviceWorker.register("./sw.js").catch(()=>{})});
