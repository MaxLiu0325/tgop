import _ from "lodash";
import Marquee from "react-fast-marquee";

const marqueeImages = [
  require("assets/img/LINE_ALBUM_220226_5.png"),
  require("assets/img/LINE_ALBUM_220226_4.png"),
  require("assets/img/LINE_ALBUM_220226_3.png"),
  require("assets/img/LINE_ALBUM_220226_2.png"),
  require("assets/img/LINE_ALBUM_220226_1.png"),
];

const PHASE_1 = [
  {
    num: "01",
    title: "持有群人寶寶NFT將免費獲得專屬設計的周邊空投",
    content: [
      "群人寶寶NFT持有者可免費領取精心設計的禮物，一個NFT限兌換一次！100%對應發行數量，尊絕限量！敬請期待禮物內容～",
    ],
    shadowColor: "#FFD66D",
  },
  {
    num: "02",
    title: "特卡獲得特殊NFT空投 ，再享這群人影片收入分紅！",
    content: [
      "群人寶寶NFT中將藏有稀有的特卡，特卡持有者將獲得獨一無二的這群人Youtube經典影片NFT空投。特卡中還有超級特卡，將獲得對應影片的部分廣告收入分紅！超乎想像的驚人福利！",
    ],
    shadowColor: "#FFC66D",
  },
  {
    num: "03",
    title: "群人商城大禮抽獎 月月抽2名！",
    content: [
      "持有群人寶寶NFT就可參加每個月的大禮抽獎！在群人代言的精品商城中網羅的各種嚴選商品裡面任選一件商品，費用全免！",
    ],
    shadowColor: "#FF906D",
  },
  {
    num: "04",
    title: "合作夥伴神秘大禮抽獎! 不管是誰，先給群人寶寶來一點！",
    content: [
      "各大品牌各種精品贊助與尊貴體驗空投，持有群人寶寶NFT就可參加不定時的神秘大禮抽獎！有什麼大禮呢，請敬請期待～無時無刻都就想到群人寶寶～",
    ],
    shadowColor: "#FF6D6D",
  },
  {
    num: "05",
    title: "區塊鏈知識、創意、想像力等知識集結的社群",
    content: [
      "手把手帶領走入Web3.0世界，持有群人寶寶NFT的可加入限定頻道獲得幣圈專業的手把手教學，還可以獲得幣圈大大們的最新資訊！在浩瀚的Web3.0世界，你不再是一個人，你是“這群人”！",
    ],
    shadowColor: "#FF6DB3",
  },
  {
    num: "06",
    title: "Youtuber 我們是這群人",
    content: [
      "1. 打造華文最大Youtuber集散地！你會時常看到各個BIG BABY在社群出沒！",
      "2. 持有群人寶寶的NFT並在社群中活躍，還有機會在這群人Youtube影片中出現！",
    ],
    shadowColor: "#F36DFF",
  },
  {
    num: "07",
    title: "聯盟合作 白名單抽不完",
    content: ["與各種高品質項目合作，持有群人寶寶NFT就可參加各種厲害項目的福利抽獎活動！"],
    shadowColor: "#AE6EFD",
  },
  {
    num: "08",
    title: "小驚喜 無處不在",
    content: [
      "不定期釋出各種群人寶寶福利，如：空投群人寶寶NFT LINE貼圖、群人寶寶NFT限定週邊商品限定購買權、這群人週邊商品優惠...等。",
    ],
    shadowColor: "#6D8DFF",
  },
  {
    num: "09",
    title: "線上線下活動 群人寶寶NFT專屬",
    content: [
      "變成了一家人之後，我們會互相扶持，在大家辛苦打拼之餘，我們會有個綠洲、有個家讓你回來放鬆享樂。各種線上的活動讓不管在哪裡的寶寶家人都能參加。也有線下的活動，讓大家不只有電腦前的互動，離開電腦世界也能享樂。活動還會送獎金！",
    ],
    shadowColor: "#6DB9FF",
  },
  {
    num: "10",
    title: "這群人電影圓夢計畫！ 帶著群人寶寶一起上大銀幕",
    content: [
      "群人寶寶NFT將會支援這群人的電影之路！這群人成功登上大銀幕，那群人寶寶持有者除了不定期收到最新消息、雙人電影票、包場觀影活動外，你的名字也會一起登上大螢幕！要是你持有複數個群人寶寶NFT，你的名字會越明顯！首輪電影營收扣除成本後的盈餘，將作為群人寶寶NFT社群與元宇宙第二階段的資金，另外還會分潤給所有持有群人寶寶的NFT持有者們！通通有獎！",
    ],
    video: "https://www.youtube.com/embed/aqz-KE-bpKQ",
    shadowColor: "#6DFFF6",
  },
];

