import CodeSmall from "../components/CodeSmall";
import KbdTag from "../components/Kbd";
import LinkPreview from "../components/LinkPreview";

export default function HomePage() {
  return (
    <div className="">
      <div className="h-screen flex flex-col items-center justify-center">
        <div className="Versa text-6xl text-center mb-2">
          <h2>
            Build{" "}
            <span className="p-2 bg-gradient-to-r from-yellow-600 to-emerald-500 rounded-full">
              Something
            </span>
          </h2>
          <h2 className="mt-5">
            <span className="p-2 bg-gradient-to-r from-green-500 to-indigo-800 rounded-full">
              New
            </span>{" "}
            And Fast
          </h2>
        </div>
        <div className="mt-5 w-1/2 text-center">
          <p>
            Dev Component is a library of reusable components designed for
            developers. Streamline your development with speed and ease, giving
            you full control and freedom over every component.
          </p>
          <p className="mt-2">
            It is based on{" "}
            <LinkPreview
              text="TailwindCSS"
              url="https://tailwindcss.com"
              previewImage="https://ipfs.filebase.io/ipfs/QmYy1UURYnX2aW8awUDfzpJVQJDV2PBeA6WKGWrBFHYhf6"
              classname="text-blue-500"
            />
            , {""}
            <LinkPreview
              text="NextUI"
              url="https://nextui.org"
              previewImage="https://ipfs.filebase.io/ipfs/QmYgc63SfgkhCXhsyqLiYdoFyddDd3TZQBRZireqKsBe11"
              classname="text-blue-500"
            />
            , and{" "}
            <LinkPreview
              text="Framer Motion"
              url="https://www.framer.com/motion/"
              previewImage="https://ipfs.filebase.io/ipfs/QmZ7MbgwsrGa4MPdgCM62pqL2MQ6VPZmLxDYECrRKyYkwg"
              classname="text-blue-500"
            />
            .
          </p>
        </div>
        <div className="mt-5 text-center">
          <h2>What Are You Waiting For?</h2>

          <button className="mt-10 animate-bounce">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="currentColor"
              viewBox="0 0 256 256"
            >
              <path d="M205.66,149.66l-72,72a8,8,0,0,1-11.32,0l-72-72a8,8,0,0,1,11.32-11.32L120,196.69V40a8,8,0,0,1,16,0V196.69l58.34-58.35a8,8,0,0,1,11.32,11.32Z"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
