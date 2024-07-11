import type {NextRequest} from 'next/server';
import {NextResponse} from 'next/server';
import {getToken} from 'next-auth/jwt';

export async function middleware(ctx: NextRequest) {
    const secret = process.env.NEXTAUTH_SECRET as string;

    //const token = await getToken({req: ctx, secret});

    //if (!token) {
        //return NextResponse.redirect(new URL("", ctx.url))
    //}



    // async query sin await
    return NextResponse.next();
}

//export const config = {
    //matcher: ['/profile/:path*'],
//}