const TEAM_1 = [
  {
    avatar: require("assets/img/avatar-36.png"),
    name: "木星",
    instagram: "https://www.instagram.com/gillingraze/",
    youtube: "https://www.youtube.com/channel/UCPO1xxOvoWZ6pCORmpwIx8g",
  },
  {
    avatar: require("assets/img/avatar-38.png"),
    name: "茵聲",
    instagram: "https://www.instagram.com/ferrtsss/",
    youtube: "https://www.youtube.com/c/Alina%E9%84%AD%E8%8C%B5%E8%81%B2",
  },
  {
    avatar: require("assets/img/avatar-37.png"),
    name: "董仔",
    instagram: "https://www.instagram.com/donehannah/",
    youtube: "https://www.youtube.com/c/%E4%B8%8D%E5%9B%89%E5%97%A6%E7%9C%8B%E8%91%A3%E4%BB%94",
  },
  {
    avatar: require("assets/img/avatar-42.png"),
    name: "展榮",
    instagram: "https://www.instagram.com/keelongxu/",
    youtube: "https://www.youtube.com/channel/UCeB5UXWltaHtGoxkwGXLzpg",
  },
  {
    avatar: require("assets/img/avatar-40.png"),
    name: "尼克",
    instagram: "https://www.instagram.com/nickwang1988/",
    youtube: "https://www.youtube.com/c/ASHLYNICK258",
  },
  {
    avatar: require("assets/img/avatar-41.png"),
    name: "展瑞",
    instagram: "https://www.instagram.com/monday_rays/",
    youtube: "https://www.youtube.com/channel/UCeB5UXWltaHtGoxkwGXLzpg",
  },
  {
    avatar: require("assets/img/avatar-39.png"),
    name: "石頭",
    instagram: "https://www.instagram.com/tgopstone/",
  },
];

const TEAM_2 = [
  {
    title: "企劃・社群",
    avatar: require("assets/img/avatar-43.png"),
    name: "J2鏈小姐-JNFR",
    desc: "幣圈YouTuber與數個NFT項目的社群管理。擁有交易所、知名社群軟體、金融等的經驗。",
  },
  {
    title: "企劃・社群",
    avatar: require("assets/img/avatar-44.png"),
    name: "JL",
    desc: "從事日本動漫產業。在2019年與「進擊的巨人」打造第一個動漫NFT項目，擁有與50+IP合作的經驗。",
  },
  {
    title: "工程團隊Lead",
    avatar: require("assets/img/avatar-45.png"),
    name: "REX",
    desc: "資深Web3.0工程師。為資安與交易所後台的專家。帶領著專注於突破Web3.0的團隊。",
  },
  {
    title: "設計・廣宣・公關",
    avatar: require("assets/img/avatar-51.png"),
    name: "這群人團隊",
    desc: "百萬Youtuber團隊幕後成員們。總是盡全力帶給觀眾最新最有創意的體驗！",
  },
];

