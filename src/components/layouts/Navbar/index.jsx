import Link from "next/link";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();
  return (
    <nav className="bg-gray-800 sticky top-0 mb-5">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center">
              <Link href="/">
                <img
                  className="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                  alt="Next Js Store"
                />
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                <Link
                  href="/"
                  className={`${
                    router.pathname === "/" ? "bg-gray-900" : ""
                  }  text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium`}
                  aria-current="page"
                >
                  Dashboard
                </Link>
                <Link
                  href="/about"
                  className={`${
                    router.pathname === "/about" ? "bg-gray-900" : ""
                  } text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium`}
                >
                  About
                </Link>
                <Link
                  href="/product"
                  className={`${
                    router.pathname === "/product" ? "bg-gray-900" : ""
                  } text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium`}
                >
                  Product
                </Link>
                {/* <a
                  href="#"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                >
                  Calendar
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
