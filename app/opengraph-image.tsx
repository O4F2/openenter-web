import { ImageResponse } from 'next/og'

// 1. 이미지 크기 설정 (카카오톡 권장 비율)
export const size = {
    width: 1200,
    height: 630,
}
export const contentType = 'image/png'

// 2. 이미지 생성
export default function Image() {
    return new ImageResponse(
        (
            <div
                style={{
                    fontSize: 60,
                    background: '#050505', // 배경색
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                }}
            >
                {/* 로고 텍스트 */}
                < div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <div style={{ fontSize: 80, fontWeight: 900, fontFamily: 'serif', color: '#C0A062' }}> OpenEnter </div>
                </div>

                {/* 슬로건 텍스트 */}
                <div style={{ marginTop: 20, fontSize: 30, color: '#aaaaaa', fontFamily: 'sans-serif' }}>
                    Open Events, Enter Markets
                </div>
            </div>
        ),
        {
            ...size,
        }
    )
}