const PARTNERS = [
  {
    logo: require("assets/img/ace-logo.png"),
    name: "ACE王牌交易所",
    content: [
      "ACE Exchange是台灣首家合法合規的加密貨幣交易所，提供新台幣與虛擬貨幣交易，擁有雙保險機制，並與KPMG攜手落實反洗錢，讓用戶資產更安心！最重要的是交易掛單 及 台幣出入金 不分等級 皆零手續費！",
      "針對剛進幣圈的新手們，也提供債權認購、定期定額投資、一鍵買賣，APP內即能一站購足，免去繁雜交易流程。",
    ],
    url: "https://ace.io/",
  },
  {
    logo: require("assets/img/aromase-logo.png"),
    name: "AROMASE艾瑪絲",
    content: [
      "MIT專業髮品AROMASE艾瑪絲 亞洲第一支同時得到「Seal Awards可持續創新獎」X「C2C循環經濟銅級認證」的美髮品牌，不只期許為地球多做一點，更是對頭皮最友善的洗髮精，絕不添加矽靈、不添加SLS、不添加人工色素、不添加皂鹼，不添加化學防腐劑，從內料的永續成分到瓶器的循環包裝，流到海洋土壤都不傷害環境。延續這樣的初心，艾瑪絲與您一同關注生態、呵護地球環境。",
    ],
    url: "https://www.aromase.com.tw",
  },
  {
    name: "AND MORE...",
  },
];

const BIG_BABY = [
  {
    name: "小豬",
    avatar: require("assets/img/baby-avatar-50.png"),
    url: "https://www.instagram.com/p/Caw3zJuJsBT",
  },
  {
    name: "柯震東",
    avatar: require("assets/img/baby-avatar-77.png"),
    url: "https://www.instagram.com/kaikaiko",
  },
  {
    name: "周湯豪",
    avatar: require("assets/img/baby-avatar-74.png"),
    url: "https://www.instagram.com/nickthereal4sho",
  },
  {
    name: "陳零九",
    avatar: require("assets/img/baby-avatar-61.png"),
    url: "https://www.instagram.com/diegodtk09",
  },
  {
    name: "謝坤達",
    avatar: require("assets/img/baby-avatar-72.png"),
    url: "https://www.instagram.com/hsieh_kunda",
  },
  {
    name: "王大陸",
    avatar: require("assets/img/baby-avatar-75.png"),
    url: "https://www.instagram.com/taluwang",
  },
  {
    name: "韋禮安",
    avatar: require("assets/img/baby-avatar-51.png"),
    url: "https://www.instagram.com/weibirdmusic",
  },
  {
    name: "831-霸天",
    avatar: require("assets/img/baby-avatar-60.png"),
    url: "https://www.instagram.com/831_evilboy",
  },
  {
    name: "831-劉逼",
    avatar: require("assets/img/baby-avatar-59.png"),
    url: "https://www.instagram.com/831liub",
  },
  {
    name: "831-阿璞",
    avatar: require("assets/img/baby-avatar-58.png"),
    url: "https://www.instagram.com/831uplee",
  },
  {
    name: "831-阿電",
    avatar: require("assets/img/baby-avatar-57.png"),
    url: "https://www.instagram.com/831_dan",
  },
  {
    name: "831-小橘",
    avatar: require("assets/img/baby-avatar-52.png"),
    url: "https://www.instagram.com/831orange",
  },
  {
    name: "ECHO",
    avatar: require("assets/img/baby-avatar-76.png"),
    url: "https://www.instagram.com/echobbox",
  },
  {
    name: "小冰",
    avatar: require("assets/img/baby-avatar-55.png"),
    url: "https://www.instagram.com/yenchingsu",
  },
  {
    name: "老高",
    avatar: require("assets/img/baby-avatar-79.png"),
    url: "https://www.instagram.com/mr.and.mrs.gao",
  },
  {
    name: "阿滴",
    avatar: require("assets/img/baby-avatar-48.png"),
    url: "https://www.instagram.com/raydudaily",
  },
  {
    name: "洋蔥",
    avatar: require("assets/img/baby-avatar-53.png"),
    url: "https://www.instagram.com/onionman__",
  },
  {
    name: "聖結",
    avatar: require("assets/img/baby-avatar-47.png"),
    url: "https://www.instagram.com/qoop1113",
  },
  {
    name: "酷炫",
    avatar: require("assets/img/baby-avatar-54.png"),
    url: "https://www.instagram.com/kevin0204660",
  },
  {
    name: "含羞草",
    avatar: require("assets/img/baby-avatar-78.png"),
    url: "https://www.youtube.com/channel/UCCrwpId4G9sRQjLHaUv90YA/video",
  },
  {
    name: "蕾拉",
    avatar: require("assets/img/baby-avatar-73.png"),
    url: "https://www.instagram.com/la.112814",
  },
  {
    name: "陳百祥",
    avatar: require("assets/img/baby-avatar-13.png"),
    url: "https://www.instagram.com/baisiang.c",
  },
  {
    name: "孟耿如",
    avatar: require("assets/img/baby-avatar-56.png"),
    url: "https://www.instagram.com/summer1991720",
  },
  {
    name: "胡瑋杰",
    avatar: require("assets/img/baby-avatar-49.png"),
    url: "https://www.instagram.com/huweijie_",
  },
  {
    avatar: require("assets/img/baby-avatar-empty.png"),
  },
  {
    avatar: require("assets/img/baby-avatar-empty.png"),
  },
  {
    avatar: require("assets/img/baby-avatar-empty.png"),
  },
  {
    avatar: require("assets/img/baby-avatar-empty.png"),
  },
];

