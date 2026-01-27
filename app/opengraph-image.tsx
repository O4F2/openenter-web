import { ImageResponse } from 'next/og'

// 1. 엣지 런타임 적용 (속도 향상)
export const runtime = 'edge'

export const alt = 'OpenEnter - Web3 Growth Agency'
export const size = {
    width: 1200,
    height: 630,
}
export const contentType = 'image/png'

// 2. 이미지 생성
export default async function Image() {
    return new ImageResponse(
        (
            <div
                style={{
                    background: '#020202', // 사이트 배경색과 통일
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: 'sans-serif',
                }}
            >
                {/* 메인 로고 영역 */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <div style={{ fontSize: 80, fontWeight: 900, color: 'white', letterSpacing: '-0.05em' }}>
                        OPENENTER
                    </div>
                    {/* 보라색 점 포인트 */}
                    <div style={{ fontSize: 80, fontWeight: 900, color: '#A855F7', marginLeft: '4px' }}>
                        .
                    </div>
                </div>

                {/* 하단 슬로건 */}
                <div style={{
                    marginTop: 20,
                    fontSize: 30,
                    color: '#9CA3AF', // 회색 (Gray-400)
                    fontWeight: 600,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase'
                }}>
                    Web3 Growth Agency
                </div>
            </div>
        ),
        {
            ...size,
        }
    )
}