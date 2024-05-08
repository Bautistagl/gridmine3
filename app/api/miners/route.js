// pages/api/workerDetails.js

import { NextResponse } from 'next/server';

export async function POST(req) {
  try {
    const result = await fetch('https://api.luxor.tech/graphql', {
      method: 'POST',
      headers: {
        'x-lux-api-key': 'lxk.dc326de7346952b80838f2d66bead1bd',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: `
              query getWorkerDetails($duration: IntervalInput!, $mpn: MiningProfileName!, $uname: String!, $first: Int!) {
                  getWorkerDetails(
                      duration: $duration
                      mpn: $mpn
                      uname: $uname
                      first: $first
                  ) {
                      edges {
                        node {
                          minerId
                          workerName
                          miningProfileName
                          updatedAt
                          status
                          hashrate
                          validShares
                          staleShares
                          invalidShares
                          lowDiffShares
                          badShares
                          duplicateShares
                          revenue
                          efficiency
                        }
                      }
                  }
              }
            `,
        variables: {
          duration: { days: 1 },
          mpn: 'BTC',
          uname: 'grid2',
          first: 10,
        },
      }),
    });

    const data = await result.json();

    return NextResponse.json(
      { message: data },
      { status: 200 },
      { body: data }
    );
  } catch (error) {
    console.error('Error fetching data:', error);
    return NextResponse.json(
      { message: 'Failed to Send Email' },
      { status: 500 }
    );
  }
}