const FAQ = [
  {
    question: "群人寶寶NFT的發行數量是多少？",
    answer: "群人寶寶NFT共5,000隻，每一隻都是獨一無二的。",
  },
  {
    question: "群人寶寶NFT的開賣日期是什麼時候？",
    answer: [
      "預計在4月開始販賣，詳細時間會再更新。敬請期待後續公佈鑄造日期。",
      "",
      "＊請留意，群人寶寶不會有任何私訊或私售，若遇上述情形100%是詐騙！",
      "＊請加入，群人寶寶Discord、Twitter、Instagram以獲得正確官方消息！",
    ],
  },
  {
    question: "賦能是什麼？",
    answer: "如同上述的Roadmap，第一階段的群人寶寶共有10+個賦能，並且持續增加中！",
  },
  {
    question: "什麼是NFT？",
    answer:
      "NFT的全名是Non-fungible Token，意思就是非同質化代幣。簡單來說就是獨一無二不可以被代替的代幣。這些代幣可以跟數位的圖像、影片、文字、音樂...等連結，在網路上也能夠被證實成為獨一無二的東西。由於NFT是區塊鏈上的代幣，它無法被竄改或修正；當一個人給另外一個人這個代幣，這個代幣會如同真實世界一樣轉移過去。",
  },
  {
    question: "想要買群人寶寶NFT該怎麼做？",
    answer: [
      "1. 註冊Metamask小狐狸錢包",
      "2. 鑄造前確認你的錢包裡有足夠的以太幣支付包含Gas fee的總花費。",
      "3. 鑄造時，指定的鑄造網址會有“連接”按鈕連結你的錢包。",
      "4. 按下“鑄造“鍵，你將會被引導至簽署合約頁面，這時候你會清楚看到完成鑄造所需之包含gas fee的總費用。",
      "5. 當你鑄造完成後，你的群人寶寶NFT將會出現在你的錢包和Opensea上。",
    ],
  },
];

const classNames = (...classes) => {
  return classes.filter(Boolean).join(" ");
};

