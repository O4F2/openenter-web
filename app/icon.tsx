import { ImageResponse } from 'next/og'

// 이미지 크기 설정
export const size = {
    width: 32,
    height: 32,
}
export const contentType = 'image/png'

// 파비콘 생성 함수
export default function Icon() {
    return new ImageResponse(
        (
            <div
                style={{
                    fontSize: 20,
                    background: '#000000', // 검은색 배경
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#C0A062',      // 금색 글씨
                    fontFamily: 'serif',   // 명조체 계열
                    fontWeight: 900,
                    borderRadius: '6px',   // 모서리 둥글게
                }}
            >
                OE
            </div>
        ),
        {
            ...size,
        }
    )
}