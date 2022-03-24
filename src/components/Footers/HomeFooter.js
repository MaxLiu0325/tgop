const HomeFooter = () => {
  return (
    <footer className="bg-[#FFFAF3]" aria-labelledby="footer-heading">
      <div className="flex flex-col items-center justify-center py-12">
        <img className="w-[calc(100vw/1920*437)]" src={require("assets/img/tgopbaby-logo.png")} alt="" />
        <div className="flex gap-7 items-center justify-center my-8">
          <a className="my-auto" href="#">
            <img className="h-[calc(100vw/1920*25)]" src={require("assets/img/twitter-icon.png")} alt="" />
          </a>
          <a className="my-auto" href="#">
            <img className="h-[calc(100vw/1920*30)]" src={require("assets/img/instagram-icon.png")} alt="" />
          </a>
          <a className="my-auto" href="#">
            <img className="h-[calc(100vw/1920*28)]" src={require("assets/img/discord-icon.png")} alt="" />
          </a>
        </div>
        <p className="font-seto text-2xl">T-GOP BABY All right reserved.</p>
      </div>
    </footer>
  );
};

export default HomeFooter;
