import { NextResponse } from 'next/server';

export async function GET() {
  const restletUrl = process.env.NETSUITE_RESTLET_URL;
  const authToken = process.env.NETSUITE_AUTH_TOKEN;

  return NextResponse.json({
    hasRestletUrl: !!restletUrl,
    hasAuthToken: !!authToken,
    restletUrlLength: restletUrl?.length || 0,
    authTokenLength: authToken?.length || 0,
    restletUrlPreview: restletUrl?.substring(0, 50) + '...',
    authTokenPreview: authToken?.substring(0, 20) + '...',
  });
}
