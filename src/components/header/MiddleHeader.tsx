import { logo } from "@/assets";
import Image from "next/image";
import Link from "next/link";
import { FaRegUser } from "react-icons/fa";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { MdFavoriteBorder } from "react-icons/md";
import Container from "../Container";
import SearchInput from "../SearchInput";
import { auth } from "@/auth";

const MiddleHeader = async () => {
  const session = await auth();
  console.log(session);

  return (
    <div className="w-full h-20 border-b-[1px] border-b-gray-400">
      <Container className="h-full flex items-center justify-between gap-20">
        {/* Logo */}

        <Link href={"/"}>
          <Image src={logo} alt="logoImage" className="w-32" />
        </Link>

        <SearchInput />

        {/* ListItem */}
        <div className="flex items-center gap-4">
          {session?.user ? (
            <Link href="/profile" className="flex items-center gap-2">
              <div className="text-xl border border-darkBg p-2.5 rounded-full">
                <Image
                  src={session?.user?.image!}
                  alt="profileImage"
                  width={30}
                  height={30}
                  className="rounded-full "
                />
              </div>
              <div>
                <p className="text-xs">Hello, {session?.user?.name}</p>
                <p className="text-sm font-semibold">view profile</p>
              </div>
            </Link>
          ) : (
            <Link href="/signin" className="flex items-center gap-2">
              <div className="text-xl border border-darkBg p-2.5 rounded-full">
                <FaRegUser />
              </div>
              <div>
                <p className="text-xs">Hello, Guest</p>
                <p className="text-sm font-semibold">Login / Register</p>
              </div>
            </Link>
          )}

          <Link href={"/favorite"} className="relative">
            <MdFavoriteBorder className="text-2xl" />
            <span className="w-4 h-4 text-[10px] font-semibold bg-themeColor text-themeWhite inline-flex items-center justify-center rounded-full absolute -top-1 -right-1">
              0
            </span>
          </Link>
          <Link href={"/cart"} className="relative">
            <HiOutlineShoppingBag className="text-2xl" />
            <span className="w-4 h-4 text-[10px] font-semibold bg-themeColor text-themeWhite inline-flex items-center justify-center rounded-full absolute -top-1 -right-1">
              0
            </span>
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default MiddleHeader;
