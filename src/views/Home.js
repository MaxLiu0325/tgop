import {
  ChatAltIcon,
  DocumentReportIcon,
  HeartIcon,
  InboxIcon,
  PencilAltIcon,
  ReplyIcon,
  SparklesIcon,
  TrashIcon,
  UsersIcon,
} from "@heroicons/react/outline";

import Marquee from "react-fast-marquee";

const features = [
  {
    name: "Unlimited Inboxes",
    description:
      "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
    icon: InboxIcon,
  },
  {
    name: "Manage Team Members",
    description:
      "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
    icon: UsersIcon,
  },
  {
    name: "Spam Report",
    description:
      "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
    icon: TrashIcon,
  },
  {
    name: "Compose in Markdown",
    description:
      "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
    icon: PencilAltIcon,
  },
  {
    name: "Team Reporting",
    description:
      "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
    icon: DocumentReportIcon,
  },
  {
    name: "Saved Replies",
    description:
      "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
    icon: ReplyIcon,
  },
  {
    name: "Email Commenting",
    description:
      "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
    icon: ChatAltIcon,
  },
  {
    name: "Connect with Customers",
    description:
      "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
    icon: HeartIcon,
  },
];
const metrics = [
  {
    id: 1,
    stat: "8K+",
    emphasis: "Companies",
    rest: "use laoreet amet lacus nibh integer quis.",
  },
  {
    id: 2,
    stat: "25K+",
    emphasis: "Countries around the globe",
    rest: "lacus nibh integer quis.",
  },
  {
    id: 3,
    stat: "98%",
    emphasis: "Customer satisfaction",
    rest: "laoreet amet lacus nibh integer quis.",
  },
  {
    id: 4,
    stat: "12M+",
    emphasis: "Issues resolved",
    rest: "lacus nibh integer quis.",
  },
];

const marqueeImages = [
  require("assets/img/LINE_ALBUM_220226_5.png"),
  require("assets/img/LINE_ALBUM_220226_4.png"),
  require("assets/img/LINE_ALBUM_220226_3.png"),
  require("assets/img/LINE_ALBUM_220226_2.png"),
  require("assets/img/LINE_ALBUM_220226_1.png"),
];

