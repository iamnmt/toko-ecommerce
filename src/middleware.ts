import type { NextFetchEvent, NextRequest } from "next/server"
import { NextResponse } from "next/server"

export async function middleware(req: NextRequest, _: NextFetchEvent) {
  const { pathname } = req.nextUrl
  if ( pathname == '/detail' ) {
    return NextResponse.redirect(new URL('/', req.url))
  }
  return NextResponse.next()
}
