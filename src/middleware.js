import { NextResponse } from "next/server";

export const middleware = (req) => {
  const isLogin = false;
  if (isLogin) {
    return NextResponse.next();
  } else {
    return NextResponse.redirect(new URL("/auth/login", req.url)); // Redirect ke route "/"
  }
};

// Route yang mau diberi middleware nya
export const config = {
  matcher: ["/product", "/shop"],
};