const Home = () => {
  return (
    <main>
      <div className="bg-[#FFFAF3]">
        <img
          className="h-full w-full object-cover"
          src={require("assets/img/keyvisual.png")}
          alt="People working on laptops"
        />
      </div>

      <div className="bg-[url('assets/img/intro-bg.png')] bg-contain bg-no-repeat bg-[#080029]">
        <div className="pt-8 pb-8">
          <h1 className="font-seto text-[64px] text-center mb-4">
            不再是一個人，我們是這群人
          </h1>
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
            群人寶寶T-GOP
            BABY是這群人所推出的由5,000個獨一無二的寶寶們組合而成的NFT系列。
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
            {marqueeImages.map((image, i) => (
              <img key={i} src={image} className="mx-[12.5px] h-[375px]" />
            ))}
          </Marquee>
        </div>
      </div>

      <div className="bg-[#080029] pb-32 mb-32">
        <h1 className="font-seto text-[64px] text-white	text-center mb-4">
          歡迎來到群人寶寶樂園!
        </h1>
        <p className="font-seto text-lg text-white text-center">
          這不只是單純的NFT而已
          <br />
          我們準備了各種專屬於群人寶寶們的福利
          <br />
          讓我們一起前往元宇宙
        </p>
        <div className="font-seto text-[72px] text-white text-center my-6">
          ROADMAP PHASE 1
        </div>

        <div className="grid grid-cols-12 gap-y-7">
          <div className="flex col-start-3 col-span-7 bg-white p-6 min-h-[170px] rounded-[25px] shadow-[5px_5px_0px_3px_#FFD66D]">
            <div className="flex items-center">
              <div className="font-seto text-8xl">01</div>
              <div className="ml-8">
                <h2 className="font-seto text-2xl mb-3 text-black">
                  持有群人寶寶NFT將免費獲得專屬設計的周邊空投
                </h2>
                <p className="font-seto text-lg	text-black">
                  群人寶寶NFT持有者可免費領取精心設計的禮物，一個NFT限兌換一次！100%對應發行數量，尊絕限量！敬請期待禮物內容～
                </p>
              </div>
            </div>
          </div>
          <div className="flex col-start-4 col-span-7 bg-white p-6 min-h-[170px] rounded-[25px] shadow-[5px_5px_0px_3px_#FFC66D]">
            <div className="flex items-center">
              <div className="font-seto text-8xl">02</div>
              <div className="ml-8">
                <h2 className="font-seto text-2xl mb-3 text-black">
                  特卡獲得特殊NFT空投 ，再享這群人影片收入分紅！
                </h2>
                <p className="font-seto text-lg	text-black">
                  群人寶寶NFT中將藏有稀有的特卡，特卡持有者將獲得獨一無二的這群人Youtube經典影片NFT空投。特卡中還有超級特卡，將獲得對應影片的部分廣告收入分紅！超乎想像的驚人福利！{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="flex col-start-3 col-span-7 bg-white p-6 min-h-[170px] rounded-[25px] shadow-[5px_5px_0px_3px_#FF906D]">
            <div className="flex items-center">
              <div className="font-seto text-8xl">03</div>
              <div className="ml-8">
                <h2 className="font-seto text-2xl mb-3 text-black">
                  群人商城大禮抽獎 月月抽2名！
                </h2>
                <p className="font-seto text-lg	text-black">
                  持有群人寶寶NFT就可參加每個月的大禮抽獎！在群人代言的精品商城中網羅的各種嚴選商品裡面任選一件商品，費用全免！
                </p>
              </div>
            </div>
          </div>
          <div className="flex col-start-4 col-span-7 bg-white p-6 min-h-[170px] rounded-[25px] shadow-[5px_5px_0px_3px_#FF6D6D]">
            <div className="flex items-center">
              <div className="font-seto text-8xl">04</div>
              <div className="ml-8">
                <h2 className="font-seto text-2xl mb-3 text-black">
                  合作夥伴神秘大禮抽獎! 不管是誰，先給群人寶寶來一點！
                </h2>
                <p className="font-seto text-lg	text-black">
                  各大品牌各種精品贊助與尊貴體驗空投，持有群人寶寶NFT就可參加不定時的神秘大禮抽獎！有什麼大禮呢，請敬請期待～無時無刻都就想到群人寶寶～
                </p>
              </div>
            </div>
          </div>
          <div className="flex col-start-3 col-span-7 bg-white p-6 min-h-[170px] rounded-[25px] shadow-[5px_5px_0px_3px_#FF6DB3]">
            <div className="flex items-center">
              <div className="font-seto text-8xl">05</div>
              <div className="ml-8">
                <h2 className="font-seto text-2xl mb-3 text-black">
                  區塊鏈知識、創意、想像力等知識集結的社群
                </h2>
                <p className="font-seto text-lg	text-black">
                  手把手帶領走入Web3.0世界，持有群人寶寶NFT的可加入限定頻道獲得幣圈專業的手把手教學，還可以獲得幣圈大大們的最新資訊！在浩瀚的Web3.0世界，你不再是一個人，你是“這群人”！
                </p>
              </div>
            </div>
          </div>
          <div className="flex col-start-4 col-span-7 bg-white p-6 min-h-[170px] rounded-[25px] shadow-[5px_5px_0px_3px_#F36DFF]">
            <div className="flex items-center">
              <div className="font-seto text-8xl">06</div>
              <div className="ml-8">
                <h2 className="font-seto text-2xl mb-3 text-black">
                  Youtuber 我們是這群人
                </h2>
                <p className="font-seto text-lg	text-black">
                  1. 打造華文最大Youtuber集散地！你會時常看到各個BIG
                  BABY在社群出沒！
                  <br />
                  2.
                  持有群人寶寶的NFT並在社群中活躍，還有機會在這群人Youtube影片中出現！
                </p>
              </div>
            </div>
          </div>
          <div className="flex col-start-3 col-span-7 bg-white p-6 min-h-[170px] rounded-[25px] shadow-[5px_5px_0px_3px_#AE6EFD]">
            <div className="flex items-center">
              <div className="font-seto text-8xl">07</div>
              <div className="ml-8">
                <h2 className="font-seto text-2xl mb-3 text-black">
                  聯盟合作 白名單抽不完
                </h2>
                <p className="font-seto text-lg	text-black">
                  與各種高品質項目合作，持有群人寶寶NFT就可參加各種厲害項目的福利抽獎活動！
                </p>
              </div>
            </div>
          </div>
          <div className="flex col-start-4 col-span-7 bg-white p-6 min-h-[170px] rounded-[25px] shadow-[5px_5px_0px_3px_#6D8DFF]">
            <div className="flex items-center">
              <div className="font-seto text-8xl">08</div>
              <div className="ml-8">
                <h2 className="font-seto text-2xl mb-3 text-black">
                  小驚喜 無處不在
                </h2>
                <p className="font-seto text-lg	text-black">
                  不定期釋出各種群人寶寶福利，如：空投群人寶寶NFT
                  LINE貼圖、群人寶寶NFT限定週邊商品限定購買權、這群人週邊商品優惠...等。
                </p>
              </div>
            </div>
          </div>
          <div className="flex col-start-3 col-span-7 bg-white p-6 min-h-[170px] rounded-[25px] shadow-[5px_5px_0px_3px_#6DB9FF]">
            <div className="flex items-center">
              <div className="font-seto text-8xl">09</div>
              <div className="ml-8">
                <h2 className="font-seto text-2xl mb-3 text-black">
                  線上線下活動 群人寶寶NFT專屬
                </h2>
                <p className="font-seto text-lg	text-black">
                  變成了一家人之後，我們會互相扶持，在大家辛苦打拼之餘，我們會有個綠洲、有個家讓你回來放鬆享樂。各種線上的活動讓不管在哪裡的寶寶家人都能參加。也有線下的活動，讓大家不只有電腦前的互動，離開電腦世界也能享樂。活動還會送獎金！
                </p>
              </div>
            </div>
          </div>
          <div className="flex col-start-4 col-span-7 bg-white p-6 min-h-[170px] rounded-[25px] shadow-[5px_5px_0px_3px_#6DFFF6]">
            <div className="flex items-center">
              <div className="font-seto text-8xl">10</div>
              <div className="ml-8">
                <h2 className="font-seto text-2xl mb-3 text-black">
                  這群人電影圓夢計畫！ 帶著群人寶寶一起上大銀幕
                </h2>
                <p className="font-seto text-lg mb-6 text-black">
                  群人寶寶NFT將會支援這群人的電影之路！這群人成功登上大銀幕，那群人寶寶持有者除了不定期收到最新消息、雙人電影票、包場觀影活動外，你的名字也會一起登上大螢幕！要是你持有複數個群人寶寶NFT，你的名字會越明顯！首輪電影營收扣除成本後的盈餘，將作為群人寶寶NFT社群與元宇宙第二階段的資金，另外還會分潤給所有持有群人寶寶的NFT持有者們！通通有獎！
                </p>
                <div className="aspect-w-16 aspect-h-9">
                  <iframe
                    className=""
                    src="https://www.youtube.com/embed/aqz-KE-bpKQ"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hero section */}
      <div className="relative">
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gray-100" />
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="relative shadow-xl sm:rounded-2xl sm:overflow-hidden">
            <div className="absolute inset-0">
              <img
                className="h-full w-full object-cover"
                src={require("assets/img/keyvisual.png")}
                alt="People working on laptops"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-purple-800 to-indigo-700 mix-blend-multiply" />
            </div>
            <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
              <h1 className="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                <span className="block text-white">Take control of your</span>
                <span className="block text-indigo-200">customer support</span>
              </h1>
              <p className="mt-6 max-w-lg mx-auto text-center text-xl text-indigo-200 sm:max-w-3xl">
                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
                lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
                fugiat aliqua.
              </p>
              <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
                <div className="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5">
                  <a
                    href="#"
                    className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-indigo-700 bg-white hover:bg-indigo-50 sm:px-8"
                  >
                    Get started
                  </a>
                  <a
                    href="#"
                    className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-500 bg-opacity-60 hover:bg-opacity-70 sm:px-8"
                  >
                    Live demo
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Logo Cloud */}
      <div className="bg-gray-100">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm font-semibold uppercase text-gray-500 tracking-wide">
            Trusted by over 5 very average small businesses
          </p>
          <div className="mt-6 grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5">
            <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
              <img
                className="h-12"
                src="https://tailwindui.com/img/logos/tuple-logo-gray-400.svg"
                alt="Tuple"
              />
            </div>
            <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
              <img
                className="h-12"
                src="https://tailwindui.com/img/logos/mirage-logo-gray-400.svg"
                alt="Mirage"
              />
            </div>
            <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
              <img
                className="h-12"
                src="https://tailwindui.com/img/logos/statickit-logo-gray-400.svg"
                alt="StaticKit"
              />
            </div>
            <div className="col-span-1 flex justify-center md:col-span-2 md:col-start-2 lg:col-span-1">
              <img
                className="h-12"
                src="https://tailwindui.com/img/logos/transistor-logo-gray-400.svg"
                alt="Transistor"
              />
            </div>
            <div className="col-span-2 flex justify-center md:col-span-2 md:col-start-4 lg:col-span-1">
              <img
                className="h-12"
                src="https://tailwindui.com/img/logos/workcation-logo-gray-400.svg"
                alt="Workcation"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Alternating Feature Sections */}
      <div className="relative pt-16 pb-32 overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-gray-100"
        />
        <div className="relative">
          <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
            <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0">
              <div>
                <div>
                  <span className="h-12 w-12 rounded-md flex items-center justify-center bg-gradient-to-r from-purple-600 to-indigo-600">
                    <InboxIcon
                      className="h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  </span>
                </div>
                <div className="mt-6">
                  <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
                    Stay on top of customer support
                  </h2>
                  <p className="mt-4 text-lg text-gray-500">
                    Semper curabitur ullamcorper posuere nunc sed. Ornare
                    iaculis bibendum malesuada faucibus lacinia porttitor.
                    Pulvinar laoreet sagittis viverra duis. In venenatis sem
                    arcu pretium pharetra at. Lectus viverra dui tellus ornare
                    pharetra.
                  </p>
                  <div className="mt-6">
                    <a
                      href="#"
                      className="inline-flex bg-gradient-to-r from-purple-600 to-indigo-600 bg-origin-border px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white hover:from-purple-700 hover:to-indigo-700"
                    >
                      Get started
                    </a>
                  </div>
                </div>
              </div>
              <div className="mt-8 border-t border-gray-200 pt-6">
                <blockquote>
                  <div>
                    <p className="text-base text-gray-500">
                      &ldquo;Cras velit quis eros eget rhoncus lacus ultrices
                      sed diam. Sit orci risus aenean curabitur donec aliquet.
                      Mi venenatis in euismod ut.&rdquo;
                    </p>
                  </div>
                  <footer className="mt-3">
                    <div className="flex items-center space-x-3">
                      <div className="flex-shrink-0">
                        <img
                          className="h-6 w-6 rounded-full"
                          src="https://images.unsplash.com/photo-1509783236416-c9ad59bae472?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80"
                          alt=""
                        />
                      </div>
                      <div className="text-base font-medium text-gray-700">
                        Marcia Hill, Digital Marketing Manager
                      </div>
                    </div>
                  </footer>
                </blockquote>
              </div>
            </div>
            <div className="mt-12 sm:mt-16 lg:mt-0">
              <div className="pl-4 -mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
                <img
                  className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                  src="https://tailwindui.com/img/component-images/inbox-app-screenshot-1.jpg"
                  alt="Inbox user interface"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-24">
          <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
            <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-32 lg:max-w-none lg:mx-0 lg:px-0 lg:col-start-2">
              <div>
                <div>
                  <span className="h-12 w-12 rounded-md flex items-center justify-center bg-gradient-to-r from-purple-600 to-indigo-600">
                    <SparklesIcon
                      className="h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  </span>
                </div>
                <div className="mt-6">
                  <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
                    Better understand your customers
                  </h2>
                  <p className="mt-4 text-lg text-gray-500">
                    Semper curabitur ullamcorper posuere nunc sed. Ornare
                    iaculis bibendum malesuada faucibus lacinia porttitor.
                    Pulvinar laoreet sagittis viverra duis. In venenatis sem
                    arcu pretium pharetra at. Lectus viverra dui tellus ornare
                    pharetra.
                  </p>
                  <div className="mt-6">
                    <a
                      href="#"
                      className="inline-flex bg-gradient-to-r from-purple-600 to-indigo-600 bg-origin-border px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white hover:from-purple-700 hover:to-indigo-700"
                    >
                      Get started
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-12 sm:mt-16 lg:mt-0 lg:col-start-1">
              <div className="pr-4 -ml-48 sm:pr-6 md:-ml-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
                <img
                  className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
                  src="https://tailwindui.com/img/component-images/inbox-app-screenshot-2.jpg"
                  alt="Customer profile user interface"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Gradient Feature Section */}
      <div className="bg-gradient-to-r from-purple-800 to-indigo-700">
        <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 sm:pt-20 sm:pb-24 lg:max-w-7xl lg:pt-24 lg:px-8">
          <h2 className="text-3xl font-extrabold text-white tracking-tight">
            Inbox support built for efficiency
          </h2>
          <p className="mt-4 max-w-3xl text-lg text-purple-200">
            Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et
            magna sit morbi lobortis. Blandit aliquam sit nisl euismod mattis
            in.
          </p>
          <div className="mt-12 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name}>
                <div>
                  <span className="flex items-center justify-center h-12 w-12 rounded-md bg-white bg-opacity-10">
                    <feature.icon
                      className="h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  </span>
                </div>
                <div className="mt-6">
                  <h3 className="text-lg font-medium text-white">
                    {feature.name}
                  </h3>
                  <p className="mt-2 text-base text-purple-200">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats section */}
      <div className="relative bg-gray-900">
        <div className="h-80 absolute inset-x-0 bottom-0 xl:top-0 xl:h-full">
          <div className="h-full w-full xl:grid xl:grid-cols-2">
            <div className="h-full xl:relative xl:col-start-2">
              <img
                className="h-full w-full object-cover opacity-25 xl:absolute xl:inset-0"
                src={require("assets/img/keyvisual.png")}
                alt="People working on laptops"
              />
              <div
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-gray-900 xl:inset-y-0 xl:left-0 xl:h-full xl:w-32 xl:bg-gradient-to-r"
              />
            </div>
          </div>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8 xl:grid xl:grid-cols-2 xl:grid-flow-col-dense xl:gap-x-8">
          <div className="relative pt-12 pb-64 sm:pt-24 sm:pb-64 xl:col-start-1 xl:pb-24">
            <h2 className="text-sm font-semibold tracking-wide uppercase">
              <span className="bg-gradient-to-r from-purple-300 to-indigo-300 bg-clip-text text-transparent">
                Valuable Metrics
              </span>
            </h2>
            <p className="mt-3 text-3xl font-extrabold text-white">
              Get actionable data that will help grow your business
            </p>
            <p className="mt-5 text-lg text-gray-300">
              Rhoncus sagittis risus arcu erat lectus bibendum. Ut in adipiscing
              quis in viverra tristique sem. Ornare feugiat viverra eleifend
              fusce orci in quis amet. Sit in et vitae tortor, massa. Dapibus
              laoreet amet lacus nibh integer quis. Eu vulputate diam sit tellus
              quis at.
            </p>
            <div className="mt-12 grid grid-cols-1 gap-y-12 gap-x-6 sm:grid-cols-2">
              {metrics.map((item) => (
                <p key={item.id}>
                  <span className="block text-2xl font-bold text-white">
                    {item.stat}
                  </span>
                  <span className="mt-1 block text-base text-gray-300">
                    <span className="font-medium text-white">
                      {item.emphasis}
                    </span>{" "}
                    {item.rest}
                  </span>
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-white">
        <div className="max-w-4xl mx-auto py-16 px-4 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            <span className="block">Ready to get started?</span>
            <span className="-mb-1 pb-1 block bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Get in touch or create an account.
            </span>
          </h2>
          <div className="mt-6 space-y-4 sm:space-y-0 sm:flex sm:space-x-5">
            <a
              href="#"
              className="flex items-center justify-center bg-gradient-to-r from-purple-600 to-indigo-600 bg-origin-border px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white hover:from-purple-700 hover:to-indigo-700"
            >
              Learn more
            </a>
            <a
              href="#"
              className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-indigo-800 bg-indigo-50 hover:bg-indigo-100"
            >
              Get started
            </a>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