const Home = () => {
  return (
    <main>
      <div className="bg-[#FFFAF3]">
        <img className="h-full w-full object-cover" src={require("assets/img/keyvisual.png")} alt="" />
      </div>

      <div className="bg-[url('assets/img/intro-bg.png')] bg-contain bg-no-repeat aspect-[5760/4458] bg-[#080029]">
        <div className="pt-8 pb-8">
          <h1 className="font-seto text-[64px] text-center mb-4">不再是一個人，我們是這群人</h1>
          <p className="font-seto text-lg text-center">
            這群人會成為「這群人」，都是因為有互相幫助的力量，也是因為有你們的力量。
            <br />
            我們相信著群體與網路的無限可能。所以這次我們想要邀請你跟這群人一起探索未來的網路Web3.0的世界。
            <br />
            這將會是一個互相幫助與能夠獲得各種知識、體驗與福利的社群。
            <br />
            <br />
            從實體的福利與限定的實體活動開始，我們還會有各種空投與獎勵，以及到未來NFT與元宇宙的展望。
            <br />
            也會有區塊鏈老手們手把手帶領大家認識網路世界的未來。
            <br />
            <br />
            群人寶寶T-GOP BABY是這群人所推出的由5,000個獨一無二的寶寶們組合而成的NFT系列。
            <br />
            是由200+個圖樣所組成，每個群人寶寶都不一樣，就像是這世界上有各種人組成的這群人。
            <br />
            <br />
            2022年，這群人要和你一起加入群人寶寶樂園，
            <br />
            從此以後你在浩大的Web3.0裡，你不再是單打獨鬥，你是「這群人」！
          </p>
        </div>
        <div className="pt-8 pb-[200px]">
          <Marquee speed={60}>
            {marqueeImages.map((image, index) => (
              <img key={`marquee_${index}`} src={image} className="mx-[12.5px] h-[calc(100vw/1920*375)]" alt="" />
            ))}
          </Marquee>
        </div>
      </div>

      <div className="bg-[#080029]">
        <h1 className="font-seto text-[64px] text-white	text-center mb-4">歡迎來到群人寶寶樂園!</h1>
        <p className="font-seto text-lg text-white text-center">
          這不只是單純的NFT而已
          <br />
          我們準備了各種專屬於群人寶寶們的福利
          <br />
          讓我們一起前往元宇宙
        </p>
        <div className="font-seto text-7xl text-white text-center my-6">ROADMAP PHASE 1</div>

        <div className="grid grid-cols-12 gap-y-7">
          {PHASE_1.map(({ num, title, content, video, shadowColor }, index) => (
            <div
              key={`phase_2_${index}`}
              className={classNames(
                index % 2 ? "col-start-4" : "col-start-3",
                `shadow-[5px_5px_0px_3px_${shadowColor}]`,
                "flex col-span-7 bg-white p-6 min-h-[calc(100vw/1920*170)] rounded-[25px]"
              )}
            >
              <div className="flex items-center">
                <div className="font-seto text-8xl">{num}</div>
                <div className="ml-8">
                  <h2 className="font-seto text-2xl mb-3 text-black">{title}</h2>
                  {content.map((text, index) => (
                    <p key={`phase_1_content_${index}`} className="font-seto text-lg	text-black">
                      {text}
                    </p>
                  ))}
                  {video && (
                    <div className="aspect-w-16 aspect-h-9 mt-6">
                      <iframe
                        src={video}
                        title=""
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="font-seto text-2xl text-white text-center mt-28">
          賦能將持續更新！
          <br />
          但當然大家的歡笑是我們的初衷，不只有賦能，大家玩得開心最重要！
        </div>
        <div className="font-seto text-7xl text-white text-center mt-16 mb-11">ROADMAP PHASE 2</div>
        <div className="font-seto text-5xl text-white text-center mb-8">COMING SOON...</div>
        <div className="relative flex justify-center aspect-[5760/3316] bg-[url('assets/img/discord-bg.png')] bg-contain bg-no-repeat">
          <a className="absolute bottom-[calc(100vw/1920*325)]">
            <img className="h-[calc(100vw/1920*70)]" src={require("assets/img/discord-btn.png")} alt="" />
          </a>
        </div>
      </div>

      <div className="aspect-[5760/13854] bg-[url('assets/img/team-bg.png')] bg-contain bg-no-repeat">
        <div className="flex flex-col items-center w-full">
          <h1 className="font-seto text-[64px] text-center mt-28 mb-4">核心團隊</h1>
          <div className="p-10 bg-white border-[5px] rounded-[30px] shadow-[5px_5px_0px_3px_#000000] w-[calc(100vw/1920*1307)]">
            <div className="lg:mx-auto lg:max-w-7xl lg:grid lg:grid-cols-5 lg:grid-flow-col-dense lg:gap-6">
              <div className="max-w-xl mx-auto sm:px-6 lg:max-w-none lg:mx-0 lg:px-0 lg:col-start-4 lg:col-span-2">
                <div className="lg:px-0 lg:m-0 lg:relative lg:h-full">
                  <img
                    className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:w-full lg:max-w-none"
                    src={require("assets/img/t-gop.png")}
                    alt=""
                  />
                </div>
              </div>
              <div className="mt-12 sm:mt-16 lg:mt-0 lg:col-start-1 lg:col-span-3">
                <div className="flex">
                  <h2 className="font-seto text-4xl">這群人 T-GOP</h2>
                  <div className="flex gap-7 flex-1 items-center justify-center">
                    <a className="my-auto" href="#">
                      <img className="h-[calc(100vw/1920*24)]" src={require("assets/img/twitter-icon.png")} alt="" />
                    </a>
                    <a className="my-auto" href="#">
                      <img className="h-[calc(100vw/1920*30)]" src={require("assets/img/instagram-icon.png")} alt="" />
                    </a>
                    <a className="my-auto" href="#">
                      <img className="h-[calc(100vw/1920*23.4)]" src={require("assets/img/youtube-icon.png")} alt="" />
                    </a>
                  </div>
                </div>
                <p className="font-seto mt-4 text-2xl">
                  這群人TGOP（英語：This Group Of
                  People），是由一群來自台灣專業戲劇科班畢業學生所組成的網路娛樂自媒體團隊，表現作品多由戲劇方式呈現，2011年8月3日於YouTube官方發表第一支自創作品，訂定每月15號與30號（2月則為28日）更新YouTube。著名代表的作品有《超瞎翻唱》、《經典語錄系列》，其中《超瞎翻唱》的觀看次數超過一千萬次。目前為止，在YouTube上擁有近350萬Subscriber。
                </p>
              </div>
            </div>
            <div className="mt-12">
              <ul className="mx-auto grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-4 md:gap-x-6 lg:max-w-5xl lg:gap-x-8 lg:gap-y-12 xl:grid-cols-12">
                {TEAM_1.map(({ avatar, name, instagram, youtube }, index) => (
                  <li key={`team_1_${index}`} className={classNames(index <= 2 ? "xl:col-span-4" : "xl:col-span-3")}>
                    <div className="flex flex-col items-center space-y-4">
                      <img
                        className="mx-auto h-20 w-20 rounded-full lg:w-[calc(100vw/1920*241)] lg:h-auto"
                        src={avatar}
                        alt=""
                      />
                      <div className="space-y-2">
                        <h3 className="font-seto text-4xl	">{`這群人-${name}`}</h3>
                      </div>
                      <div className="flex gap-5">
                        {instagram && (
                          <a className="mt-auto" href={instagram}>
                            <img
                              className="h-[calc(100vw/1920*30)]"
                              src={require("assets/img/instagram-icon.png")}
                              alt=""
                            />
                          </a>
                        )}
                        {youtube && (
                          <a className="mt-auto" href={youtube}>
                            <img
                              className="h-[calc(100vw/1920*30)]"
                              src={require("assets/img/youtube-icon.png")}
                              alt=""
                            />
                          </a>
                        )}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="flex mt-12">
            {TEAM_2.map(({ title, avatar, name, desc }, index) => (
              <div
                key={`team_2_${index}`}
                className="flex flex-col items-center p-4 mx-[7.5px] bg-white border-[5px] border-black rounded-[30px] shadow-[5px_5px_0px_3px_#000000] w-[calc(100vw/1920*312)]"
              >
                <h3 className="font-seto text-2xl">{title}</h3>
                <img
                  className="mx-auto h-20 w-20 rounded-full lg:w-[calc(100vw/1920*186)] lg:h-auto my-4"
                  src={avatar}
                  alt=""
                />
                <h3 className="font-seto text-2xl mb-2.5">{name}</h3>
                <p className="font-seto text-m">{desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center w-full">
          <h1 className="font-seto text-[64px] text-center mt-28 mb-4">合作夥伴</h1>
          <div className="font-seto text-2xl text-black text-center mt-2">
            在未來會持續增加的合作夥伴，
            <br />
            將會為群人寶寶樂園帶來滿滿的好康和禮物，
            <br />
            還有滿滿的知識與體驗只獻給群人寶寶！
          </div>
          <div className="flex mt-12 gap-11">
            <img className="h-[73px] self-center" src={require("assets/img/left-icon.png")} alt="" />
            {PARTNERS.map(({ name, logo, content = [], url }, index) => (
              <div
                key={`partner_${index}`}
                className={classNames(
                  _.isEmpty(content) ? "bg-[#454545] justify-center" : "bg-white",
                  "flex flex-col items-center p-8 mx-[7.5px] border-[5px] border-black rounded-[30px] shadow-[5px_5px_0px_3px_#000000] w-[calc(100vw/1920*413)]"
                )}
              >
                <img className="mx-auto lg:h-auto" src={logo} alt="" />
                <h3
                  className={classNames(_.isEmpty(content) ? "text-white text-4xl" : "text-2xl mt-8 mb-6", "font-seto")}
                >
                  {name}
                </h3>
                {content.map((text, index) => (
                  <p key={`partner_content_${index}`} className="font-seto text-m">
                    {text}
                  </p>
                ))}
                {url && (
                  <a className="mt-auto" href={url}>
                    <img className="w-[calc(100vw/1920*35)]" src={require("assets/img/website-icon.png")} alt="" />
                  </a>
                )}
              </div>
            ))}
            <img className="h-[73px] self-center" src={require("assets/img/right-icon.png")} alt="" />
          </div>
        </div>

        <div className="flex flex-col items-center">
          <h1 className="font-seto text-[64px] text-center mt-28 mb-4">群人大寶貝們</h1>
          <div className="font-seto text-2xl text-black text-center mt-2">
            群人寶寶樂園榮幸邀請到的BIG BABIES❤️ 特別感謝友情站台～
            <br />
            大寶貝們不代表有合作關係或參與項目企劃，
            <br />
            但是他們都會是未來群人寶寶NFT持有者的一員！
            <br />
            說不定你會在群人寶寶樂園裡面看到他們喔！？
          </div>
          <div className="mt-12">
            <ul className="mx-auto grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-4 md:gap-x-6 lg:max-w-5xl lg:gap-8 xl:grid-cols-7">
              {BIG_BABY.map(({ avatar, name, url }, index) => (
                <li key={`big_baby_${index}`}>
                  <a
                    href={url || "#"}
                    className={classNames(!url && "cursor-default", "flex flex-col items-center space-y-4")}
                  >
                    <img
                      className="mx-auto h-20 w-20 rounded-full lg:w-[calc(100vw/1920*153)] lg:h-auto"
                      src={avatar}
                      alt={name}
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-[#FFFAF3]">
        <h1 className="font-seto text-[64px] text-center mt-28 mb-4">FAQ</h1>
        <div className="flex flex-col items-center gap-9">
          {FAQ.map(({ question, answer }, index) => (
            <div key={`faq_${index}`} className="flex flex-col-reverse w-[calc(100vw/1920*1307)] accordion">
              <div
                id={`faq_${index}`}
                className="z-0 bg-white border-[5px] border-black rounded-[15px] mt-[-8px] collapse show"
                aria-labelledby={`faq_${index}`}
              >
                <div className="accordion-body px-11 py-9">
                  {_.flatten([answer]).map((text, index) => (
                    <p key={`faq_answer_${index}`} className="font-seto text-2xl">
                      {text}
                    </p>
                  ))}
                </div>
              </div>
              <div className="z-10 bg-[#FFE485] border-[5px] border-black rounded-[15px] pl-11 py-9 flex items-center accordion-header">
                <h1 className="font-seto text-5xl">{question}</h1>
                <a
                  role="button"
                  className="accordion-button bg-white w-[calc(100vw/1920*84)] h-[calc(100vw/1920*84)] border-[5px] border-black rounded-full ml-auto mr-8 flex items-center justify-center"
                  data-bs-toggle="collapse"
                  href={`#faq_${index}`}
                  aria-expanded="true"
                  aria-controls={`faq_${index}`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Home;
